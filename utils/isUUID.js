/**
 * @description UUIDかどうか判別する
 * @param {string} str 
 * @returns {boolean} UUIDかどうか
 */
export function isUUID(str) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidPattern.test(str);
}