/*Adaptive for mobile devices*/

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
	for (var i = 0; i < document.getElementsByClassName("mh1").length; i++)
		document.getElementsByClassName("mh1")[i].classList.add("mh1-mobile");
	for (var i = 0; i < document.getElementsByClassName("mp").length; i++)
		document.getElementsByClassName("mp")[i].classList.add("mp-mobile");
	for (var i = 0; i < document.getElementsByClassName("wrapper2").length; i++)
		document.getElementsByClassName("wrapper2")[i].classList.add("wrapper2-mobile");
	for (var i = 0; i < document.getElementsByClassName("block").length; i++)
		document.getElementsByClassName("block")[i].classList.add("block-mobile");
}

/*GOTO Menu*/

var menu = document.getElementById("menu");
menu.onclick = () => {
	if (!menu.classList.contains("menu-clicked")){
		document.getElementById("menu-wrap").style.display = "block";
		menu.classList.add("menu-clicked");
		for (var i = 0; i < document.getElementById("menu-wrap").children.length; i++) {
		 	document.getElementById("menu-wrap").children[i].style.animation="menu ease 2s";
		}
		document.getElementsByTagName("html")[0].style.overflow = "hidden";
	} else {
		document.getElementById("menu-wrap").style.display = "none";
		menu.classList.remove("menu-clicked");
		document.getElementsByTagName("html")[0].style.overflow = "auto";
	}
}

for (var i = 0; i < document.getElementById("menu-wrap").children.length; i++) {
 	document.getElementById("menu-wrap").children[i].onclick = () => {
		document.getElementById("menu-wrap").style.display = "none";
		menu.classList.remove("menu-clicked");
		document.getElementsByTagName("html")[0].style.overflow = "auto";
	}
 }