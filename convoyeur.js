function Convoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
 	for (let i = 0; i < max; i++){
 					if (mouvement[i]==0)
 					{
 						mouvement[i]=1;
				 		if ((Positions[i][0]<=(x+longueur)) && ((Positions[i][0]+taillecube)>=x)&&(Positions[i][0] != '')){
					 		var x = Positions[i][0];
					 		var y = Positions[i][1];
					 		Positions[i] = [x + 1,y];
				 		}
			 		}
			 	}

}

function FirstConvoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);

}