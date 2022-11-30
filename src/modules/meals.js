import $, { data, status } from 'jquery';
import { fillDom } from './Dom.js';

const loadmeals = async () => {
  await $.get(
    `${process.env.URL}categories.php`,
    (data, status) => {
      if (status === 'success') {
        fillDom(data.categories);
      }
    },
  );
};
export default loadmeals;