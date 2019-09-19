import createElement from '../utils/createElement.js';
import createId from '../utils/createId.js';

export default function SearchField() {
  let id = createId;
  return createElement('input', {
    type: 'text',
    id,
    'data-id': id
  });
}
