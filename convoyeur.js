function Convoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
 	for (let i = 0; i < max; i++){
 		//si pas deplacé, et cubeX entre x+longueur et x et cubeY entre y-3 et y-1
 		if(mouvement[i]==0 && (Positions[i][0]<=x+longueur-1) && (Positions[i][0]+taillecube>=x) && (Positions[i][0]!='') && (Positions[i][1]+taillecube>y-3)&&(Positions[i][1]+taillecube<y-1)){
			//deplace vers la droite
			Positions[i] = [Positions[i][0] + 1,Positions[i][1]];
			//mouvement effectué
			mouvement[i]=1;
		}
	}
}

function FirstConvoyeur(x,y,longueur,vitesse,ctx,Positions,mouvement,taillecube)
{
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur,3);
}