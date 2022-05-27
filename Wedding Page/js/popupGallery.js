let index=0

function showPicture(x)
{
            document.getElementById("imgPopup").src="img/gallery/large/"+x+".jpg"
    
    document.getElementById("show-popup").style.visibility="visible";
    index=x

}
function closePicture(){
    document.getElementById("show-popup").style.visibility="hidden"
}

function prev(x){
    if(x<=6&&x>=2){
        x--;
        showPicture(x);
    }
    if(x==1){
        index=6;
        showPicture(6);
    }
}
function next(x){
    if(x<6&&x>0){
        x++;
        showPicture(x);
    }
    if(x==6){
        index=1;
        showPicture(1);
    }
}
