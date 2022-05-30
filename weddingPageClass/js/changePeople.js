function changeBridgemaid() {
    //change button active
    document.getElementById("groomsmen").className = "filter-btn";
    document.getElementById("bridesmaid").className = "filter-btn active";
    //change image  
    document.getElementById("image1").src = 'img/bridesmaid/1.jpg';
    document.getElementById("image2").src = 'img/bridesmaid/2.jpg';
    document.getElementById("image3").src = 'img/bridesmaid/3.jpg';
    document.getElementById("image4").src = 'img/bridesmaid/4.jpg';
    //change name
    document.getElementById("name1").innerText='Hanah';
    document.getElementById("name2").innerText='Hanah';
    document.getElementById("name3").innerText='Hanah';
    document.getElementById("name4").innerText='Hanah';


}
function changeGroomsmen() {
    //change active button
    document.getElementById("groomsmen").className = "filter-btn active";
    document.getElementById("bridesmaid").className = "filter-btn";
    //change image
    document.getElementById("image1").src = 'img/groomsmen/1.jpg';
    document.getElementById("image2").src = 'img/groomsmen/2.jpg';
    document.getElementById("image3").src = 'img/groomsmen/3.jpg';
    document.getElementById("image4").src = 'img/groomsmen/4.jpg';
    //change name
    document.getElementById("name1").innerText='Monu Singk'
    document.getElementById("name2").innerText='Monu Singk'
    document.getElementById("name3").innerText='Monu Singk'
    document.getElementById("name4").innerText='Monu Singk'

}