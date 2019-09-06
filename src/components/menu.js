export const menu = (data) => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${data.map((el) => `<a class="trip-tabs__btn ${el.active ? `trip-tabs__btn--active` : ``} href="${el.href}">${el.name}</a> `).join(``)}
  </nav>`;
};
