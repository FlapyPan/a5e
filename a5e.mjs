/**
 * 替换单个单词为类似 k8s 缩写
 * @param {string} text 要替换的字符串
 * @returns {string} 替换好的字符串
 */
function a5eSingle(text) {
    const len = text.length
    if (len < 3) return text
    return `${text.charAt(0)}${len - 2}${text.charAt(len - 1)}`
}
/**
 * 将所有单词替换为类似 k8s 的缩写
 * @param {string} text 要替换的字符串
 * @returns {string} 替换好的字符串
 */
function a5e(text) {
    return text.replace(/\b(\w{3,})\b/g, a5eSingle)
}

export default a5e
export { a5e, a5eSingle }

