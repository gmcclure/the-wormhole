(function($, w, d, undefined) {
  'use strict';
  
  var endpoint = 'http://www.freecodecamp.com/news/hot';
  
  $.getJSON(endpoint, function(data) {
    data.sort(function(a, b) {
      return new Date(a.timePosted) - new Date(b.timePosted); 
    }).reverse();
    
    data.forEach(function(el) {
      var postDate = new Date(el.timePosted);
      var dateString = postDate.toLocaleString('en-US');
      
      $('#container')
        .append(
        `<div class="storybox">
           <a href='${el.link}' target='_blank'>
           <div class='storyimage-frame'>
             <img src='${el.author.picture}' class='storyimage'/
           </div>
           <div class='title truncate'>${el.headline}</div>
           </a>
           <div class='byline'>
             <a href='http://www.freecodecamp.com/${el.author.username}' target='_blank'>by ${el.author.username}<a/>
           </div>
           <div class='social'>&#10084; ${el.upVotes.length}
           <button onclick="window.open('http://www.freecodecamp.com/news/${el.storyLink}')"  class='talk-button'>Discuss</button>
           </div
           <div class='post-date'>
             Posted ${dateString}
           </div>
         </div>`);
    });
  });
  
})($, window, document);
