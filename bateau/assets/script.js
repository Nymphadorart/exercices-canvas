const bateau = document.getElementById("bateau")
const ctx = bateau.getContext("2d")


ctx.beginPath();
ctx.fillStyle = "brown"
ctx.fillRect(300,400,20,100)
ctx.fill();
ctx.arc(315, 500, 235, 0, Math.PI)
ctx.fillStyle = "grey"
ctx.fill()
ctx.moveTo(300,400);
ctx.lineTo(550, 400);
ctx.lineTo(300,100);
ctx.lineTo(300,400)
ctx.fillStroke = "grey"
ctx.stroke();

ctx.closePath();




