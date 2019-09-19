export default function createId(prefix) {
  return prefix === undefined
    ? Math.random()
        .toString(36)
        .substr(2, 9)
    : `${prefix}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
}
