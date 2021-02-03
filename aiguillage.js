let tailleAiguillage = 50;

function aiguillageSpawn(){
	for (let i =0; i < nbAiguillage; i++){
		//Dessine les aiguillages
		ctx.fillStyle = 'brown';  
 		ctx.fillRect(AiguillageList[i][0], AiguillageList[i][1], tailleAiguillage, 3);
 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + tailleAiguillage, tailleAiguillage, 3);
 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage, tailleAiguillage, 3);
 		//Dessine les %
	    ctx.fillStyle = 'black';
	    ctx.font = '15px sans-serif';
	    ctx.fillText(AiguillageList[i][3] * 100 + '%', AiguillageList[i][0] + 2, AiguillageList[i][1] + 20);
	    ctx.fillText('0%', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 3 * tailleAiguillage/2);
	    ctx.fillText('0%', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage/2);
	}
}

function Aiguillage(){
	for (let i = 0; i < nbAiguillage; i++){
		for (let j = 0; j < max; j++){
			x = Positions[j][0];
			y = Positions[j][1];
			
			//Si le cube est
			if ((x+tailleCube >= AiguillageList[i][0]) && (x+tailleCube < AiguillageList[i][0]+tailleAiguillage) && (y+tailleCube > AiguillageList[i][1]-3) && (y+tailleCube < AiguillageList[i][1]-1)){
				//Deplace vers la droite
				OldPositions[j] = Positions[j];
				Positions[j] = [Positions[j][0] + AiguillageList[i][2], Positions[j][1]];
				
				//Mouvement effectué
				mouvement[j] = 1;
				
				if (Positions[j][0]+tailleCube >= AiguillageList[i][0]+tailleAiguillage){
					//Si le % du bas est plus petit que le % souhaité
					if ((AiguillageList[i][5] == 0) || (AiguillageList[i][4]/AiguillageList[i][5] < AiguillageList[i][3])){
						AiguillageList[i][4]++;
						AiguillageList[i][5]++;
						Positions[j][1]+= tailleAiguillage;
					}
					//Sinon on envoie le cube en haut
					else{
						AiguillageList[i][5]++;
						Positions[j][1]-= tailleAiguillage;
					}
					ctx.clearRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + tailleAiguillage + 3, 2 * tailleCube, tailleCube);
					ctx.clearRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage + 3, 2 * tailleCube, tailleCube);
					
					//Actualise le % de répartition
					ctx.fillStyle = 'black';
	    			ctx.font = '15px sans-serif';
					ctx.fillText(Math.round(AiguillageList[i][4] / AiguillageList[i][5] * 100) + '%', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 3 * tailleAiguillage/2);
		    		ctx.fillText(Math.round(100 - (AiguillageList[i][4] / AiguillageList[i][5] * 100)) + '%', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage/2);
				}
			}
			
			//Si le cube est
			if ((mouvement[j] == 0) && (x+tailleCube >= AiguillageList[i][0]) && (x < AiguillageList[i][0]+2*tailleAiguillage) && (((y+tailleCube > AiguillageList[i][1]+tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]+tailleAiguillage-1)) || ((y+tailleCube > AiguillageList[i][1]-tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]-tailleAiguillage-1)))){
				//Deplace vers la droite
				OldPositions[j] = Positions[j];
				Positions[j] = [Positions[j][0] + AiguillageList[i][2], Positions[j][1]];
				//Mouvement effectué
				mouvement[j] = 1;
			}
		}
	}
}