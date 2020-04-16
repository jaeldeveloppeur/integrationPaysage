const listeBouton = document.getElementById("listeBouton");
const sectionImg = document.getElementById("info");
const sectionHeader = document.getElementById("header");

function animationBouton(){
    listeBouton.className = "vide";
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            listeBouton.className = "transition";
        })
    })
};

function creationImage(){
//    suppression image
    let supprImg = document.getElementById("info").getElementsByTagName("img");
    while(supprImg.length>0){
        supprImg[0].parentNode.removeChild(supprImg[0]);
    }
//    creation de l'image
    const imageDetails = document.createElement("img");
    imageDetails.setAttribute("src","image/Details" + i + ".png");
    sectionImg.appendChild(imageDetails);
};

function animationImage1(){
    sectionImg.className = "imgSansTransition";
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            sectionImg.className = "imgTransition1";
        })
    })
};

function animationImage2(){
    sectionImg.className = "imgSansTransition";
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            sectionImg.className = "imgTransition2";
        })
    })
};

function creationTitre(){
    //    suppression titre
    let supprTitre = document.getElementById("header").getElementsByTagName("h1");
    while(supprTitre.length>0){
        supprTitre[0].parentNode.removeChild(supprTitre[0]);
    }
//    creation du titre
    const titreH1 = document.createElement("h1");
    switch(i){
        case 1:
            titreH1.innerHTML = "MT CHARLESTON <br>PEAK,USA";
            break;
        case 2:
            titreH1.innerHTML = "ARCHES NATIONAL <br>PARK,USA";
            break;
        case 3:
            titreH1.innerHTML = "JOSHUA TREE <br>USA";
            break;
        case 4:
            titreH1.innerHTML = "APPALACHIAN <br>TRAIL,GEORGIA";
            break;
            
    }
    document.getElementById("header").appendChild(titreH1);
}

function animationTitre1(){
    sectionHeader.className = "titreSansTransition";
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            sectionHeader.className = "titreTransition1";
        })
    })
};

function animationTitre2(){
    sectionHeader.className = "titreSansTransition";
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            sectionHeader.className = "titreTransition2";
        })
    })
};

function changementBackground(){
        document.body.style.backgroundImage = "url(imageAssombri/" + i +".png)";
};

function lancement(){
    animationBouton();
    animationImage1();
    animationTitre1();
    setTimeout(creationTitre,1000);
    setTimeout(creationImage,1000);
    setTimeout(changementBackground, 1000);
    setTimeout(animationImage2, 1000);
    setTimeout(animationTitre2, 1000);
};


function btn1(){
    i=1;
    lancement();
};

function btn2(){
    i=2;
    lancement();
};


function btn3(){
    i=3;
    lancement();
}

function btn4(){
    i=4;
    lancement();
}
