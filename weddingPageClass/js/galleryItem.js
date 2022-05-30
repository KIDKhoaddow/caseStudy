class GalleryItem{
    constructor(img,index) {
        this._img=img;
        this._index=index;
    }
    getImg(){
        return this._img;
    }
    getIndex(){
        return this._index;
    }
    setImg(img){
        this._img=img;
    }
    setIndex(index){
        this._index=index;
    }
    createGallery(img,index){
        let gallery="";
        gallery='<!-- gallery item start -->'
        +'<div class="gallery-item">'
        +'<div class="gallery-item-inner">'
        +'<img src="'+img+'" data-large="'+img+'" onclick="showPicture('+index+')"alt="couple gallery">'
        +'</div></div>'
        +'<!--gallery item stop-->';
        return gallery
    }
}