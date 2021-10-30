'use strict';

let activePlayer,
  board,
  won = false,
  count = 0;
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('close');

const closeModal = function () {
  modalContainer.classList.remove('show');
};

const showWinner = function () {
  modalContainer.classList.add('show');
  modalText.textContent = ` ${activePlayer} is the winner.`;
};

const showTie = function () {
  modalContainer.classList.add('show');
  modalText.textContent = "It's a tie!!!";
};

const switchPlayer = function () {
  activePlayer = activePlayer === 'X' ? 'O' : 'X';
};

const isWinner = function (board, activePlayer) {
  if (
    board[0] === activePlayer &&
    board[1] === activePlayer &&
    board[2] === activePlayer
  ) {
    showWinner();
    won = true;
  } else if (
    board[3] === activePlayer &&
    board[4] === activePlayer &&
    board[5] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[6] === activePlayer &&
    board[7] === activePlayer &&
    board[8] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[0] === activePlayer &&
    board[3] === activePlayer &&
    board[6] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[1] === activePlayer &&
    board[4] === activePlayer &&
    board[7] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[2] === activePlayer &&
    board[5] === activePlayer &&
    board[8] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[0] === activePlayer &&
    board[4] === activePlayer &&
    board[8] === activePlayer
  ) {
    showWinner();

    won = true;
  } else if (
    board[2] === activePlayer &&
    board[4] === activePlayer &&
    board[6] === activePlayer
  ) {
    showWinner();

    won = true;
  }
  return won;
};

const init = function () {
  won = false;
  count = 0;
  activePlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];

  for (let index = 0; index <= 8; index++)
    document.querySelector(`.item${index}`).textContent = '';
};
init();

for (let index = 0; index <= 8; index++)
  document
    .querySelector(`.item${index}`)
    .addEventListener('click', function () {
      if (board[index] === '') {
        // stop multiple entries & checks space is empty
        board[index] = activePlayer;
        count++;
        document.querySelector(`.item${index}`).textContent = activePlayer;
        if (isWinner(board, activePlayer) === false && count === 9) {
          showTie();
          modal.addEventListener('click', init);
          overlay.addEventListener('click', init);
        } else if (isWinner(board, activePlayer) === false) switchPlayer();
        else if (isWinner(board, activePlayer) === true) {
          modal.addEventListener('click', init);
          switchPlayer();
        }
      }
      close.addEventListener('click', closeModal);
    });
