import createElement from '../../utils/createElement.js';
import createId from '../../utils/createId.js';

export default function AutoComplete() {
  let id = createId();
  return createElement('ul', { class: 'autocomplete', 'data-id': id, id });
}
