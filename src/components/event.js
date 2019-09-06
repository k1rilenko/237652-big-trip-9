export const event = (data) => {
  return `    <li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${Array.from(data.type)[Math.floor(Math.random() * 10)]}" alt="Event type icon">
    </div>
    <h3 class="event__title">Check into hotel</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T12:25">${new Date(data.time.start).toLocaleTimeString()}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T13:35">${new Date(data.time.finish).toLocaleTimeString()}</time>
      </p>
      <p class="event__duration">1H 30M</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${data.cost[Math.floor(Math.random() * 5)]}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${data.options.map((el) => `
        <li class="event__offer">
        <span class="event__offer-title">${el.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${el.price}</span>
      </li>
      `).join(``)}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};
