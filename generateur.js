function Generateur(x,y,vitesse,ctx){
	
	ctx.beginPath();
	ctx.arc(x, y, 15,0, Math.PI * 2, false);
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "red";
	ctx.stroke();
	console.log("oui");
}
