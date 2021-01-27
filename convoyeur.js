function Convoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
 	for (let i = 0; i < max; i++){
 					if (mouvement[i]==0)
 					{
				 		if((Positions[i][0]<=(x+longueur-1)) && ((Positions[i][0]+taillecube)>=x)&&(Positions[i][0]!='') && ((Positions[i][1]+taillecube)==(y-2)) && (Positions[i][1]!='')){
					 		var x = Positions[i][0];
					 		var y = Positions[i][1];
					 		Positions[i] = [x + 1,y];
					 		mouvement[i]=1;
				 		}
			 		}
	}

}

function FirstConvoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
}
