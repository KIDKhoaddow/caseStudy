function headerFixed(){
    let scrollTop=window.scrollY;
    let header=document.getElementById("header")
    if(scrollTop>100)
    {
        header.style.position="sticky";
    }
    else if(scrollTop<100)
    header.style.position="absolute"
    setTimeout(headerFixed,1);
}
headerFixed();




$(window).on("load", function () {
    // console.log("hi")
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;


    function slideShow() {
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if (slideIndex == slideLen - 1) {
            slideIndex = 0;
        }
        else slideIndex++;

        setTimeout(slideShow, 5000)
    }
    slideShow();

})


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
function changeBridgemaid(){
    document.getElementById("groomsmen").className="filter-btn"
    document.getElementById("bridesmaid").className="filter-btn active"
    document.getElementById("image1").src="img/bridesmaid/1.jpg"
    document.getElementById("image2").src="img/bridesmaid/2.jpg"
    document.getElementById("image3").src="img/bridesmaid/3.jpg"
    document.getElementById("image4").src="img/bridesmaid/4.jpg"

}
function changeGroomsmen(){
    document.getElementById("groomsmen").className="filter-btn active"
    document.getElementById("bridesmaid").className="filter-btn"
    document.getElementById("image1").src="img/groomsmen/1.jpg"
    document.getElementById("image2").src="img/groomsmen/2.jpg"
    document.getElementById("image3").src="img/groomsmen/3.jpg"
    document.getElementById("image4").src="img/groomsmen/4.jpg"
}







