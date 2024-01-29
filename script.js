let moveMosquito = document.getElementById('moveMosquito');
let totalHit = 0;
let time;
let timeLimit = 60; 

// Add event listener to the "Start Game" button
document.querySelector('.btn a').addEventListener('click', startGame);

function startGame() {
  // Clear previous interval if any
  clearInterval(time);

  // Start the game loop
  time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    moveMosquito.style.left = i + 'px';
    moveMosquito.style.top = j + 'px';

    // Increase difficulty by reducing the interval time
    // For example, decrease the interval time every 5 hits
    if (totalHit % 5 === 0 && totalHit !== 0) {
      clearInterval(time);
      time = setInterval(() => {
        let i = Math.floor(Math.random() * 500) + 1;
        let j = Math.floor(Math.random() * 500) + 1;
        moveMosquito.style.left = i + 'px';
        moveMosquito.style.top = j + 'px';
      }, 2000 - totalHit * 50);
    }

    // Decrease the time limit every second
    timeLimit--;

    if (timeLimit <= 0) {
      clearInterval(time);
      alert('Game Over! Time is up.');
    }
  }, 1000); // decrease the interval time to 1000ms (1 second)
}

function hitMosquito() {
  // Increment hit count and update the display
  totalHit++;
  document.querySelector('.totalHit').innerText = totalHit;

  // Introduce a special mosquito with a 10x multiplier every 7 hits
  if (totalHit % 7 === 0) {
    totalHit += 3;
    alert('Bonus! You hit a special mosquito!');
  }

  // Stop the game after a certain number of hits or other conditions
  if (totalHit >= 20) {
    clearInterval(time); // Stop the game loop
    alert('Game Over! You hit the mosquito 20 times.');
    alert('Restart the game to play again.');
  }
}
