function generateRandomPosts()
{
  $.getJSON("/search.json", function(data) {
    console.log("[sorted random posts]");

    var postsCount = data.length;
    var posts = data;

    var randomIndexUsed = [];
    var counter = 0;
    var numberOfPosts = 5;

    var divRandomPosts = $("#random_posts");

    while (counter < numberOfPosts)
    {
      var randomIndex = Math.floor(Math.random() * postsCount);

      if (randomIndexUsed.indexOf(randomIndex) == "-1")
      {
        var postHREF = posts[randomIndex].href;
        var postTitle = posts[randomIndex].title;

        var tmpString = "";
        var postImage = "";

      //  divRandomPosts.append('<p><a href="' + postHREF + '">' + postTitle + '</a></p><hr />');
        tmpString = '<li><div class="post-listing-text" ';
        if (posts[randomIndex].featureImage)
        {
          tmpString += 'style="width:70%"';
        }
        tmpString += '>';
        tmpString += '<span class="post-meta">' + posts[randomIndex].date + '</span>';
        tmpString += '<h2><a class="post-link" href="' + postHREF + '">' + postTitle + '</a></h2></div>';
        if (posts[randomIndex].featureImage)
        {
          postImage += '/assets/img' + posts[randomIndex].href + '/' + posts[randomIndex].featureImage;
          postImage = postImage.replace('.html','');
          postImage = postImage.replace(/./g, (c, i) => i == 16? '-': c);
          postImage = postImage.replace(/./g, (c, i) => i == 19? '-': c);
          postImage = postImage.replace(/./g, (c, i) => i == 22? '-': c);
          tmpString += '<div class="post-listing-image" style="background-image: url(' + postImage + ')"><a class="post-listing-overlay" href="' + posts[randomIndex].href + '"></a></div>';
        }
        console.log(postImage);
        tmpString += '</li>';
        divRandomPosts.append(tmpString);
        randomIndexUsed.push(randomIndex);

        counter++;
      }
    }
  });
}

$(document).ready(function() {
  generateRandomPosts();
});
