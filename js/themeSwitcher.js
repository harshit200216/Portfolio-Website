//Theme Switch
const links=document.querySelectorAll(".alternate-style")
totalLinks=links.length;
function setActiveStyle(color){
  for(let i=0;i<totalLinks;i++){
    if(color===links[i].getAttribute("title")){
      links[i].removeAttribute("disabled")
    }
    else{
      links[i].setAttribute("disabled","true");
    }
  }
}


//Light / Dark Mode switch
const modeSwitch=document.querySelectorAll(".mode-switch")
totalmodeSwitch=modeSwitch.length;
for(let i=0; i<totalmodeSwitch; i++){
  modeSwitch[i].addEventListener("change",function(){
    if(this.value==="dark"){
      document.body.className="dark";
    }
    else{
      document.body.className="";
    }
  })

}

// Color Switch
const clrSwitch=document.querySelectorAll(".clr-switch")
totalclrSwitch=clrSwitch.length;
for(let i=0; i<totalclrSwitch; i++){
  clrSwitch[i].addEventListener("change",function(){
    setActiveStyle(this.value);
  })  
}

document.querySelector(".toggle-theme-switcher").addEventListener("click",()=>{
  document.querySelector(".theme-switch").classList.toggle("open");
})
