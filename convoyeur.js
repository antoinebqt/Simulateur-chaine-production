function Convoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
 	for (let i = 0; i < max; i++){
 		if((mouvement[i]==0) && (Positions[i][0]<=(x+longueur-1)) && ((Positions[i][0]+taillecube)>=x)&&(Positions[i][0]!='') && ((Positions[i][1]+taillecube)>(y-3))&&((Positions[i][1]+taillecube)<(y-1)) && (Positions[i][1]!='')){
			var a = Positions[i][0];
			var b = Positions[i][1];
			Positions[i] = [a + 1,b];
			mouvement[i]=1;
		}
	}
}

function FirstConvoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
}