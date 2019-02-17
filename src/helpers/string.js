export const urlEncode = (obj) => {
    return Object.keys(obj).filter(key => obj[key]).map(key => `${key}=${obj[key]}`).join('&')
}