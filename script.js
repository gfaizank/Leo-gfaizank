function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function handlePostButtonClick() {
    const postButton = document.getElementById("postButton");
    const nameInput = document.querySelector("#contact input[type='text']");
    const emailInput = document.querySelector("#contact input[type='email']");

    
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    
       
        postButton.innerHTML = "Thanks";
        postButton.style.backgroundColor = "#ff69b4"; 
   
}

let form = document.querySelector("form");
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            document.querySelector("#postButton").value = "Submiting..";
            
            let data = new FormData(form);
            
            fetch('https://script.google.com/macros/s/AKfycbxrmMzVXXsoDZMCRsfSFQMTWW86db1_jfvlucNHHIBsnRytFDA6zNQkIJwD1ZducOQcBw/exec', {
                    method: "POST",
                    body: data,
                    mode: 'no-cors'
                })
                
                .then(res => res.text())
                
                .then(data => {
                   
                    document.querySelector("#postButton").value = "Submit"
                    
                });
        })