

var moonBtn = document.querySelector(".moon-icon");

 var sunBtn = document.querySelector(".sun-icon")
 sunBtn.style.display = "none"

 moonBtn.addEventListener("click", function(){
  // console.log("clicked");
    document.querySelector("body").classList.add("dark");
    document.querySelector(".title").style.color = "#fff";
    moonBtn.style.display = "none";
    sunBtn.style.display = "flex";
    // document.querySelector(".list").style.bacgroundColor = ""
    elements = document.getElementsByClassName("list");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#1e2139";
    }
    document.querySelector("form").style.background = "#141624";
    document.querySelector(".section-status").style.background = "#1e2139";
    document.querySelector(".section-status").style.color = "#fff";
    document.querySelector(".sender-section").style.background = "#1e2139";
    document.querySelector(".sender-section").style.color = "#fff";
    document.querySelector(".no-invc").style.color ="#fff"

  })

  sunBtn.addEventListener("click", function(){
    
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".title").style.color = "#000";
    elements = document.getElementsByClassName("list");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#fff";
    }
    moonBtn.style.display = "flex"
    sunBtn.style.display = "none";
    
    document.querySelector("form").classList.remove("dark");
    document.querySelector("form").style.background = "#fff";
    document.querySelector(".section-status").style.background = "#fff";
    document.querySelector(".section-status").style.color = "#1e2139";
    document.querySelector(".sender-section").style.background = "#fff";
    document.querySelector(".sender-section").style.color = "#1e2139";
    document.querySelector(".no-invc").style.color ="#000"
  

})