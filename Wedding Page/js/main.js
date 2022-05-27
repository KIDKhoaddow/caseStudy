// const {data}=require("jquery");

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
// $(document).ready(function () {
//     peopleFilter($(".filter-btn.active").attr("data-target"))
//     $(".filter-btn").click(function(){
//         if(!$(this).hasClass("active")){
//             peopleFilter($(this).attr("data-target"))
//         }
       
        
//     })
//     function peopleFilter(target) {
//         console.log(target)
//         $(".filter-btn").removeClass("active");
//         $(".filter-btn[data-target='"+target+"']").addClass("active");
//         $(".peopel-item").hide();
//         $(".peo-item[data-catagory='"+"'])").fadeIn();
//     }
// })








