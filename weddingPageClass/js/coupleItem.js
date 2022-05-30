class CoupleItem{
    constructor(img,name,content){
        this._img=img;
        this._name=name;
        this._content=content;
    }
    getImg(){
        return this._img;
    }
    getName(){
        return this._name;
    }
    getContent(){
        return this._content;
    }
    setImg(img){
        this._img=img;
    }
    setName(name){
        this._name=name;
    }
    setContent(content){
        this._content=content;
    }
    createCoupleItem(img,name,content){
        let coupleItem="";
        coupleItem= '<div class="couple">'
        +'<img src="'+img+'" alt="happy couple" />'
        +'<h3>'+name+'</h3>'
        +'<p>'+content+'</p>'
        +'<div class="social-links">'
        +'<a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a>'
        +'<a href="#" title="twitter"><i class="fab fa-twitter"></i></a>'
        +'<a href="#" title="instagram"><i class="fab fa-instagram"></i></a>'
        +'<a href="#" title="linkedin"><i class="fab fa-linkedin"></i></a>'
        +'</div></div>';
        return coupleItem;
    }


}