let arrow = document.querySelectorAll('.arrow');
let sideBarBoolean = false;
let showMenuBoolean= false; 


for(var i =0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e)=>{
        // console.log(e);
      let   arrowParent = e.target.parentElement.parentElement;
        // console.log(arrowParent);
     showMenuBoolean =  arrowParent.classList.toggle("showMenu");
    showMenuToggle(sideBarBoolean, showMenuBoolean)
       });
     
}



let sideBar = document.querySelector(".sidebar");
let sideBarBtn = document.querySelector(".bx-menu");


sideBarBtn.addEventListener("click",()=>{
  sideBarBoolean =  sideBar.classList.toggle("close");
//   console.log(showMenuBoolean)
  showMenuToggle(sideBarBoolean, showMenuBoolean);
 
});



function showMenuToggle(sideBarBoolean_, showMenuBoolean_){
    // console.log(sideBarBoolean_, showMenuBoolean_)
    globalThis.showMenuBoolean = false;
    if(sideBarBoolean_ === true && showMenuBoolean_ === true){
        for(var i =0; i < arrow.length; i++){
            arrow[i].parentElement.parentElement.classList.remove("showMenu");
            showMenuBoolean = false;
        }
    }
}
showMenuToggle();


