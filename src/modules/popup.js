export const fetchMealData = async (id) => {
  const mealDbApi = 'www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(`${mealDbApi}${id}`);
  const data = await response.json();
  return data.meals;
};

const addCloseEvent = () => {
  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const popupSection = document.querySelector('.pop-up');
    popupSection.style.display = 'none';
  });
};

const createPopHtml = (mealDetails) => {
  const popupDetails = document.createElement('div');
  popupDetails.className = 'popup-details';
  popupDetails.innerHTML = `
    <a class="closebtn" href="">&times;</a>
            <div class="meal">
               <img src="../images/meal.png" alt="meal">
            </div>
            <h2>Meal 3</h2>
            <div class="flex">
                <h4>Name: peppered salad</h4>
                <h4>Size: double portion</h4>
            </div>
            <div class="flex">
                <h4>Weight: 100</h4>
                <h4>Price: $10</h4>
            </div>
            <h3>Comments (2)</h3>
            <p>05/11/2022 Carl: I'd love to eat it again</p> 
            <p>05/11/2022 Pius: I'd love it</p> 
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
  popupSection.style.display = 'block';
  addCloseEvent();
};

export const addPopEvent = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((button) => button.addEventListener('click', () => {
    showPopup(button.id);
  }));
};
