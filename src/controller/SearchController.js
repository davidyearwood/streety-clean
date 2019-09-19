import getStreetSweepingSchedule from '../utils/getStreetSweepingSchedule.js';
import handleSweepScheduleError from '../utils/handleSweepScheduleError.js';
import AutocompleteList from '../components/autocompleteList.js';
import SearchField from '../components/SearchField.js';
import { debounce } from '../utils/throttle-debounce.js';

export default class SearchController {
  constructor(config) {
    this.container = config.container;
    this.searchField = SearchField();
    this.container.appendChild(this.searchField);

    this.searchField.addEventListener(
      'input',
      debounce(300, this.handleInput.bind(this))
    );
  }

  handleInput(e) {
    let query = e.target.value;
    getStreetSweepingSchedule(`$q=${query}`)
      .then(schedule => {
        console.log('sent request');
        if (schedule.error) {
          throw schedule;
        } else {
          this.container.appendChild(AutocompleteList(schedule));
        }
      })
      .catch(handleSweepScheduleError);
  }
}
