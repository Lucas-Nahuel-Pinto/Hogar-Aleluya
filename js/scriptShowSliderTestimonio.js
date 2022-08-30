let slideIndexTestimonios = 1;
showSlidertestimonios(slideIndexTestimonios);

function plusSlidesTestimonios(n) {

    showSlidertestimonios(slideIndexTestimonios += n);
}

function currentSlideTestimonios(n) {

    showSlidertestimonios(slideIndexTestimonios = n);
}

function showSlidertestimonios(n) {
    let i;
    // let slides = document.getElementsByClassName("mySlidesTestimonio");
    let SlidesTestimoniosArticles = document.getElementsByClassName("slidesTestimonios");
    //   let captionText = document.getElementById("caption");
    if (n > SlidesTestimoniosArticles.length) {
        slideIndexTestimonios = 1
    }
    if (n < 1) {
        slideIndexTestimonios = SlidesTestimoniosArticles.length
    }

    for (i = 0; i < SlidesTestimoniosArticles.length; i++) {
        // slides[i].style.display = "none";
        SlidesTestimoniosArticles[i].style.display = "none";
    }

     for (i = 0; i < SlidesTestimoniosArticles.length; i++) {
            SlidesTestimoniosArticles[i].className = SlidesTestimoniosArticles[i].className.replace(" index-testimonios-art1", "");
            SlidesTestimoniosArticles[i].className = SlidesTestimoniosArticles[i].className.replace(" index-testimonios-art2", "");
            SlidesTestimoniosArticles[i].className = SlidesTestimoniosArticles[i].className.replace(" index-testimonios-art3", "");
    }

    if (n > SlidesTestimoniosArticles.length) {
         slideIndexTestimonios = 1
     } else {
         if (n < 1) {
             slideIndexTestimonios = SlidesTestimoniosArticles.length
      }
     }

    if (slideIndexTestimonios == 1) {
         SlidesTestimoniosArticles[slideIndexTestimonios - 1].className += " index-testimonios-art1";
         SlidesTestimoniosArticles[slideIndexTestimonios].className += " index-testimonios-art2";
         SlidesTestimoniosArticles[slideIndexTestimonios + 1].className += " index-testimonios-art3";


        SlidesTestimoniosArticles[slideIndexTestimonios - 1].style.display = "block";
        SlidesTestimoniosArticles[slideIndexTestimonios].style.display = "block";
        SlidesTestimoniosArticles[slideIndexTestimonios + 1].style.display = "block";
    } else {
        if (slideIndexTestimonios == SlidesTestimoniosArticles.length) {
            SlidesTestimoniosArticles[slideIndexTestimonios - 1].className += " index-testimonios-art1";
            SlidesTestimoniosArticles[0].className += " index-testimonios-art2";
            SlidesTestimoniosArticles[1].className += " index-testimonios-art3";
   

            SlidesTestimoniosArticles[slideIndexTestimonios - 1].style.display = "block";
            SlidesTestimoniosArticles[0].style.display = "block";
            SlidesTestimoniosArticles[1].style.display = "block";

        }
    }

    if (slideIndexTestimonios == SlidesTestimoniosArticles.length - 1) {
          SlidesTestimoniosArticles[slideIndexTestimonios - 1].className += " index-testimonios-art1";
          SlidesTestimoniosArticles[slideIndexTestimonios].className += "  index-testimonios-art2";
          SlidesTestimoniosArticles[0].className += "  index-testimonios-art3";

        SlidesTestimoniosArticles[slideIndexTestimonios - 1].style.display = "block";
        SlidesTestimoniosArticles[slideIndexTestimonios].style.display = "block";
        SlidesTestimoniosArticles[0].style.display = "block";
    }


    if (slideIndexTestimonios > 1 && slideIndexTestimonios < SlidesTestimoniosArticles.length - 1) {
        SlidesTestimoniosArticles[slideIndexTestimonios - 1].className += " index-testimonios-art1";
        SlidesTestimoniosArticles[slideIndexTestimonios].className += " index-testimonios-art2";
        SlidesTestimoniosArticles[slideIndexTestimonios + 1].className += " index-testimonios-art3";
        SlidesTestimoniosArticles[slideIndexTestimonios-1].style.display = "block";
        SlidesTestimoniosArticles[slideIndexTestimonios].style.display = "block";
        SlidesTestimoniosArticles[slideIndexTestimonios +1].style.display = "block";
    }



    //   slides[slideIndexTestimonios-1].style.display = "block";
    //   captionText.innerHTML = SlidesTestimoniosArticles[slideIndexTestimonios-1].alt;
}