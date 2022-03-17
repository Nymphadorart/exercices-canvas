const maison = document.getElementById("maison")
const ctx = maison.getContext("2d")



ctx.beginPath();
ctx.fillStyle = "pink"
ctx.fillRect(200,300,300,400)
ctx.fillStyle = "grey"
ctx.fillRect(250,375,40,45)
ctx.fillStyle = "grey"
ctx.fillRect(410,375,40,45)
ctx.fillStyle = "grey"
ctx.fillRect(250,495,40,45)
ctx.fillStyle = "grey"
ctx.fillRect(410,495,40,45)
ctx.fillStyle = "brown"
ctx.fillRect(330,520,40,80)
ctx.fill()
ctx.moveTo(340,200)//pointe du toit
ctx.lineTo(500,300)//coin droit
ctx.lineTo(200,300)//coin gauche
ctx.fillStyle = "blue"
ctx.fill()
ctx.closePath()

ctx.beginPath
ctx.arc(340,560,5,0,Math.PI*2)
ctx.fillStyle = "yellow"
ctx.fill()
ctx.closePath();
