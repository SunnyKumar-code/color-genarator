 let getBtn = document.querySelector(".generate-button");
 let colorBox = document.querySelector("#color-box");
 let allbox = document.querySelector(".all-box");


colorBox.addEventListener("click", function(){
    navigator.clipboard.writeText(colorBox.textContent)
    
    .then(() => {
        // alert('Color copied to clipboard');
        colorBox.style.transform = "scale(0.95)";
        setTimeout(() => {
            colorBox.innerHTML = colorBox.innerHTML + " "+" Copy Suscessfully",
            colorBox.style.transform = "scale(1)";
        },200)
    })
    .catch(err => {
        console.error('Error copying color to clipboard', err);
    });
 });
 getBtn.addEventListener("click", function() {
    colorBox.innerHTML = "Click Color box to Change My color.";
    for (let i = 0; i <30;i++) {
        let box = document.createElement("div");
        let newcolor = color();
        box.innerHTML = newcolor;
        box.style.backgroundColor = newcolor;
        box.classList.add("color-code");
        allbox.appendChild(box);


       

        box.addEventListener("click", function() {
            colorBox.style.backgroundColor = newcolor;
            colorBox.innerHTML = `${newcolor}`;
            colorBox.style.transform = "scale(0.9)";
            
            // Reset the scale after some time (e.g., 200ms)
            setTimeout(() => {
                colorBox.style.transform = "scale(1)";
            }, 200);
        });
        
    }
 });
 


 

 let color =  () => {
    let allColorComponant = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += allColorComponant[Math.floor(Math.random() * 16)];
    }
    return color;
 }