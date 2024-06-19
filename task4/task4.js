function handleSubmit(event) {
       event.preventDefault(); 
       alert("Thank you for your message!");
event.target.reset(); 
     }
document.addEventListener("DOMContentLoaded", function() {
       const form = document.querySelector("form");
       form.addEventListener("submit", handleSubmit);
    });
    