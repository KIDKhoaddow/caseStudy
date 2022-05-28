var nav = document.getElementById("nav");
var a = nav.getElementsByClassName("nav-a");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


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

$.scrollIt({activeClass: "active",topOffset: 200 });




    // window.on("load", function(){
    //     let slideIndex = document.getElementsByClassName("div.slide.active").index();
    //     const slideLen = document.getElementsByClassName("div.slide").length;

    //     let  homeSection =document.getElementById("homeSection")
    //     let slide=homeSection.getElementsByClassName("slide")
    //     function slideShow(){
    //         let current=document.getElementsByClassName("active");
    //         current[0].className=current[0].className.replace("active","")
    //         if(slideIndex==slideLen-1){
    //             slideIndex=0
    //         }
    //         else slideIndex++

    //         setTimeout(slideShow,5000)
    //     }
    //     slideShow()
    // })




