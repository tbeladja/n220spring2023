document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('click', (event) => {
        const color = event.target.dataset.color;
        event.target.classList.add(color);
      });
    });
  });
  