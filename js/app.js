


function act(){

    tela = window.innerWidth;
    console.log("function active");


    if(tela >= 735){
        // document.querySelector("body > main > section > ul:nth-child(3)").classList.toggle("hidden");
        document.querySelector("#menu").classList.toggle("hidden");
        document.querySelector("body > main > section > ul:nth-child(3) > li:nth-child(3) > img").classList.toggle("corA");

    }else{
        document.querySelector("body > main > section > ul:nth-child(3)").classList.toggle("hidden");
        document.querySelector("#menu").classList.toggle("hidden");
    }

    
}




