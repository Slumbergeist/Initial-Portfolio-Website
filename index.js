// bookmarks holds all elements with bookmark class; flavorImage grabs element with background image on it
const bookmarks = document.getElementsByClassName("bookmark");
const flavorImage = document.getElementById("landing-bottom");
const contentPages = document.getElementsByClassName("content-page");

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
        case 'landing-bookmark':
            image = 'columbia.jpg';
            break;
    }

    flavorImage.style.backgroundImage = `url("img/${image}")`;
}

// Checks for currently visible content page and returns that page
const getCurrentContentPage = () => {
    let currentPage;
    [].forEach.call(contentPages, page => {
        if (window.getComputedStyle(page).display !== 'none') {
            currentPage = page;
        }
    })
    return currentPage;
}

// Takes in the bookmark's id and grabs corresponding content page to display
const bookmarkToContent = id => {
    let newId = id.replace('bookmark', 'page');
    return document.getElementById(newId);
}

// Check every element with a bookmark class
[].forEach.call(bookmarks, mark => {
    // While hovering over the element, pull bookmark to the right, displays text, and switches out content page on left side of screen. Also switches background image for corresponding bookmark
    mark.addEventListener("mouseover", function() {
        this.style.animation = 'extend 1s ease';
        this.style.animationFillMode = 'forwards';
        this.style.textAlign = 'right';

        // Get currently displayed content page and newly selected content page
        let activePage = getCurrentContentPage();
        const upcomingPage = bookmarkToContent(this.id);

        // If an activePage exists and isn't the same as the upcoming page, set display to none;
        if (activePage && activePage.id !== upcomingPage.id) {
            activePage.style.display = 'none';
        }

        // Bring in new selected page content
        upcomingPage.style.animationDelay = '1s';
        upcomingPage.style.animation = 'pop-in 1s ease';
        upcomingPage.style.animationFillMode = 'forwards';
        upcomingPage.style.display = 'flex';

        // Background image switch
        imageSwitch(this.id);
    });

    // Once mouse leaves bookmark, reset to initial state
    mark.addEventListener("mouseout", function() {
        this.style.animation = 'retract 1s ease';
        this.style.textAlign = 'left';
    });
});