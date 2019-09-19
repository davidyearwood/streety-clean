import getStreetSweepingSchedule from './getStreetSweepingSchedule.js';
import handleSweepScheduleError from './handleSweepScheduleError.js';

let searchField = document.getElementById('search');

getStreetSweepingSchedule()
  .then(schedule => {
    if (schedule.error) {
      throw schedule;
    } else {
      console.log(schedule);
    }
  })
  .catch(handleSweepScheduleError);

class SearchController {
  constructor(config) {
    this.container = config.container;
  }
}
