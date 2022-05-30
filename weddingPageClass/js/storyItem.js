class StoryItem {
    constructor(header, time, paragraph, image, index) {
        this._header = header;
        this._time = time;
        this._paragraph = paragraph;
        this._image = image;
        this._index = index;
    }

    getHeader() {
        return this._header;
    }
    getTime() {
        return this._time;
    }
    getParagraph() {
        return this._paragraph;
    }
    getImage() {
        return this._image;
    }
    getIndex() {
        return this._index;
    }

    setHeader(header) {
        this._header = header;
    }
    setTime(time) {
        this._time = time;
    }
    setParagraph(paragraph) {
        this._paragraph = paragraph;
    }
    setImage(image) {
        this._image = image;
    }
    setIndex(index) {
        this._index = index;
    }

    createStoryItem(header, time, paragraph, image, alt, index) {
        let storyItem = ""
        storyItem += '<!--story item ' + index + ' start-->'
            + '<div class="story-item">'
            + '<i class="fas fa-heart"></i>'
            + '<div class="story-text">'
            + '<h3>' + header + '</h3>'
            + '<span class="date">' + time + '</span>'
            + '<p>' + paragraph + '</p></div>'
            + '<div class="story-img">'
            + '<img src="' + image + '" alt="' + alt + '">'
            + '</div></div>';
        + '<!--story item ' + index + ' end-->'
        return storyItem;
    }


}

