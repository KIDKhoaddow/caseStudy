function headerFixed() {
    let scrollTop = window.scrollY;
    let header = document.getElementById("header")
    if (scrollTop > 1) {
        header.style.position = "sticky";
    }
    else if (scrollTop < 100)
        header.style.position = "absolute"
    setTimeout(headerFixed, 1);
}
headerFixed();