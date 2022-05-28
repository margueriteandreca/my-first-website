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