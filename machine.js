function machineSpawn(){
	for (let i = 0; i < nbMachine; i++){
		//Dessine les machines et leurs infos
    	ctx.drawImage(machine0, MachineList[i][0], MachineList[i][1]);
    	ctx.fillStyle = 'white';
	    ctx.font = '15px sans-serif';
	    ctx.fillText('Ouvrier : ' + MachineList[i][5] + '/' + MachineList[i][4], MachineList[i][0] + 15, MachineList[i][1] + 20);
	    ctx.fillText('Vitesse : ' + MachineList[i][2] + 's', MachineList[i][0] + 15, MachineList[i][1] + 35);
	    ctx.fillText('Stock : ' + MachineList[i][3], MachineList[i][0] + 15, MachineList[i][1] + 50);
	}
}

function Machine(){
	for (let i = 0; i < nbMachine; i++){
		for (let j = 0; j < max; j++){
			let x = Positions[j][0];
			let y = Positions[j][1];
			let taille = 100;
			var diff = Positions[j][0] - OldPositions[j][0];
			
			if (((x >= MachineList[i][0]-TailleGenerateur/2-5) && (x < MachineList[i][0]+TailleGenerateur/2) && (y > MachineList[i][1]) && (y < MachineList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < MachineList[i][0]+9*TailleGenerateur/4) && (x > MachineList[i][0]+7*TailleGenerateur/4) && (y > MachineList[i][1]) && (y < MachineList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
				if ((x >= MachineList[i][0]-TailleGenerateur/2-5) && (x < MachineList[i][0]+TailleGenerateur/2) && (y > MachineList[i][1]) && (y < MachineList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)){
					MachineList[i][6] = 1
				}
				
				MachineList[i][3]++;
				//Change l'image en fonction de son stockage
				if (MachineList[i][3] >= 20){
					MachineList[i][7] = 20;
					Probleme[i] = 1;
				} 
				else if (MachineList[i][3] >= 10){
					MachineList[i][7] = 10;
					
				}
				else if (MachineList[i][3] >= 5){
					MachineList[i][7] = 5;
				} 
				else MachineList[i][7] = 0;

				if (MachineList[i][7]==0){
					Probleme[i]=0;
				}
				//Fait disparaitre le cube
				OldPositions[j] = Positions[j];
				Positions[j] = ['',''];
				mouvement[j] = 1;
			}
		}
	}
}

function TravailMachine(j){
	for (let i = 0; i < max; i++){
	    //Dès qu'un emplacement est libre
	    if (Positions[i][0] == ''){
	    	if (MachineList[j][6] == 1){
	    		Positions[i][0] = MachineList[j][0] + 2 * TailleGenerateur + 5;
	        	Positions[i][1] = MachineList[j][1] + TailleGenerateur/2;
	    	}
	    	else {
	    		Positions[i][0] = MachineList[j][0] - TailleGenerateur/2 - 10;
	        	Positions[i][1] = MachineList[j][1] + TailleGenerateur/2;
	    	}
	        mouvement[i] = 0;

	        //Retire 1 au nombre de travaileur actif
			MachineList[j][5]--;
			
	        break;
        }
    }
}

function VerifStockageMachine(){
	for (let i = 0; i < nbMachine; i++){
		//Affiche la bonne image et ses infos correspondantes
		var machine = new Image();
		machine.src = "img/machine" + MachineList[i][7] + ".png";
		ctx.drawImage(machine, MachineList[i][0], MachineList[i][1]);
	    ctx.fillStyle = 'white';
	    ctx.font = '15px sans-serif';
	    ctx.fillText('Ouvrier : ' + MachineList[i][5] + '/' + MachineList[i][4], MachineList[i][0] + 15, MachineList[i][1] + 20);
	    ctx.fillText('Vitesse : ' + MachineList[i][2] + 's', MachineList[i][0] + 15, MachineList[i][1] + 35);
	    ctx.fillText('Stock : ' + MachineList[i][3], MachineList[i][0] + 15, MachineList[i][1] + 50);
		if ((MachineList[i][5] < MachineList[i][4]) && (MachineList[i][3] > 0)){
			if (stopped != 1){
				MachineList[i][5]++;
				MachineList[i][3]--;
			   	setTimeout(function(){TravailMachine(i)}, (CLOCK/VitesseAcceleration)*20*MachineList[i][2]);
			}
		}
	}
					
}