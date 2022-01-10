

var formbackBtn = document.querySelector(".back-btn");
var newButton = document.querySelector(".add-button");
var form = document.querySelector(".form-main");
var banner = document.getElementById("banner");

newButton.addEventListener("click", function(){
    form.classList.remove("display-none")
    document.querySelector("#banner").style.color ="#000";
  
})


formbackBtn.addEventListener("click", function(){
    form.classList.add("display-none");
})



