export const getCommentsHtml = (name, text, date) => {
    return `
         <div class="comment-name">${name}</div>
         <div class="comment-text">${text}</div>
         <time class="comment-date">${date}</time>
         <svg class="comment-bin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M19,6V3c0-1.104,0.896-2,2-2h8c1.104,0,2,0.896,2,2v3"/><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M40,6l-3.693,41.426C36.229,48.299,35.469,49,34.608,49H15.391c-0.86,0-1.621-0.701-1.699-1.574L10,6"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="8" y1="6" x2="42" y2="6"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="25" y1="11" x2="25" y2="44"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="31" y1="11" x2="31" y2="44"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="19" y1="11" x2="19" y2="44"/></svg>  
         <svg class="comment-like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19"  width="25px" height="25px"><path fill="white" d="M23.6 6.5c0 5-9.1 10.7-11.4 12-.3.2-.6.2-1 0C9 17.3 0 11.6 0 6.5 0 3 2.5 0 6.2 0c2.4 0 4.4 1.2 5.6 3a6.8 6.8 0 015.6-3c3.7 0 6.2 3 6.2 6.5z"/></svg>
           `
}