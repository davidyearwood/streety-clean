import createElement from '../../utils/createElement.js';
import createId from '../../utils/createId.js';
import replaceChar from '../../utils/replaceChar.js';

export default function AutoCompleteItem(item) {
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
