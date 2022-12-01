export const getComments = async (id) => {
  const res = await fetch(`${process.env.BaseURL}comments?item_id=${id}`);
  const data = await res.json();

  if (!res.ok) {
    return null;
  }
  return data;
};

const createCommentHtml = () => {
  const commentSpan = document.createElement('span');
  commentSpan.innerText = `
      05/11/2022 Carl: I'd love to eat it again  
    `;
  return commentSpan;
};

export const generateComment = async (id) => {
  const commentParagraph = document.createElement('p');
  commentParagraph.innerHTML = '';

  const comments = await getComments(id);
  if (comments == null) {
    const emptyCommentSpan = document.createElement('span');
    emptyCommentSpan.className = 'no-comment';
    emptyCommentSpan.textContent = 'be the first to comment';
    commentParagraph.append(emptyCommentSpan);
  } else {
    comments.forEach((comment) => {
      commentParagraph.append(createCommentHtml(comment));
    });
  }

  return commentParagraph;
};