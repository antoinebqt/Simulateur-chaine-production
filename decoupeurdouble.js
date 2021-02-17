function decoupeurDoubleSpawn(){
	for (let i = 0; i < nbDecoupeurDouble; i++){
		//Dessine les decoupeurDoubles et leurs infos
    	ctx.drawImage(decoupeurDouble, DecoupeurDoubleList[i][0], DecoupeurDoubleList[i][1]);
    	ctx.fillStyle = 'black';
	    ctx.font = '14px sans-serif';
	    ctx.fillText('Taille : ' + DecoupeurDoubleList[i][2], DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 20);
	    ctx.fillText('Vitesse : ' + DecoupeurDoubleList[i][6] + 's', DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 35);
	    ctx.fillText('Decoupés : ' + DecoupeurDoubleList[i][5], DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 50);
	}
}

function DecoupeurDouble(){
	for (let i = 0; i < nbDecoupeurDouble; i++){
		for (let j = 0; j < max; j++){
			let x = Positions[j][0];
			let y = Positions[j][1];
			let taille = 100;
			var diff = Positions[j][0] - OldPositions[j][0];

			//Si
			if (((x >= DecoupeurDoubleList[i][0]-TailleGenerateur/2-5) && (x < DecoupeurDoubleList[i][0]+TailleGenerateur/2) && (y > DecoupeurDoubleList[i][1]) && (y < DecoupeurDoubleList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < DecoupeurDoubleList[i][0]+9*TailleGenerateur/4) && (x > DecoupeurDoubleList[i][0]+7*TailleGenerateur/4) && (y > DecoupeurDoubleList[i][1]) && (y < DecoupeurDoubleList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
				if (x>=DecoupeurDoubleList[i][0]-TailleGenerateur/2-5 && x<DecoupeurDoubleList[i][0]+TailleGenerateur/2 && y>DecoupeurDoubleList[i][1] && y<DecoupeurDoubleList[i][1]+taille && mouvement[j]==0 && diff>=0){
					DecoupeurDoubleList[i][4] = 1
				}

				DecoupeurDoubleList[i][3]++;

		    	//Fait disparaitre le cube
				OldPositions[j] = Positions[j];
				Positions[j] = ['',''];
				mouvement[j] = 1;
			}
		}
	}
}

function TravailDecoupeurDouble(j){
	let alternateur = 0;
	for (let a = 0; a < 2; a++){
		for (let i = 0; i < max; i++){
			//Dès qu'un emplacement est libre
			if (Positions[i][0] == ''){
				if (DecoupeurDoubleList[j][4] == 1){ //Arrive de la gauche
					Positions[i][0] = DecoupeurDoubleList[j][0] + 105;
					if (alternateur == 0){
						Positions[i][1] = DecoupeurDoubleList[j][1];
						alternateur = 1
					} else {
						Positions[i][1] = DecoupeurDoubleList[j][1] + 50;
					}
				}
				else { //Arrive de la droite
					Positions[i][0] = DecoupeurDoubleList[j][0] - 35;
					if (alternateur == 0){
						Positions[i][1] = DecoupeurDoubleList[j][1];
						alternateur = 1
					} else {
						Positions[i][1] = DecoupeurDoubleList[j][1] + 50;
					}
				}
				mouvement[i] = 0;
				break;
			}
		}
	}
}

function VerifStockageDecoupeurDouble(){
	for (let i =0; i < nbDecoupeurDouble; i++){
		//Dessine les decoupeurDoubles et leurs infos
		ctx.drawImage(decoupeurDouble, DecoupeurDoubleList[i][0], DecoupeurDoubleList[i][1]);
    	ctx.fillStyle = 'black';
	    ctx.font = '14px sans-serif';
	    ctx.fillText('Taille : ' + DecoupeurDoubleList[i][2], DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 20);
	   	ctx.fillText('Vitesse : ' + DecoupeurDoubleList[i][6] + 's', DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 35);
	   	ctx.fillText('Decoupés : ' + DecoupeurDoubleList[i][5], DecoupeurDoubleList[i][0] + 5, DecoupeurDoubleList[i][1] + 50);

		if (DecoupeurDoubleList[i][3] >= 1){

			if (stopped != 1){
				DecoupeurDoubleList[i][3]--;
                DecoupeurDoubleList[i][5]++;
                for (let n = 0; n < DecoupeurDoubleList[i][2]; n++){
                    setTimeout(() => {
                        setTimeout(function(){TravailDecoupeurDouble(i)}, 1000*(n+1));
                    },(CLOCK/VitesseAcceleration)*20*DecoupeurDoubleList[i][6]);
                }
			}
		}
	}				
} 

