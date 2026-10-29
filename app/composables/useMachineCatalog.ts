export interface MachineRecord {
  merchantId?: number | null
  id: number;
  kind: "printing" | "lamination" | "die-cutting" | "foil";
  source: string;
  name: string;
  size: string;
  price: number;
  unitPrice: number;
  updatedAt: string;
  published: boolean;
  active: boolean;
}

export function useMachineCatalog(kind: MachineRecord["kind"]) {
  const { items } = useCatalog<MachineRecord>("printing-machines");
  const records = computed(() =>
    items.value.filter((item) => item.kind === kind),
  );
  return { records };
}
