# My Personal Website

Access website: [margueriteandreca.github.io/my-first-website](margueriteandreca.github.io/my-first-website)


My first website is divided into three sections - the introduction, the "About Me" and a last section containing both "My Goals" and "Contact". To navigate towards different sections, I implemeted links to smooth scroll to their resepective anchor id.

This website contains two images that are affected by hovering - one using CSS, and the other using JavaScript.
### CSS TO EXPAND THE SIZE OF PERSONAL PHOTO IN "ABOUT ME" ON HOVER:

```
<img src="./Marguerite-profile.JPG" alt="Marguerite" id="marguerite-pic">

#marguerite-pic {
    height: 150px;
    width: 150px;
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 20px;
    border-radius: 100px;
    transition: all .2s ease;
}
#marguerite-pic:hover {
    transform: scale(1.2);
}
```
### JAVASCRIPT EVENT LISTENER - USING MOUSEOVER AND MOUSEOUT TO DISPLAY IMAGE UPON HOVERING OVER LINK IN "ABOUT ME"

```
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
```


In order to create a light mode/dark mode functionality, I created a floating button using two icons, and then used JavaScript to make this button change between two css files - one light mode, and one dark mode. 

### FLOATING BUTTON (HTML/CSS):

```
<div id="floating-button">
        <div class="dark-mode">
            <img src="./Theme-Icons/sun.svg" alt="Light Mode" title="Light Mode" class="dark-mode" id="mode-icon">
        </div>
    </div>
```
```
#floating-button {
    display: flex;
    position:fixed;
    bottom:50px;
    right:50px;
    height: 50px;
    width: 50px;
    background-color: whitesmoke;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
}

#mode-icon {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: white;
    opacity: 0.40;
    filter: drop-shadow(0 0 0.75rem whitesmoke)

}
```

### JAVASCRIPT TO SWITCH BETWEEN CSS FILES & ICONS:

```
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
```