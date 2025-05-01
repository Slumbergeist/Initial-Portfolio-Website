const bookmarks = document.getElementsByClassName("bookmark");
const flavorImage = document.getElementById("landing-bottom");

[].forEach.call(bookmarks, mark => {
    mark.addEventListener("mouseover", function() {
        this.style.animation = 'extend 1s ease';
        this.style.animationFillMode = 'forwards';
        this.style.textAlign = 'right';

        let image;
        switch (this.id) {
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
    });
    mark.addEventListener("mouseout", function() {
        this.style.animation = 'retract 1s ease';
        this.style.textAlign = 'left';
    });
});