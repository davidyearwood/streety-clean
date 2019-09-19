import AutoCompleteItem from './AutoCompleteItem.js';

export default function AutocompleteList(items) {
  return items.map(item => AutoCompleteItem(item));
}
