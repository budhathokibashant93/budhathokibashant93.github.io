const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const header=document.getElementById("header");

menuBtn.addEventListener("click",function(){

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
menuBtn.innerHTML="✕";
}else{
menuBtn.innerHTML="☰";
}

});


const links=document.querySelectorAll("#navLinks a");

links.forEach(function(link){

link.addEventListener("click",function(){

navLinks.classList.remove("active");
menuBtn.innerHTML="☰";

});

});


window.addEventListener("scroll",function(){

if(window.scrollY>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});


const contactForm=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");

contactForm.addEventListener("submit",function(event){

event.preventDefault();

formMessage.innerHTML="Thank you! Your message has been received.";

contactForm.reset();

});