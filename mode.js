// const inputEl=document.querySelector(".input");
// const bodyEl=document.querySelector("body");
// inputEl.checked=JSON.parse(localStorage.getItem("mode"));
// updatebody();
// function updatebody(){
//     if(inputEl.checked){
//         bodyEl.style.background="black";
//     } else{
//         bodyEl.style.background="white";
//     }
// }
// inputEl.addEventListener("input",()=>{
//     updatebody();
//     updatelocalStorage();
// });
// function updatelocalStorage(){
//     localStorage.setItem("mode",JSON.stringify(inputEl.checked));
// }


const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// Read mode from localStorage, fallback to false if null
const savedMode = JSON.parse(localStorage.getItem("mode"));
inputEl.checked = savedMode !== null ? savedMode : false;

// Initial UI update
updateBody();

// Update UI and localStorage on input change
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "white";
    } else {
        bodyEl.style.background = "gray";
    }
}

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}