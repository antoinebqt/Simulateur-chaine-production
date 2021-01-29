function Convoyeur(x,y,longueur,ctx,vitesse,Positions,OldPosition, mouvement,taillecube){
	for (let i = 0; i < max; i++){
 		//Si pas deplacé, et cubeX entre x+longueur et x et cubeY entre y-3 et y-1
 		if((mouvement[i] == 0) && (Positions[i][0] <= x+longueur) && (Positions[i][0]+taillecube >= x) && (Positions[i][0] != '') && (Positions[i][1]+taillecube > y-3) && (Positions[i][1]+taillecube < y-1)){
			//Deplace vers la droite
			OldPositions[i] = Positions[i];
			Positions[i] = [Positions[i][0] + vitesse, Positions[i][1]];
			//Mouvement effectué
			mouvement[i] = 1;
		}
	}
}

function FirstConvoyeur(x,y,longueur,ctx){
	//Dessine les convoyeurs
  	ctx.fillStyle = 'blue';  
 	ctx.fillRect(x, y, longueur, 3);
}