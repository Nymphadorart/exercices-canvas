const drapeau = document.getElementById("myCanvas");
const ct = drapeau.getContext("2d");

ct.beginPath();
ct.fillStyle = "black";
ct.fillRect(200,100,40,100)
ct.fillStyle = "yellow"
ct.fillRect(240,100,40,100)
ct.fillStyle = "red"
ct.fillRect(280,100,40,100)
ct.fillStyle = "brown"
ct.fillRect(200,200,20,190)
ct.closePath()
