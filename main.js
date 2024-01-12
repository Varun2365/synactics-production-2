function makeActive(element){
    localStorage.setItem("active",element);
}
function renderActive(){
    var actives = document.querySelectorAll(".active-card");
    for(i=0;i<actives.length;i++){
        if(actives[i].id == "Web Design"){
            continue;
        }
        else{

            actives[i].classList.remove("active-card")
        }
    }
    var active = localStorage.getItem("active");
    var item = document.getElementById(active)
    item.classList.add("active-card")
}
if(localStorage.getItem("active") != null){
    renderActive();
}
else{
    document.getElementById("Web Design").classList.add("active-card")
}