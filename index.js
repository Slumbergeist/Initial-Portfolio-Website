const bookmarks = document.getElementsByClassName("bookmark");

[].forEach.call(bookmarks, mark => {
    mark.addEventListener("mouseover", function() {
        this.style.left += '100px';
        this.style.textAlign = 'right';
    });
    mark.addEventListener("mouseout", function() {
        this.style.left = '';
        this.style.textAlign = 'left';
    });
});