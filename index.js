//DARK MODE-LIGHT MODE Event Listener - using if/else statement to switch between css pages and icons

const icon = document.getElementById("mode-icon");

icon.addEventListener('click', function() {
    const css = document.getElementById("css-file");
    const modeIcon = document.getElementById("mode-icon");

    if (modeIcon.className === "dark-mode") {
        css.setAttribute("href", "./light-mode.css");
        modeIcon.setAttribute("src", "./Theme-Icons/moon.svg");
        modeIcon.setAttribute("class", "light-mode");
    } else {
        css.setAttribute("href", "./dark-mode.css");
        modeIcon.setAttribute("src", "./Theme-Icons/sun.svg");
        modeIcon.setAttribute("class", "dark-mode");
    }
});

//DISPLAY IMAGE ON HOVER - Event Listeners for mouse over and mouse out

const hoverImageText = document.getElementById("hover-img");

hoverImageText.addEventListener("mouseover", function() {
    const imagePopUp = document.createElement("img");
    imagePopUp.src = "./brazil-trip.jpg"
    imagePopUp.alt = "Brazil Trip"
    imagePopUp.id = "expanded-image"

    const page2 = document.getElementById("page-2");
    
    page2.appendChild(imagePopUp);

});

hoverImageText.addEventListener("mouseout", function() {
    const imagePopUp = document.getElementById("expanded-image");

    if (imagePopUp) {
        setTimeout(function () {imagePopUp.remove(); 
        }, 500);
    }
})
