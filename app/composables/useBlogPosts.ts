import type { BlogPost } from "#server/types/blog";

export function useBlogPosts() {
  const { data } = useApi<BlogPost[]>("/blog?page=1&limit=10");
  const posts = computed<BlogPost[]>(() => data.value ?? []);
  return { posts };
}
