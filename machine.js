function machineSpawn(){
	for (let i = 0; i < nbMachine; i++){
		//Dessine les machines et leurs infos
    	ctx.drawImage(machine, MachineList[i][0], MachineList[i][1]);
    	ctx.fillStyle = 'white';
	    ctx.font = '15px sans-serif';
	    ctx.fillText('Ouvrier : ' + MachineList[i][5] + '/' + MachineList[i][4], MachineList[i][0] + 15, MachineList[i][1] + 20);
	    ctx.fillText('Vitesse : ' + MachineList[i][2], MachineList[i][0] + 15, MachineList[i][1] + 35);
	    ctx.fillText('Stock : ' + MachineList[i][3], MachineList[i][0] + 15, MachineList[i][1] + 50);
	}
}

function Machine(){
	for (let i = 0; i < nbMachine; i++){
		for (let j = 0; j < max; j++){
			let x = Positions[j][0];
			let y = Positions[j][1];
			let taille = TailleGenerateur * 2;
			var diff = Positions[j][0] - OldPositions[j][0];
			
			//Si
			if (((x >= MachineList[i][0]-TailleGenerateur/2-5) && (x < MachineList[i][0]+TailleGenerateur/2) && (y > MachineList[i][1]) && (y < MachineList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < MachineList[i][0]+9*TailleGenerateur/4) && (x > MachineList[i][0]+7*TailleGenerateur/4) && (y > MachineList[i][1]) && (y < MachineList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
				if (x>=MachineList[i][0]-TailleGenerateur/2-5 && x<MachineList[i][0]+TailleGenerateur/2 && y>MachineList[i][1] && y<MachineList[i][1]+taille && mouvement[j]==0 && diff>=0){
					MachineList[i][6] = 1
				}

				MachineList[i][3]++;

				//Change l'image en fonction de son stockage
				if (MachineList[i][3] > 20){
					machine.src = "img/machine20.png";
				} 
				else if (MachineList[i][3] > 10){
					machine.src = "img/machine10.png";
				}
				else if (MachineList[i][3] > 5){
					machine.src = "img/machine5.png";
				} 
				else machine.src = "img/machine0.png"; 
		    	
		    	//Affiche la bonne image et ses infos correspondantes
		    	ctx.drawImage(machine, MachineList[i][0], MachineList[i][1]);
	            ctx.fillStyle = 'white';
	            ctx.font = '15px sans-serif';
	            ctx.fillText('Ouvrier : ' + MachineList[i][5] + '/' + MachineList[i][4], MachineList[i][0] + 15, MachineList[i][1] + 20);
	            ctx.fillText('Vitesse : ' + MachineList[i][2], MachineList[i][0] + 15, MachineList[i][1] + 35);
	            ctx.fillText('Stock : ' + MachineList[i][3], MachineList[i][0] + 15, MachineList[i][1] + 50);


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

function VerifStockage(){
	for (let i =0; i <nbMachine;i++){
		if (MachineList[i][5] < MachineList[i][4] && MachineList[i][3]>0){
			MachineList[i][5]++;
			MachineList[i][3]--;
			if (stopped != 1){
			   	setTimeout(function(){TravailMachine(i)}, 1000/MachineList[i][2]/VitesseAcceleration);
			}
		}
	}
					
}