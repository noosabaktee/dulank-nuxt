import { isProtectedRoute, loginRedirectQuery } from "~/utils/auth-routes";

/**
 * Guard halaman protected: guest yang membuka halaman user-scoped
 * diarahkan ke /login (dengan redirect query).
 */
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  if (!auth.isAuthenticated && isProtectedRoute(to.path)) {
    return navigateTo(`/login${loginRedirectQuery(to.fullPath)}`);
  }
});