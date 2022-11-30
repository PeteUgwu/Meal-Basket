import $, { data, status } from 'jquery';
import { fillDom } from './Dom.js';

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const loadmeals = async () => {
  await $.get(
    url,
    (data, status) => {
      if (status === 'success') {
        fillDom(data.categories);
      }
    },
  );
};
export default loadmeals;