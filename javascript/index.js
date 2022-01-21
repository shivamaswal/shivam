document.querySelector(".no-legend").addEventListener("click",function(){
    document.querySelector("img").setAttribute("src","./images/btnhp.jpg");
    // document.querySelector("body").style.backgroundColor="#fff";
    for(var i=0;i<document.querySelectorAll("button").length;i++){
        document.querySelectorAll("button")[i].style.visibility="hidden";
    }
    document.querySelector("img").classList.add("img-lg");
});