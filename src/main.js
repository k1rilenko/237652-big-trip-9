import {container} from './components/container.js';
import {day} from './components/day.js';
import {event} from './components/event.js';
import {eventEdit} from './components/eventEdit.js';
import {filters} from './components/filters.js';
import {menu} from './components/menu.js';
import {route} from './components/route.js';
import {sorts} from './components/sorts.js';
import {eventData} from './components/eventData.js';
import {events} from './components/events.js';
import {menuData} from './components/menuData.js';
import {filtersData} from './components/filtersData.js';

const render = (block, template, position = `afterend`) => {
  const element = document.querySelector(block);
  element.insertAdjacentHTML(position, template);
};

render(`.trip-main__trip-info`, route(), `afterbegin`);
render(`.trip-main__trip-controls`, menu(menuData), `beforeend`);
render(`.trip-main__trip-controls`, filters(filtersData), `beforeend`);
render(`.trip-events`, sorts(), `beforeend`);
render(`.trip-events`, eventEdit(), `beforeend`);
render(`.trip-events`, container(), `beforeend`);
render(`.trip-days`, day(), `beforeend`);
for (let item of events) {
  render(`.trip-events__list`, event(item), `beforeend`);
}

