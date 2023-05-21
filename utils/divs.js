const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// eslint-disable-next-line import/prefer-default-export
export { renderToDom };

// Path: utils/viewDirector.js
