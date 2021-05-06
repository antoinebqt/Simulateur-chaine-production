function decoupeurSpawn(){
	for (let i = 0; i < nbDecoupeur; i++){
		if(!((DecoupeurList[i][0]==0 ||DecoupeurList[i][0]==null) && (DecoupeurList[i][1]==0||DecoupeurList[i][1]==null)))
        {
			//Dessine les decoupeurs et leurs infos
	    	ctx.drawImage(decoupeur, DecoupeurList[i][0], DecoupeurList[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '14px sans-serif';
		    ctx.fillText('Taille : ' + DecoupeurList[i][2], DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 20);
		    ctx.fillText('Vitesse : ' + DecoupeurList[i][6] + 's', DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 35);
		    ctx.fillText('Decoupés : ' + DecoupeurList[i][5], DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 50);
		}
	}
}

function Decoupeur(){
	for (let i = 0; i < nbDecoupeur; i++){
		for (let j = 0; j < max; j++){
			if(!((DecoupeurList[i][0]==0 ||DecoupeurList[i][0]==null) && (DecoupeurList[i][1]==0||DecoupeurList[i][1]==null)))
        	{
				let x = Positions[j][0];
				let y = Positions[j][1];
				let taille = 100;
				var diff = Positions[j][0] - OldPositions[j][0];

				//Si
				if (((x >= DecoupeurList[i][0]-TailleGenerateur/2-5) && (x < DecoupeurList[i][0]+TailleGenerateur/2) && (y > DecoupeurList[i][1]) && (y < DecoupeurList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < DecoupeurList[i][0]+9*TailleGenerateur/4) && (x > DecoupeurList[i][0]+7*TailleGenerateur/4) && (y > DecoupeurList[i][1]) && (y < DecoupeurList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
					if (x>=DecoupeurList[i][0]-TailleGenerateur/2-5 && x<DecoupeurList[i][0]+TailleGenerateur/2 && y>DecoupeurList[i][1] && y<DecoupeurList[i][1]+taille && mouvement[j]==0 && diff>=0){
						DecoupeurList[i][4] = 1
					}

					DecoupeurList[i][3]++;

			    	//Fait disparaitre le cube
					OldPositions[j] = Positions[j];
					Positions[j] = ['',''];
					mouvement[j] = 1;
				}
			}
		}
	}
}

function TravailDecoupeur(j){
    for (let i = 0; i < max; i++){
        //Dès qu'un emplacement est libre
        if (Positions[i][0] == ''){
            if (DecoupeurList[j][4] == 1){ //Arrive de la gauche
                Positions[i][0] = DecoupeurList[j][0] + 2 * TailleGenerateur + 5;
                Positions[i][1] = DecoupeurList[j][1] + TailleGenerateur/2;
            }
            else { //Arrive de la droite
                Positions[i][0] = DecoupeurList[j][0] - TailleGenerateur/2 - 10;
                Positions[i][1] = DecoupeurList[j][1] + TailleGenerateur/2;
            }
            mouvement[i] = 0;
            break;
        }
    }
}

function VerifStockageDecoupeur(){
	for (let i =0; i < nbDecoupeur; i++){
		if(!((DecoupeurList[i][0]==0 ||DecoupeurList[i][0]==null) && (DecoupeurList[i][1]==0||DecoupeurList[i][1]==null)))
        {
			//Dessine les decoupeurs et leurs infos
			ctx.drawImage(decoupeur, DecoupeurList[i][0], DecoupeurList[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '14px sans-serif';
		    ctx.fillText('Taille : ' + DecoupeurList[i][2], DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 20);
		   	ctx.fillText('Vitesse : ' + DecoupeurList[i][6] + 's', DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 35);
		   	ctx.fillText('Decoupés : ' + DecoupeurList[i][5], DecoupeurList[i][0] + 5, DecoupeurList[i][1] + 50);

			if (DecoupeurList[i][3] >= 1){
				if (stopped != 1){
					DecoupeurList[i][3]--;
	                DecoupeurList[i][5]++;
	                for (let n = 0; n < DecoupeurList[i][2]; n++){
	                    setTimeout(() => {
	                        setTimeout(function(){TravailDecoupeur(i)}, 1000*(n+1));
	                    },(CLOCK/VitesseAcceleration)*20*DecoupeurList[i][6]);
	                }
				}
			}
		}
	}				
} 

