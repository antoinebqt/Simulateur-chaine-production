function lotSpawn(){
	for (let i = 0; i < nbLot; i++){
		//Dessine les lots et leurs infos
    	ctx.drawImage(lot, LotList[i][0], LotList[i][1]);
    	ctx.fillStyle = 'black';
	    ctx.font = '15px sans-serif';
	    ctx.fillText('Taille : ' + LotList[i][2], LotList[i][0] + 5, LotList[i][1] + 20);
	    ctx.fillText('Stock : ' + LotList[i][3], LotList[i][0] + 5, LotList[i][1] + 35);
	    ctx.fillText('Lots : ' + LotList[i][5], LotList[i][0] + 5, LotList[i][1] + 50);
	}
}

function Lot(){
	for (let i = 0; i < nbLot; i++){
		for (let j = 0; j < max; j++){
			let x = Positions[j][0];
			let y = Positions[j][1];
			let taille = 100;
			var diff = Positions[j][0] - OldPositions[j][0];

			//Si
			if (((x >= LotList[i][0]-TailleGenerateur/2-5) && (x < LotList[i][0]+TailleGenerateur/2) && (y > LotList[i][1]) && (y < LotList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < LotList[i][0]+9*TailleGenerateur/4) && (x > LotList[i][0]+7*TailleGenerateur/4) && (y > LotList[i][1]) && (y < LotList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
				if (x>=LotList[i][0]-TailleGenerateur/2-5 && x<LotList[i][0]+TailleGenerateur/2 && y>LotList[i][1] && y<LotList[i][1]+taille && mouvement[j]==0 && diff>=0){
					LotList[i][4] = 1
				}

				LotList[i][3]++;

		    	//Fait disparaitre le cube
				OldPositions[j] = Positions[j];
				Positions[j] = ['',''];
				mouvement[j] = 1;
			}
		}
	}
}

function TravailLot(j){
	for (let i = 0; i < max; i++){
	    //Dès qu'un emplacement est libre
	    if (Positions[i][0] == ''){
	    	if (LotList[j][4] == 1){
	    		Positions[i][0] = LotList[j][0] + 2 * TailleGenerateur + 5;
	        	Positions[i][1] = LotList[j][1] + TailleGenerateur/2;
	    	}
	    	else {
	    		Positions[i][0] = LotList[j][0] - TailleGenerateur/2 - 10;
	        	Positions[i][1] = LotList[j][1] + TailleGenerateur/2;
	    	}
	        mouvement[i] = 0;
	        break;
        }
    }
}

function VerifStockageLot(){
	for (let i =0; i < nbLot; i++){
		//Dessine les lots et leurs infos
		ctx.drawImage(lot, LotList[i][0], LotList[i][1]);
    	ctx.fillStyle = 'black';
	    ctx.font = '15px sans-serif';
	    ctx.fillText('Taille : ' + LotList[i][2], LotList[i][0] + 5, LotList[i][1] + 20);
	   	ctx.fillText('Stock : ' + LotList[i][3], LotList[i][0] + 5, LotList[i][1] + 35);
	   	ctx.fillText('Lots : ' + LotList[i][5], LotList[i][0] + 5, LotList[i][1] + 50);

		if (LotList[i][3] >= LotList[i][2]){

			if (stopped != 1){
				LotList[i][3] = LotList[i][3] -1*LotList[i][2];
	        	LotList[i][5]++;
			   	setTimeout(function(){TravailLot(i)}, CLOCK/VitesseAcceleration);
			}
		}
	}				
} 

