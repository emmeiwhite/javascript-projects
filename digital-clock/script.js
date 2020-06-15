const clock = document.querySelector('.clock');

const tickTock = () => {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  /* --- htmlTemplate --- */
  let html = `<div>
    <span class="time">${hours}</span> <span class="colon">: </span>
    <span class="time">${minutes}</span> <span  class="colon">:</span>
    <span class="time">${seconds}</span> 
  </div>`;

  clock.innerHTML = html;

}
setInterval(tickTock, 1000);