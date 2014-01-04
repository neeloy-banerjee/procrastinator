// Procrastinator news Chrome Extension

// Author: Neeloy Banerjee

function return_news_array(bookmarks) {
  var news_array = [];
  for( var i = 0; i < bookmarks.length; i++) {
    news_array.push(bookmarks[i].url);
  }
  return news_array;
}

function find_news_folder(bookmarks) {

  for (var i =0; i < bookmarks.length; i++) {
      var bookmark = bookmarks[i];

      if (bookmark.title == "News" || bookmark.title == "news")
      {
        var news_array = return_news_array(bookmark.children);   
        var randWebsite = news_array[Math.floor(Math.random() * news_array.length)];  

        // Open a new tab with the random website pulled from your
        // News folder in your bookmarks.
        chrome.tabs.create({
         url:randWebsite
        });
      }

      if (bookmark.children) {
          find_news_folder(bookmark.children);
      }
  }
}


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree( find_news_folder );   
});
