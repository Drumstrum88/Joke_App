import 'bootstrap';
import '../styles/main.scss';
import { jokeRequest } from '../utils/requests';
// import { createHeader } from '../components/header';

// createHeader();
const init = () => {
  document.querySelector('#button-container').innerHTML = `
    <button id="get-joke" class="btn btn-primary">Get Joke</button>
  `;
};

const renderJokeCard = (joke) => {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const setupParagraph = document.createElement('p');
  setupParagraph.classList.add('card-text');
  setupParagraph.textContent = joke.setup;

  const revealButton = document.createElement('button');
  revealButton.id = 'reveal-punchline';
  revealButton.classList.add('btn', 'btn-secondary');
  revealButton.textContent = 'Reveal Punchline';

  cardBody.appendChild(setupParagraph);
  cardBody.appendChild(revealButton);

  const jokeCard = document.createElement('div');
  jokeCard.classList.add('card');
  jokeCard.appendChild(cardBody);

  document.querySelector('#joke-container').innerHTML = '';
  document.querySelector('#joke-container').appendChild(jokeCard);

  revealButton.addEventListener('click', () => {
    if (joke.type === 'twopart') {
      const punchlineParagraph = document.createElement('p');
      punchlineParagraph.classList.add('card-text');
      punchlineParagraph.textContent = joke.delivery;

      cardBody.appendChild(punchlineParagraph);
    }

    revealButton.style.display = 'none';
  });
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    jokeRequest().then((joke) => {
      renderJokeCard(joke);
    });
  });
};

const startApp = () => {
  init();
  events();
};

startApp();
