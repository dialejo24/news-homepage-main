let iconMenu = document.querySelector(".icon-menu > img");
let mobileWindow = document.querySelector(".mobile-window");
let navBar = document.querySelector(".nav-bar");
let iconClose = document.querySelector(".close-icon > img");
let transparentSection = document.querySelector(".transparent-section");

iconMenu.addEventListener("click", displayMobileWindow);
iconClose.addEventListener("click", hideMobileWindow);
transparentSection.addEventListener("click", hideMobileWindow) //hide the window if user clicks (touches) the transparent section
window.addEventListener("resize", () => {
    //hides the window if it's activated and user resizes the screen such that the screen's size is >= 800
    if (document.body.clientWidth >= 800 && mobileWindow.classList.contains("showWindow")) {
        hideMobileWindow();
    } 
});

function displayMobileWindow() {
    mobileWindow.classList.remove("hideWindow");
    mobileWindow.classList.add("showWindow");

    //display navbar
    navBar.classList.add("showNavBar");
    transparentSection.style.visibility = "visible";
    
    
    //set html overflow to hidden
    document.body.parentElement.style.overflowY = "hidden";
}

function hideMobileWindow() {
    mobileWindow.classList.remove("showWindow");
    mobileWindow.classList.add("hideWindow");

    //hide navbar
    navBar.classList.remove("showNavBar");

    //hide transparent section
    transparentSection.style.visibility = "hidden";

    //set html overflow to initial value
    document.body.parentElement.style.overflowY = "initial";
}
