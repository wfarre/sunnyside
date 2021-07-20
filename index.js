document.querySelector(".hamburger-btn").addEventListener("click", () => {
    document.querySelector(".hamburger-btn").classList.toggle("change");
    const navigator = document.querySelector(".navigator");
    if( navigator.className === "navigator"){
        navigator.className += " responsive";
    }else{
        navigator.className = "navigator";
    }
})