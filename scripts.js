console.log("HII");
let date= new Date();
let year = date.getFullYear();
console.log(year);


const mainTitle = document.getElementsByTagName("h1")[0];
const mainTitleStartValue = mainTitle.innerText;
	
mainTitle.addEventListener("click", function(){
	if(mainTitle.innerText === mainTitleStartValue) {
		mainTitle.innerText = year;
	} else {
		mainTitle.innerText = mainTitleStartValue;
	}
});

