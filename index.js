// bookmarks holds all elements with bookmark class; flavorImage grabs element with background image on it
const bookmarks = document.getElementsByClassName("bookmark");
const flavorImage = document.getElementById("landing-bottom");

// Take in specific bookmark and change background image correspondingly
const imageSwitch = bookmark => {
    let image;
    switch (bookmark) {
        case 'web-dev-bookmark':
            image = 'code.png';
            break;
        case 'game-dev-bookmark':
            image = 'godot.png';
            break;
        case 'art-bookmark':
            image = 'aseprite.jpg';
            break;
        case 'music-bookmark':
            image = 'guitar.jpg';
            break;
        case 'contact-bookmark':
            image = 'contact.jpg';
            break;
        case 'about-me-bookmark':
            image = 'columbia.jpg';
            break;
    }

    flavorImage.style.backgroundImage = `url("img/${image}")`;
}

// Check every element with a bookmark class
[].forEach.call(bookmarks, mark => {
    // While hovering over the element, pull bookmark to the right and display text. Also switches background image for corresponding bookmark
    mark.addEventListener("mouseover", function() {
        this.style.animation = 'extend 1s ease';
        this.style.animationFillMode = 'forwards';
        this.style.textAlign = 'right';

        // Background image switch
        imageSwitch(this.id);
    });

    // Once mouse leaves bookmark, reset to initial state
    mark.addEventListener("mouseout", function() {
        this.style.animation = 'retract 1s ease';
        this.style.textAlign = 'left';
    });
});