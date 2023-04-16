let slideIndexTestimonios = 1;


showSlides();

function showSlides() {

   plusslidesDonantes(1);

  setTimeout(showSlides, 30000); // Change image every 60000--60 seconds 
}

showSliderDonantes(slideIndexTestimonios);

function plusslidesDonantes(n) {

    showSliderDonantes(slideIndexTestimonios += n);
}

// function currentSlideTestimonios(n) {

//     showSliderDonantes(slideIndexTestimonios = n);
// }

function showSliderDonantes(n) {
    let i;
    // let slides = document.getElementsByClassName("mySlidesTestimonio");
    let slidesDonantesArticles = document.getElementsByClassName("slidesDonantes");
    //   let captionText = document.getElementById("caption");
    if (n > slidesDonantesArticles.length) {
        slideIndexTestimonios = 1
    }
    if (n < 1) {
        slideIndexTestimonios = slidesDonantesArticles.length
    }

    for (i = 0; i < slidesDonantesArticles.length; i++) {
        // slides[i].style.display = "none";
        slidesDonantesArticles[i].style.display = "none";
    }

     for (i = 0; i < slidesDonantesArticles.length; i++) {
            slidesDonantesArticles[i].className = slidesDonantesArticles[i].className.replace("donaciones-donantes-art1", "");
            slidesDonantesArticles[i].className = slidesDonantesArticles[i].className.replace("donaciones-donantes-art2", "");
            slidesDonantesArticles[i].className = slidesDonantesArticles[i].className.replace("donaciones-donantes-art3", "");
    }

    if (n > slidesDonantesArticles.length) {
         slideIndexTestimonios = 1
     } else {
         if (n < 1) {
             slideIndexTestimonios = slidesDonantesArticles.length
      }
     }

    if (slideIndexTestimonios == 1) {
         slidesDonantesArticles[slideIndexTestimonios - 1].className += " donaciones-donantes-art1";
         slidesDonantesArticles[slideIndexTestimonios].className += " donaciones-donantes-art2 ";
         slidesDonantesArticles[slideIndexTestimonios + 1].className += " donaciones-donantes-art3";


        slidesDonantesArticles[slideIndexTestimonios - 1].style.display = "grid";
        slidesDonantesArticles[slideIndexTestimonios].style.display = "grid";
        slidesDonantesArticles[slideIndexTestimonios + 1].style.display = "grid";
    } else {
        if (slideIndexTestimonios == slidesDonantesArticles.length) {
            slidesDonantesArticles[slideIndexTestimonios - 1].className += " donaciones-donantes-art1";
            slidesDonantesArticles[0].className += "donaciones-donantes-art2";
            slidesDonantesArticles[1].className += "donaciones-donantes-art3";
   

            slidesDonantesArticles[slideIndexTestimonios - 1].style.display = "grid";
            slidesDonantesArticles[0].style.display = "grid";
            slidesDonantesArticles[1].style.display = "grid";

        }
    }

    if (slideIndexTestimonios == slidesDonantesArticles.length - 1) {
          slidesDonantesArticles[slideIndexTestimonios - 1].className += " donaciones-donantes-art1";
          slidesDonantesArticles[slideIndexTestimonios].className += "  donaciones-donantes-art2";
          slidesDonantesArticles[0].className += "  donaciones-donantes-art3";

        slidesDonantesArticles[slideIndexTestimonios - 1].style.display = "grid";
        slidesDonantesArticles[slideIndexTestimonios].style.display = "grid";
        slidesDonantesArticles[0].style.display = "grid";
    }


    if (slideIndexTestimonios > 1 && slideIndexTestimonios < slidesDonantesArticles.length - 1) {
        slidesDonantesArticles[slideIndexTestimonios - 1].className += " donaciones-donantes-art1";
        slidesDonantesArticles[slideIndexTestimonios].className += " donaciones-donantes-art2";
        slidesDonantesArticles[slideIndexTestimonios + 1].className += " donaciones-donantes-art3";
        slidesDonantesArticles[slideIndexTestimonios-1].style.display = "grid";
        slidesDonantesArticles[slideIndexTestimonios].style.display = "grid";
        slidesDonantesArticles[slideIndexTestimonios +1].style.display = "grid";
    }



    //   slides[slideIndexTestimonios-1].style.display = "block";
    //   captionText.innerHTML = slidesDonantesArticles[slideIndexTestimonios-1].alt;
}
