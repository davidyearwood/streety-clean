export default function removeAllChildren(element) {
  let { children } = element;
  element.innerHTML = '';
  return children;
}
