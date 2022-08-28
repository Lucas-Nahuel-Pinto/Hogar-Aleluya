let animado =document.querySelectorAll(".animado");

let animadoHorizontal =document.querySelectorAll(".animadoHorizontal");

function mostrarScroll()
{
    let scrollTop=document.documentElement.scrollTop;
    /****Para mostrar varios elementos*****/
    for(var i=0;i<animado.length;i++)
    { let alturaAnimado=animado[i].offsetTop;
/************Ajuste manual del scroll para que no deba llegar al tope superior para mostrarse */
        if(alturaAnimado-50<scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba")   
        }
    }

 /****Para mostrar varios elementos para Actividades*****/
 for(var i=0;i<animadoHorizontal.length;i++)
 { let alturaAnimado=animadoHorizontal[i].offsetTop;
/************Ajuste manual del scroll para que no deba llegar al tope superior para mostrarse */
     if(alturaAnimado-50<scrollTop){
        animadoHorizontal[i].style.opacity=1;

        animadoHorizontal[i].classList.add("mostrarIzquierda")   

     }
 }

}
window.addEventListener('scroll',mostrarScroll);