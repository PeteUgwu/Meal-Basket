import { generateComment } from './comment.js';

export const fetchMealData = async (id) => {
  const mealDbApi = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(`${mealDbApi}`);
  const data = await response.json();
  return data.meals;
};

const addCloseEvent = () => {
  const closeBtn = document.getElementById('closebtn');
  closeBtn.addEventListener('click', () => {
    const popupSection = document.querySelector('.pop-up');
    popupSection.style.display = 'none';
  });
};

const createPopHtml = (mealDetails) => {
  const popupDetails = document.createElement('div');
  popupDetails.className = 'popup-details';
  popupDetails.innerHTML = `
    <span id="closebtn" class="closebtn">&times;</span>
            <div class="meal">
               <img src='${mealDetails.strMealThumb}' alt="meal">
            </div>
            <h2>${mealDetails.strMeal}</h2>
            <div class="flex">
                <h4>Name: peppered salad</h4>
                <h4>Size: double portion</h4>
            </div>
            <div class="flex">
                <h4>Area: ${mealDetails.strArea}</h4>
                <h4>Price: $10</h4>
            </div>
            <h3>Comments (2)</h3>
            <div class="comments-div">
              
            </div>
            <h3>Add a Comment</h3>
            <form method="post" class="flex" id="form">
                <input class="name-field" type="text" id="fname" name="fname" value="" placeholder="Your name" required>
                <textarea maxlength="500" cols="30" rows="10" class="text-area" placeholder="Your insights" required></textarea>
                <input class="comment-btn" type="submit" value="Comment">
              </form> 
    `;
  return popupDetails;
};

const showPopup = async (id) => {
  const popupSection = document.querySelector('.pop-up');
  popupSection.innerHTML = ' ';

  const mealDetails = await fetchMealData(id);
  popupSection.append(createPopHtml(mealDetails[0]));

  const commentDiv = document.querySelector('.comments-div');
  const commentParagraph = await generateComment(id);
  commentDiv.append(commentParagraph);

  popupSection.style.display = 'block';
  addCloseEvent();
};

export const addPopEvent = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => button.addEventListener('click', (ev) => {
    ev.preventDefault();
    showPopup(button.id);
  }));
};
