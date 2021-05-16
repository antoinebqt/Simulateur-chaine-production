let tailleAiguillage = 50;

function aiguillageSpawn(){
	for (let i = 0; i < nbAiguillage; i++){
		if(!((AiguillageList[i][0]==0 ||AiguillageList[i][0]==null) && (AiguillageList[i][1]==0||AiguillageList[i][1]==null)))
        {
			cycle = AiguillageList[i][5];
			//Dessine les aiguillages
			//Dessine le haut des aiguillages
			ctx.fillStyle = 'brown';  
			ctx.strokeStyle = 'brown';
	 		ctx.fillRect(AiguillageList[i][0], AiguillageList[i][1], tailleAiguillage, 3);
	 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage, tailleAiguillage, 3);

	 		//Dessine le bas des aiguillages
	 		ctx.fillRect(AiguillageList[i][0], AiguillageList[i][1] + 5, tailleAiguillage, 3);
	 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 5  + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 5  - tailleAiguillage, tailleAiguillage, 3);
	 		ctx.lineWidth = 2;
	 		
	 		//Dessine les arrondis de la première partie de l'aiguillage
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + 1, AiguillageList[i][1] + 4, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + tailleAiguillage - 1,  AiguillageList[i][1] + 4, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();  

	 		//Dessine les arrondis de l'aiguillage haut
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + 1 + tailleAiguillage, AiguillageList[i][1] + 4 + tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + tailleAiguillage * 2 - 1,  AiguillageList[i][1] + 4 + tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke(); 

	 		//Dessine les arrondis de l'aiguillage bas
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + 1 + tailleAiguillage, AiguillageList[i][1] + 4 - tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(AiguillageList[i][0] + tailleAiguillage * 2 - 1,  AiguillageList[i][1] + 4 - tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();
	 		
	 		//Dessine les infos
		    ctx.fillStyle = 'black';
		    ctx.font = '15px sans-serif';
		    ctx.fillText(cycle, AiguillageList[i][0] + 2, AiguillageList[i][1] + 20);
		    ctx.fillText('0', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 3 * tailleAiguillage/2);
		    ctx.fillText('1', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage/2);
		}
	}
}
/*
function AiguillageProba(){
	for (let i = 0; i < nbAiguillage; i++){
		for (let j = 0; j < max; j++){
			x = Positions[j][0];
			y = Positions[j][1];
			 
			if ((x+tailleCube >= AiguillageList[i][0]) && (x+tailleCube < AiguillageList[i][0]+tailleAiguillage) && (y+tailleCube > AiguillageList[i][1]-3) && (y+tailleCube < AiguillageList[i][1]-1)){
				//Deplace vers la droite de la premiere partie
				OldPositions[j] = Positions[j];
				Positions[j] = [Positions[j][0] + (tailleAiguillage+2*tailleCube)*CLOCK/ AiguillageList[i][2]/1000, Positions[j][1]];
				
				//Mouvement effectué
				mouvement[j] = 1;
				
				if (Positions[j][0]+tailleCube >= AiguillageList[i][0]+tailleAiguillage){
					//Si le % du bas est plus petit que le % souhaité
					if (AiguillageList[i][5] == 0 || AiguillageList[i][4]/AiguillageList[i][5] < AiguillageList[i][3]){
						AiguillageList[i][4]++;
						AiguillageList[i][5]++;
						Positions[j][1]+= tailleAiguillage;
						//Sinon on envoie le cube en haut
					}else
					{
						AiguillageList[i][5]++;
						Positions[j][1]-= tailleAiguillage;
					}

					//Actualise le % de répartition
					ctx.clearRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + tailleAiguillage + 10, 2 * tailleCube, tailleCube);
					ctx.clearRect(AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage + 10, 2 * tailleCube, tailleCube);
					ctx.fillStyle = 'black';
	    			ctx.font = '15px sans-serif';
					ctx.fillText('0', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] + 3 * tailleAiguillage/2);
		    		ctx.fillText('1', AiguillageList[i][0] + tailleAiguillage, AiguillageList[i][1] - tailleAiguillage/2);
				}
			}
			
			if ((mouvement[j] == 0) && (x+tailleCube >= AiguillageList[i][0]) && (x < AiguillageList[i][0]+2*tailleAiguillage) && (((y+tailleCube > AiguillageList[i][1]+tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]+tailleAiguillage-1)) || ((y+tailleCube > AiguillageList[i][1]-tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]-tailleAiguillage-1)))){
				//Deplace vers la droite sur les deux convoyeurs sortants
				OldPositions[j] = Positions[j];
				Positions[j] = [Positions[j][0] + (tailleAiguillage+2*tailleCube)*CLOCK/AiguillageList[i][2]/1000, Positions[j][1]];
				//Mouvement effectué
				mouvement[j] = 1;
			}
		}
	}
}
*/
function AiguillageCycle(){
	for (let i = 0; i < nbAiguillage; i++){
		if(!((AiguillageList[i][0]==0 ||AiguillageList[i][0]==null) && (AiguillageList[i][1]==0||AiguillageList[i][1]==null)))
	    {
			z = AiguillageList[i][6];
			cycle = AiguillageList[i][5];

			for (let j = 0; j < max; j++){
				x = Positions[j][0];
				y = Positions[j][1];
				
				if ((x+tailleCube >= AiguillageList[i][0]) && (x+tailleCube < AiguillageList[i][0]+tailleAiguillage) && (y+tailleCube > AiguillageList[i][1]-3) && (y+tailleCube < AiguillageList[i][1]-1)){
					//Deplace vers la droite de la premiere partie
					OldPositions[j] = Positions[j];
					Positions[j] = [Positions[j][0] + (tailleAiguillage+2*tailleCube)*CLOCK/AiguillageList[i][2]/1000, Positions[j][1]];
					
					//Mouvement effectué
					mouvement[j] = 1;
					
					if (Positions[j][0]+tailleCube >= AiguillageList[i][0]+tailleAiguillage){
						//Si on est rendu à un 0 => on envoie en bas
						if (cycle.charAt(z)=='0'){
							AiguillageList[i][3]++;
							AiguillageList[i][4]++;
							Positions[j][1]+= tailleAiguillage;
							AiguillageList[i][6] = ((AiguillageList[i][6]+1)%AiguillageList[i][5].length);
						}else //Sinon on envoie en haut
						{
							AiguillageList[i][4]++;
							Positions[j][1]-= tailleAiguillage;
							AiguillageList[i][6] = ((AiguillageList[i][6]+1)%AiguillageList[i][5].length);
						}
					}
				}
				
				if ((mouvement[j] == 0) && (x+tailleCube >= AiguillageList[i][0]) && (x < AiguillageList[i][0]+2*tailleAiguillage) && (((y+tailleCube > AiguillageList[i][1]+tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]+tailleAiguillage-1)) || ((y+tailleCube > AiguillageList[i][1]-tailleAiguillage-3) && (y+tailleCube < AiguillageList[i][1]-tailleAiguillage-1)))){
					//Deplace vers la droite sur les deux convoyeurs sortants
					OldPositions[j] = Positions[j];
					Positions[j] = [Positions[j][0] + (tailleAiguillage+2*tailleCube)*CLOCK/AiguillageList[i][2]/1000, Positions[j][1]];
					//Mouvement effectué
					mouvement[j] = 1;
				}
			}
		}
	}
}

