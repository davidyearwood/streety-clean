import createElement from '../utils/createElement.js';
import createId from '../utils/createId.js';
import replaceChar from '../utils/replaceChar.js';

function AutoCompleteItem(item) {
  return createElement(
    'li',
    {
      class: 'autocomplete__item',
      'data-id': createId()
    },
    `Ward: ${item.ward} - Date: ${item.month_name} ${replaceChar(
      item.dates,
      ',',
      '-'
    )}`
  );
}

export default function AutocompleteList(items) {
  let autoCompleteItems = items.map(item => AutoCompleteItem(item));
  let id = createId();
  return createElement(
    'ul',
    { class: 'autocomplete', 'data-id': id, id },
    autoCompleteItems
  );
}
