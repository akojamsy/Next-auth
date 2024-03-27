/**
 * Thess is an array of rouotes that will unauthorized users
 *
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * These is an array of routes that are used for authentication. These routes will redirect logged in users to/settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/error",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with prefix are used for API authentication purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @types {string}
 */
export const DEFAULT_LOGIN_REDIRECT_PATH = "/settings";
