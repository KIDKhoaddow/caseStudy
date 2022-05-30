class PeopleItem{
    constructor(img,name,relation,index){
        this._img=img;
        this._name=name;
        this._relation=relation;
        this._index=index;
    }
    getImg(){
        return this._img;
    }
    getName(){
        return this._name;
    }
    getRelation(){
        return this._relation;
    }
    getIndex(){
        return this._index;
    }
    setImg(img){
        this._img=img;
    }
    setName(name){
        this._name=name;
    }
    setRelation(relation){
        this._relation=relation;
    }
    setIndex(index){
        this._index=index;
    }
    createPeopleItem(img,name,relation,index){
        let peopleItem="";
        peopleItem+='<!-- people item '+index+' start-->'
        +'<div class="people-item">'
        +'<div class="people-item-inner">'
        +'<img src="'+img+'"  id="image'+index+'" alt="groomsmen">'
        +'<h4 id="name'+index+'">'+name+'</h4>'
        +'<p id="relation-ship-1">'+relation+'</p>'
        +'<div class="social-links">'
        +'<a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a>'
        +'<a href="#" title="twitter"><i class="fab fa-twitter"></i></a>'
        +'<a href="#" title="instagram"><i class="fab fa-instagram"></i></a>'
        +'<a href="#" title="linkedin"><i class="fab fa-linkedin"></i></a>'      
        +'</div></div></div>';
        return peopleItem;
    }





}