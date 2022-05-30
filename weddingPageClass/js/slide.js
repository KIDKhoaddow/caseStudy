class Slide {
    constructor(content, name, time, image, index) {
        this._content = content;
        this._name = name;
        this._time = time;
        this._image = image;
        this._index = index;
    }
    getContent() {
        return this._content;
    }
    getName() {
        return this._name;
    }
    getTime() {
        return this._time;
    }
    getImage() {
        return this._image;
    }
    getScrollIndex() {
        return this.index;
    }
    setContent(content) {
        this._content = content
    }
    setName(name) {
        this._name = name;
    }
    setTime(time) {
        this._time = time;
    }
    setImage(image) {
        this._image = image;
    }
    setIndex(inndex) {
        this._index = index;
    }

    creatSlide(content, name, time, image, index) {
        let slide = "";
            slide += '<!--slide start-->'
                + '<div class="slide active" id="slide' + index + '" style=background-image:url(' + image + ');>'
                + '<div class="container">'
                + '<div class="row align-items-center">'
                + '<div class="home-content">'
                + '<p>' + content + '</p>'
                + '<h1>' + name + '</h1>'
                + '<span>' + time + '</span>'
                + '</div></div></div></div>'
                + '<!--slide stop-->'
        return slide;
    }
   
    createActiveSlide(index) {
        document.getElementById("slide" + index).className += " active";
    }
}
