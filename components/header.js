// eslint-disable-next-line import/prefer-default-export
export const createHeader = () => {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  title.textContent = 'Jared\'s Joke Generator';
  header.appendChild(title);
};
createHeader();
