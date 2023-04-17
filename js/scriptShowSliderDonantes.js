let slideDonacionesDonantes = 1;


showSlides();

function showSlides() {

   plusslidesDonantes(1);

  setTimeout(showSlides, 30000); // Change image every 60000--60 seconds 
}

showSliderDonantes(slideDonacionesDonantes);

function plusslidesDonantes(n) {

    showSliderDonantes(slideDonacionesDonantes += n);
}

// function currentSlideTestimonios(n) {

//     showSliderDonantes(slideDonacionesDonantes = n);
// }

function showSliderDonantes(n) {
    let i;
    // let slides = document.getElementsByClassName("mySlidesTestimonio");
    let slidesDonantesArticles = document.getElementsByClassName("slidesDonantes");
    //   let captionText = document.getElementById("caption");
    if (n > slidesDonantesArticles.length) {
        slideDonacionesDonantes = 1
    }
    if (n < 1) {
        slideDonacionesDonantes = slidesDonantesArticles.length
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
         slideDonacionesDonantes = 1
     } else {
         if (n < 1) {
             slideDonacionesDonantes = slidesDonantesArticles.length
      }
     }

    if (slideDonacionesDonantes == 1) {
         slidesDonantesArticles[slideDonacionesDonantes - 1].className += " donaciones-donantes-art1";
         slidesDonantesArticles[slideDonacionesDonantes].className += " donaciones-donantes-art2 ";
         slidesDonantesArticles[slideDonacionesDonantes + 1].className += " donaciones-donantes-art3";


        slidesDonantesArticles[slideDonacionesDonantes - 1].style.display = "grid";
        slidesDonantesArticles[slideDonacionesDonantes].style.display = "grid";
        slidesDonantesArticles[slideDonacionesDonantes + 1].style.display = "grid";
    } else {
        if (slideDonacionesDonantes == slidesDonantesArticles.length) {
            slidesDonantesArticles[slideDonacionesDonantes - 1].className += " donaciones-donantes-art1";
            slidesDonantesArticles[0].className += "donaciones-donantes-art2";
            slidesDonantesArticles[1].className += "donaciones-donantes-art3";
   

            slidesDonantesArticles[slideDonacionesDonantes - 1].style.display = "grid";
            slidesDonantesArticles[0].style.display = "grid";
            slidesDonantesArticles[1].style.display = "grid";

        }
    }

    if (slideDonacionesDonantes == slidesDonantesArticles.length - 1) {
          slidesDonantesArticles[slideDonacionesDonantes - 1].className += " donaciones-donantes-art1";
          slidesDonantesArticles[slideDonacionesDonantes].className += "  donaciones-donantes-art2";
          slidesDonantesArticles[0].className += "  donaciones-donantes-art3";

        slidesDonantesArticles[slideDonacionesDonantes - 1].style.display = "grid";
        slidesDonantesArticles[slideDonacionesDonantes].style.display = "grid";
        slidesDonantesArticles[0].style.display = "grid";
    }


    if (slideDonacionesDonantes > 1 && slideDonacionesDonantes < slidesDonantesArticles.length - 1) {
        slidesDonantesArticles[slideDonacionesDonantes - 1].className += " donaciones-donantes-art1";
        slidesDonantesArticles[slideDonacionesDonantes].className += " donaciones-donantes-art2";
        slidesDonantesArticles[slideDonacionesDonantes + 1].className += " donaciones-donantes-art3";
        slidesDonantesArticles[slideDonacionesDonantes-1].style.display = "grid";
        slidesDonantesArticles[slideDonacionesDonantes].style.display = "grid";
        slidesDonantesArticles[slideDonacionesDonantes +1].style.display = "grid";
    }



    //   slides[slideDonacionesDonantes-1].style.display = "block";
    //   captionText.innerHTML = slidesDonantesArticles[slideDonacionesDonantes-1].alt;
}
