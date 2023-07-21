const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i =0

// ecoute du click sur la fleche de gauche 
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	i--
	console.log(i)
	caroussel()
})


//ecoute du click sur la fleche de droite 
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	i++
	console.log(i)
	caroussel()
	

})




function caroussel (image,tagLine){

let carousselImage = document.querySelector(".banner-img")
carousselImage.setAttribute("src","./assets/images/slideshow/"+slides[i].image)


let carousselText = document.querySelector("#banner p")
carousselText.innerHTML=slides[i].tagLine

}



	


 





