const bar = document.getElementById("bar");
const close = document.getElementById("close");
const div = document.getElementById("subMenu");

if(bar){
    bar.addEventListener("click", () => {
        div.classList.add("active");
    })
}

if(close){
    close.addEventListener("click", () => {
        div.classList.remove("active");
    })
}
