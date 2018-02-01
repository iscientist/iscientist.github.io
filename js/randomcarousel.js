function generateRandomCarousel()
{
  $.getJSON("/carousel.json", function(data) {
    console.log("[sorted random carousel images]");
    var imgCount = data.length;
    var img = data;

    var randomIndexUsed = [];
    var counter = 0;
    var numberOfPosts = 5;

    var divRandomCarousel = $("#random_carousel");

    while (counter < numberOfPosts)
    {
      var randomIndex = Math.floor(Math.random() * imgCount);

      if (randomIndexUsed.indexOf(randomIndex) == "-1")
      {
        var imgHREF = img[randomIndex].image;
        var imgCaption = img[randomIndex].caption;
        var imgPc = img[randomIndex].pc;
        var imgDate = img[randomIndex].date;

        var tmpString = "";

        tmpString = '<li><div class="flexslider-image-box">';
        tmpString += '<div class="flexslider-image-background rellax" ';
        tmpString += 'style="background-image: url(' + imgHREF + ');';
        tmpString += 'background-color:black; ';
        if (img[randomIndex].contain)
        {
          tmpString += 'background-size:contain; ';
        }
        else
        {
          tmpString += 'background-size:cover; ';
        }
        tmpString += '">';
        tmpString += '<div class="flexslider-image-overlay"></div></div>';
        tmpString += '<div class="flexslider-image-overlay"><div class="flex-caption">';
        tmpString += '<h2>' + imgCaption + '</h2>';
        tmpString += '<p>Photograph by: ' + imgPc + '&nbsp;|&nbsp;' + imgDate + '</p>';
        tmpString += '</div></div></div></li>';
        divRandomCarousel.append(tmpString);
        randomIndexUsed.push(randomIndex);

        counter++;
      }
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      // don't run on mobile
    }else
    {
      var rellax = new Rellax('.rellax', {
        speed: -2,
      });
    }
  });
}

$(document).ready(function() {
  generateRandomCarousel();
});
