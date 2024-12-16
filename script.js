var Icon = document.querySelector(".Icon");
Icon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-Theme")
    if (document.body.classList.contains("dark-Theme")) {
        Icon.src = "Assets/sun.png"
    }
    else{
        Icon.src = "Assets/moon.png"
    }
})