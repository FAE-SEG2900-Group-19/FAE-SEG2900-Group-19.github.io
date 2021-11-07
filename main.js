let intro = document.querySelector('.intro');
let animateLogo = document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll(".animateLogo");

window.addEventListener("DOMContentLoaded",()=>{

    setTimeout(()=>{

        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*50)
            })

        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh'
        },2300)
    })
}) 
