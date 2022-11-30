import ht2 from '../heart2.png';
import ht from '../heart.png';
import countFoods from './countFoods.js';
import { addlikes, getlikes } from './likes.js';

const container = document.querySelector('.grid-container');

const loadPopUp = (element) => {
  alert('load pop up');
};

const like = (element) => {
  addlikes(element);
};

const innerData = (element) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="grid-item">
        <div class="food">
            <div>
               <span style="display: none" id="idCategory">${element.idCategory}</span>
                <img src="${element.strCategoryThumb}" height="200" alt="">
            </div>
            <div class="food-name">
                <span>${element.strCategory}</span>
                <span class="like"><img src="${ht2}" alt="" width="15" height="15" srcset=""></span>
            </div>
            <div class="likes">
                <span class="likes-count">0<span> likes</span></span>
            </div>
            <div>
                <input type="button" value="comments">
            </div>
        </div>
    </div>`;
  div.querySelector('input[type="button"]').addEventListener('click', () => {
    loadPopUp(element);
  });
  div.querySelector('.like').addEventListener('click', (e) => {
    like(e.target.parentNode.parentNode.parentNode.querySelector('#idCategory').innerText);
  });
  container.appendChild(div);
};

const fillDom = (categories) => {
  container.innerHTML = '';
  categories.forEach((element) => {
    innerData(element);
  });
  countFoods(categories.length);
  getlikes();
};

export { fillDom, innerData };