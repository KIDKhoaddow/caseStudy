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