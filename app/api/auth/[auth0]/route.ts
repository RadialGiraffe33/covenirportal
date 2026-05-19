import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  // Always land on /dashboard after a successful login — avoids the
  // double-redirect from / → /dashboard that causes the new-window behaviour.
  login: handleLogin({ returnTo: '/dashboard' }),
});
