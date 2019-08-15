import {container} from './components/container.js';
import {day} from './components/day.js';
import {event} from './components/event.js';
import {eventEdit} from './components/eventEdit.js';
import {filters} from './components/filters.js';
import {menu} from './components/menu.js';
import {route} from './components/route.js';
import {sorts} from './components/sorts.js';

const render = (block, template, position = `afterend`) => {
  const element = document.querySelector(block);
  element.insertAdjacentHTML(position, template);
};

render(`.trip-main__trip-info`, route(), `afterbegin`);
render(`.trip-main__trip-controls`, menu(), `beforeend`);
render(`.trip-main__trip-controls`, filters(), `beforeend`);
render(`.trip-events`, sorts(), `beforeend`);
render(`.trip-events`, eventEdit(), `beforeend`);
render(`.trip-events`, container(), `beforeend`);
render(`.trip-days`, day(), `beforeend`);
for (let i = 0; i < 3; i++) {
  render(`.trip-events__list`, event(), `beforeend`);
}

