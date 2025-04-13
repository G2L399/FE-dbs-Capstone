/**
 * Set a cookie with the given parameters.
 * @param {Object} options - Cookie configuration.
 * @param {string} options.name - The name of the cookie.
 * @param {string} options.value - The value of the cookie.
 * @param {number} [options.endDateFromNowInM] - Expiration time in minutes from now (optional).
 * @param {string} [options.path] - The path for the cookie (optional, default is '/').
 * @param {string} [options.domain] - The domain for the cookie (optional).
 * @param {boolean} [options.secure] - Whether the cookie should be secure (optional).
 * @param {boolean} [options.httpOnly] - Whether the cookie should be HTTP-only (optional, not supported by document.cookie).
 */
export function setCookie({
  name,
  value,
  endDateFromNowInM,
  path = '/',
  domain,
  secure
}: {
  name: string;
  value: string;
  endDateFromNowInM?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
}) {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (endDateFromNowInM) {
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + endDateFromNowInM * 60 * 1000
    );
    cookieString += `; expires=${expirationDate.toUTCString()}`;
  }

  if (path) cookieString += `; path=${path}`;
  if (domain) cookieString += `; domain=${domain}`;
  if (secure) cookieString += '; secure';

  document.cookie = cookieString;
}

/**
 * Get the value of a cookie by its name.
 * @param {string} name - The name of the cookie.
 * @returns {string|null} - The value of the cookie or null if not found.
 */
export function getCookie(name: string): string | null {
  const nameEQ = encodeURIComponent(name) + '=';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }

  return null;
}

/**
 * Update an existing cookie with new values.
 * @param {Object} options - Updated cookie configuration.
 * @param {string} options.name - The name of the cookie.
 * @param {string} options.value - The updated value of the cookie.
 * @param {number} [options.endDateFromNowInM] - New expiration time in minutes from now (optional).
 * @param {string} [options.path] - The updated path for the cookie (optional, default is '/').
 * @param {string} [options.domain] - The updated domain for the cookie (optional).
 * @param {boolean} [options.secure] - Whether the cookie should be secure (optional).
 */
export function updateCookie({
  name,
  value,
  endDateFromNowInM,
  path = '/',
  domain,
  secure
}: {
  name: string;
  value: string;
  endDateFromNowInM?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
}) {
  setCookie({ name, value, endDateFromNowInM, path, domain, secure });
}

/**
 * Delete a cookie by setting its expiration date to the past.
 * @param {Object} options - Cookie deletion configuration.
 * @param {string} options.name - The name of the cookie.
 * @param {string} [options.path] - The path of the cookie (optional, default is '/').
 * @param {string} [options.domain] - The domain of the cookie (optional).
 */
export function deleteCookie({
  name,
  path = '/',
  domain
}: {
  name: string;
  path?: string;
  domain?: string;
}) {
  setCookie({ name, value: '', endDateFromNowInM: -1, path, domain });
}
