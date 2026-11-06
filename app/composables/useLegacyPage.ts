interface LegacyPageOptions {
  title: string;
  styles?: string[];
  scripts?: string[];
  sweetAlert?: boolean;
  onScriptsLoaded?: () => void;
}

const scriptCache = new Map<string, string>();

export function useLegacyPage(options: LegacyPageOptions) {
  const links = [
    { rel: "preconnect" as const, href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect" as const,
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous" as const,
    },
    {
      rel: "stylesheet" as const,
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet" as const,
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    },
    {
      rel: "stylesheet" as const,
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css",
    },
    ...(options.sweetAlert
      ? [
          {
            rel: "stylesheet" as const,
            href: "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.2/dist/sweetalert2.min.css",
          },
        ]
      : []),
    ...(options.styles || []).map((href) => ({ rel: "stylesheet" as const, href })),
  ];

  useHead({ title: options.title, link: links });

  let disposed = false;
  onBeforeUnmount(() => { disposed = true; });

  onMounted(async () => {
    if (options.sweetAlert && !(window as any).Swal) {
      try {
        await loadExternalScript(
          "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.2/dist/sweetalert2.all.min.js",
        );
      } catch (error) {
        console.warn("[Dulank legacy runtime] SweetAlert unavailable", error);
      }
    }

    if (disposed) return;
    const capturedCallbacks: EventListener[] = [];
    const originalAdd = document.addEventListener;
    const patchedAdd: typeof document.addEventListener = ((
      type: string,
      listener: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions,
    ) => {
      if (type === "DOMContentLoaded") {
        capturedCallbacks.push(
          typeof listener === "function"
            ? listener
            : (event: Event) => listener.handleEvent(event),
        );
        return;
      }

      return originalAdd.call(document, type, listener, opts as any);
    }) as typeof document.addEventListener;

    try {
      for (const src of options.scripts || []) {
        if (disposed) return;
        let code = scriptCache.get(src);

        if (code === undefined) {
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to load legacy script: ${src}`);
          }
          code = await response.text();
          scriptCache.set(src, code);
        }
        if (disposed) return;

        // Legacy files were originally separate classic scripts. Keep their
        // declarations available to later files while avoiding top-level
        // const/let collisions when navigating between Nuxt pages.
        const fn = new Function(
          code +
            `\nreturn {\n` +
            `  loadHTML: typeof loadHTML === 'function' ? loadHTML : undefined,\n` +
            `  showEl: typeof showEl === 'function' ? showEl : undefined,\n` +
            `  hideEl: typeof hideEl === 'function' ? hideEl : undefined,\n` +
            `  parseRupiah: typeof parseRupiah === 'function' ? parseRupiah : undefined,\n` +
            `  formatRupiah: typeof formatRupiah === 'function' ? formatRupiah : undefined,\n` +
            `  easyNumberSeparator: typeof easyNumberSeparator === 'function' ? easyNumberSeparator : undefined,\n` +
            `  updateTotal: typeof updateTotal === 'function' ? updateTotal : undefined,\n` +
            `  add_to: typeof add_to === 'function' ? add_to : undefined,\n` +
            `  setupAvatarUpload: typeof setupAvatarUpload === 'function' ? setupAvatarUpload : undefined,\n` +
            `  sweetDelete: typeof sweetDelete === 'function' ? sweetDelete : undefined,\n` +
            `  updateTabKertas: typeof updateTabKertas === 'function' ? updateTabKertas : undefined,\n` +
            `  checkValue: typeof checkValue === 'function' ? checkValue : undefined\n` +
            `};\n//# sourceURL=${src}`,
        );
        // Capture only this script's synchronous registrations. Never leave
        // the document patched while downloads or another page are pending.
        let exported: Record<string, unknown>;
        document.addEventListener = patchedAdd;
        try {
          exported = fn.call(window) as Record<string, unknown>;
        } finally {
          document.addEventListener = originalAdd;
        }

        for (const [name, value] of Object.entries(exported)) {
          if (typeof value === "function") {
            (window as any)[name] = value;
          }
        }
      }
    } catch (error) {
      if (!disposed) console.error("[Dulank legacy runtime]", error);
    } finally {
      if (!disposed) {
        const event = new Event("DOMContentLoaded");

        for (const callback of capturedCallbacks) {
          if (disposed) break;
          try {
            callback.call(document, event);
          } catch (error) {
            console.error("[Dulank page init]", error);
          }
        }

        if (!disposed) options.onScriptsLoaded?.();
      }
    }
  });
}

function loadExternalScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${src}"]`,
    ) as HTMLScriptElement | null;

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      { once: true },
    );
    document.head.appendChild(script);
  });
}
