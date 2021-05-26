function teleporteurSpawn(){
	for (let i = 0; i < nbTeleporteur; i++){
		if(!((TeleporteurList[i][0] == 0 || TeleporteurList[i][0] == null) && (TeleporteurList[i][1] == 0 || TeleporteurList[i][1] == null)))
        {
			//Dessine les téléporteurs
            ctx.drawImage(teleporteur, TeleporteurList[i][0], TeleporteurList[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '17px sans-serif';
		    ctx.fillText(TeleporteurList[i][4], TeleporteurList[i][0] + 8, TeleporteurList[i][1] + 19);
			ctx.fillStyle = 'black';
		    ctx.font = '12px sans-serif';
            if(TeleporteurList[i][5] != 0){
                ctx.fillText('Vers : ' + TeleporteurList[i][5], TeleporteurList[i][0] - 5, TeleporteurList[i][1] - 5);
            }
			if(TeleporteurList[i][6] == 1){
				ctx.fillText('Pose a droite', TeleporteurList[i][0] - 5, TeleporteurList[i][1] - 15);
			} else if (TeleporteurList[i][6] == 2){
				ctx.fillText('Pose a gauche', TeleporteurList[i][0] - 5, TeleporteurList[i][1] - 15);
			}
		}
	}
}

function Teleporteur(){
	for (let i = 0; i < nbTeleporteur; i++){
		for (let j = 0; j < max; j++){
			if(!((TeleporteurList[i][0] == 0 || TeleporteurList[i][0] == null) && (TeleporteurList[i][1] == 0 || TeleporteurList[i][1] == null)))
			{
				let x = Positions[j][0];
				let y = Positions[j][1];
				let taille = 25;
				
				if (((x>TeleporteurList[i][0]+taille) && (x < TeleporteurList[i][0]+taille+2) && (y > TeleporteurList[i][1]-5) && (y < TeleporteurList[i][1]+taille+5)) || ((x > TeleporteurList[i][0]-taille-5) && (x < TeleporteurList[i][0]+5) && (y > TeleporteurList[i][1]-5) && (y < TeleporteurList[i][1]+taille+5))){

					//Ajoute un cube aux cubes en téléportation
					TeleporteurList[i][3]++;
					
					//Fait disparaitre le cube
					OldPositions[j] = Positions[j];
					ctx.clearRect(OldPositions[j][0]-4, OldPositions[j][1]-1, tailleCube+14, tailleCube+2)
					Positions[j] = ['',''];
					mouvement[j] = 1;
				}
			}
		}
	}
}

function TravailTeleporteur(j){
	for (let i = 0; i < max; i++){
	    //Dès qu'un emplacement est libre
	    if (Positions[i][0] == ''){
	    	for(let m = 0; m < nbTeleporteur; m++){
				if(TeleporteurList[j][5] == TeleporteurList[m][4]){
					if(TeleporteurList[m][6] == 1){
						Positions[i][0] = TeleporteurList[m][0]+30;
	        			Positions[i][1] = TeleporteurList[m][1];
					}else if(TeleporteurList[m][6] == 2){
						Positions[i][0] = TeleporteurList[m][0] - 30;
	        			Positions[i][1] = TeleporteurList[m][1];
					}
					mouvement[i] = 0;
				}	
			}
			break;
        }
    }
}

function VerifStockageTeleporteur(){
	for (let i = 0; i < nbTeleporteur; i++){
		if(!((TeleporteurList[i][0] == 0 || TeleporteurList[i][0] == null) && (TeleporteurList[i][1] == 0 || TeleporteurList[i][1] == null)))
		{
			ctx.drawImage(teleporteur, TeleporteurList[i][0], TeleporteurList[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '17px sans-serif';
		    ctx.fillText(TeleporteurList[i][4], TeleporteurList[i][0] + 8, TeleporteurList[i][1] + 19);
			if (TeleporteurList[i][3] >= 1){
				if (stopped != 1){
					TeleporteurList[i][3]--;
				   	setTimeout(function(){TravailTeleporteur(i)}, (CLOCK/VitesseAcceleration)*20*TeleporteurList[i][2]);
			}
		}
	}
}				
}