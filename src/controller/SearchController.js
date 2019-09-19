import getStreetSweepingSchedule from '../utils/getStreetSweepingSchedule.js';
import handleSweepScheduleError from '../utils/handleSweepScheduleError.js';
import AutoComplete from '../components/AutoComplete/AutoComplete.js';
import AutoCompleteList from '../components/AutoComplete/AutoCompleteList.js';
import SearchField from '../components/SearchField.js';
import { debounce } from '../utils/throttle-debounce.js';

export default class SearchController {
  constructor(config) {
    this.container = config.container;
    this.searchField = SearchField();
    this.autocomplete = AutoComplete();
    this.container.appendChild(this.searchField);
    this.container.appendChild(this.autocomplete);
    this.searchField.addEventListener(
      'input',
      debounce(300, this.handleInput.bind(this))
    );
  }

  handleInput(e) {
    let query = e.target.value;
    console.log(query);
    if (!query || !query.trim()) {
      removeAllChildren(this.autocomplete);
      return null;
    }

    getStreetSweepingSchedule(`$q=${query}`)
      .then(schedule => {
        if (schedule.error) {
          throw schedule;
        } else {
          removeAllChildren(this.autocomplete);

          let fragment = document.createDocumentFragment();

          AutoCompleteList(schedule).forEach(item =>
            fragment.appendChild(item)
          );

          this.autocomplete.appendChild(fragment);
        }
      })
      .catch(handleSweepScheduleError);
  }
}

function removeAllChildren(element) {
  let { children } = element;
  element.innerHTML = '';
  return children;
}
