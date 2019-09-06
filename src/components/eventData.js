export const eventData = {
  type: new Set([`taxi.png`, `bus.png`, `train.png`, `ship.png`, `transport.png`, `drive.png`, `flight.png`, `check-in.png`, `sightseeing.png`, `restaurant.png`]),
  img: `http://picsum.photos/300/150?r=${Math.random()}`,
  city: new Set([`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`, `Minsk`]),
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`,
  date: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 100,
  time: {
    start: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 20 * 60 * 100,
    finish: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 100
  },
  cost: [500, 700, 2100, 600, 900],
  options: [
    {
      name: `Add luggage`,
      price: 10,
      flag: false
    },
    {
      name: `Switch to comfort`,
      price: 150,
      flag: Boolean(Math.round(Math.random()))
    },
    {
      name: `Choose seats`,
      price: 9,
      flag: Boolean(Math.round(Math.random()))
    },
  ]
};
