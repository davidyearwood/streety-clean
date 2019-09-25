import createElement from '../utils/createElement.js';
import createId from '../utils/createId.js';

export default function SearchField() {
  let id = createId();
  return createElement('input', {
    type: 'number',
    min: '0',
    max: '50',
    id,
    'data-id': id
  });
}
