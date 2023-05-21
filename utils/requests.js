const jokeRequest = () => new Promise((resolve, reject) => {
  fetch(('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((joke) => resolve(joke))
    .catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { jokeRequest };
