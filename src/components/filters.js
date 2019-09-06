export const filters = (data) => {
  return `<form class="trip-filters" action="${data.action}" method="get">
  ${data.input.map((el) => `
  <div class="trip-filters__filter">
    <input id="filter-${el.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${el.name}" ${el.checked ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${el.name}">${el.name}</label>
  </div>
  `).join(``)}

  <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};
