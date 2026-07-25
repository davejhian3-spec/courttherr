// =========================
// SCROLL REVEAL ANIMATION
// =========================

const elements = document.querySelectorAll(
    ".glass-card, .card, .timeline-card"
);


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.15
});


elements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "1s ease";


    observer.observe(element);

});




// =========================
// YES BUTTON FINAL EXPERIENCE
// =========================


const yesBtn =
document.getElementById("yesBtn");


if(yesBtn){


    yesBtn.addEventListener("click",()=>{


        document.body.innerHTML = `


        <div class="garden-page">


            <div class="flowers">


                <div class="flower flower1"></div>

                <div class="flower flower2"></div>

                <div class="flower flower3"></div>

                <div class="flower flower4"></div>


            </div>




            <div class="final-message">


                <h1>
                Thank You For Giving Me A Chance
                </h1>



                <p>
                From this moment,
                I want to slowly build something
                meaningful with you.
                </p>



                <p>
                I'll continue showing my intentions
                through patience,
                respect,
                and consistency.
                </p>




                <h2>
                I'm grateful that I can pursue you, langga.
                </h2>



            </div>



        </div>



        `;



        createFlowers();


        // REALISTIC PETALS START HERE
        createPetals();



    });


}




// =========================
// CREATE FLOWERS
// =========================


function createFlowers(){


    const garden =
    document.querySelector(".garden-page");


    if(!garden) return;



    for(let i = 0; i < 20; i++){


        let flower =
        document.createElement("div");


        flower.className =
        "floating-flower";


        flower.style.left =
        Math.random()*100 + "%";


        flower.style.animationDelay =
        Math.random()*5 + "s";



        garden.appendChild(flower);


    }


}





// =========================
// MUSIC CONTROL
// =========================


const music =
document.getElementById("music");


const musicBtn =
document.getElementById("musicBtn");



if(musicBtn && music){


    musicBtn.addEventListener("click",()=>{


        if(music.paused){


            music.play();


            musicBtn.innerHTML =
            "Pause Our Song";


        }

        else{


            music.pause();


            musicBtn.innerHTML =
            "Play Our Song";


        }


    });


}





// =========================
// CINEMATIC LETTER OPENING
// =========================


const openLetter =
document.getElementById("openLetter");


const loadingScreen =
document.querySelector(".loading-screen");


const envelope =
document.querySelector(".envelope");



if(openLetter && loadingScreen && envelope){


    openLetter.addEventListener("click",()=>{


        envelope.classList.add("open");


        openLetter.innerHTML =
        "Opening...";


        setTimeout(()=>{


            loadingScreen.classList.add("hide");


        },2500);


    });


}

// =========================
// REALISTIC FALLING PETALS
// =========================


function createPetals(){


    const petals = [

        "assets/petal1.png",
        "assets/petal2.png",
        "assets/petal3.png"

    ];



    for(let i = 0; i < 100; i++){



        const petal =
        document.createElement("img");



        petal.src =
        petals[Math.floor(Math.random() * petals.length)];



        petal.className =
        "realistic-petal";



        petal.style.left =
        Math.random() * 100 + "vw";



        petal.style.width =
        (Math.random() * 20 + 15) + "px";



        petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";



        petal.style.animationDelay =
        Math.random() * 3 + "s";



        petal.style.opacity =
        Math.random() * .6 + .4;



        petal.style.transform =
        `rotate(${Math.random()*360}deg)`;



        document.body.appendChild(petal);




        setTimeout(()=>{


            petal.remove();


        },10000);



    }


}