export const urlEncode = (obj: Record<string, unknown>) => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => `${key}=${obj[key]}`)
    .join('&');
};
