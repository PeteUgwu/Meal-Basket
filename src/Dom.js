import ht2 from './heart2.png';
import ht from './heart.png';
import countFoods from './countFoods.js';

const container = document.querySelector('.grid-container');

const innerData = (idCategory, strCategory, strCategoryThumb, strCategoryDescription) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="grid-item">
        <div class="food">
            <div>
               <span style="display: none">${idCategory}</span>
                <img src="${strCategoryThumb}" height="200" alt="">
            </div>
            <div class="food-name">
                <span>${strCategory}</span>
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
  container.appendChild(div);
};

const fillDom = (categories) => {
  container.innerHTML = '';
  categories.forEach((element) => {
    innerData(
      element.idCategory,
      element.strCategory,
      element.strCategoryThumb,
      element.strCategoryDescription,
    );
  });
  countFoods(categories.length);
};

export { fillDom, innerData };