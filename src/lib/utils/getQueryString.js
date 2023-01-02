export function getQueryString(payload) {
  return "?" + new URLSearchParams(payload).toString();
}
