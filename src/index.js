import './style.css';
import $ from 'jquery';
import ht from './heart2.png';

function randomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

$(document).ready(($) => {
  document.querySelectorAll('.food-name img').forEach((element) => {
    console.log(element);
    element.src = ht;
  });

  const bArray = [];
  const sArray = [4, 6, 8, 10];
  for (let i = 0; i < $('.bubbles').width(); i++) {
    bArray.push(i);
  }

  setInterval(() => {
    const size = randomValue(sArray);
    $('.bubbles').append(`<div class="individual-bubble" style="left: ${randomValue(bArray)}px; width: ${size}px; height:${size}px;"></div>`);
    $('.individual-bubble').animate({
      bottom: '100%',
      opacity: '-=0.7',
    }, 3000, function () {
      $(this).remove();
    });
  }, 350);
});