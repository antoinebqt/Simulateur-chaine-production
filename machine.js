function machineSpawn()
{
	for (let i = 0; i<nbMachine;i++)
	{
		ctx.fillStyle = 'purple';  
    	ctx.fillRect(MachineList[i][0], MachineList[i][1], TailleGenerateur*2 ,TailleGenerateur*2);
		ctx.fillStyle = 'green';  
    	ctx.fillRect(MachineList[i][0]+TailleGenerateur/8, MachineList[i][1]+TailleGenerateur/8, TailleGenerateur*7/4 ,TailleGenerateur*7/4);
    	ctx.fillStyle = 'black';
	    ctx.font = '15px serif';
	    ctx.fillText('Stock:0',MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+7*TailleGenerateur/4 );
	    ctx.fillText('Ouvrier:'+MachineList[i][5]+'/'+ MachineList[i][4],MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+TailleGenerateur );
	}
}

function Machine()
{
	for (let i = 0; i<nbMachine;i++)
	{
		for (let j = 0; j<max;j++)
		{
			let x = Positions[j][0];
			let y = Positions[j][1];
			let taille = TailleGenerateur*2;
			if(x>=MachineList[i][0]-TailleGenerateur/2-5 && x<MachineList[i][0]+TailleGenerateur/2 && y>MachineList[i][1] && y<MachineList[i][1]+taille && mouvement[j]==0)
			{
				MachineList[i][3]++;

				//regarde si travaileur libre
				if(MachineList[i][5]<MachineList[i][4])
				{
					MachineList[i][5]++;
					if (stopped != 1){
				    	setTimeout(function(){TravailMachine(i)},MachineList[i][2]*1000);
				    }
				}

				//colorie en fonction du nombre d'objet qui attend
				if(MachineList[i][3]>20) ctx.fillStyle = 'red'; 
				else if(MachineList[i][3]>10) ctx.fillStyle = 'orange'; 
				else ctx.fillStyle = 'green'; 
		    	
		    	//colorie l'interieur et affiche le stock
		    	ctx.fillRect(MachineList[i][0]+TailleGenerateur/8, MachineList[i][1]+TailleGenerateur/8, TailleGenerateur*7/4 ,TailleGenerateur*7/4);
	            ctx.fillStyle = 'black';
	            ctx.font = '15px serif';
	            ctx.fillText('Stock:'+MachineList[i][3],MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+7*TailleGenerateur/4 );
	            ctx.fillText('Ouvrier:'+MachineList[i][5]+'/'+ MachineList[i][4],MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+TailleGenerateur );


				//fait disparaitre le cube
				OldPositions[j] = Positions[j];
				Positions[j]=['',''];
				mouvement[j]=1;
			}
		}
	}
}

function TravailMachine(j)
{
	for (let i = 0; i < max; i++){
	    //Dès qu'un emplacement est libre
	    if (Positions[i][0] == ''){
	        
	        Positions[i][0] = MachineList[j][0]+2*TailleGenerateur+5;
	        Positions[i][1] = MachineList[j][1]+TailleGenerateur/2;
	        mouvement[i]=1;

	        //retire 1 au stockage et au nb de travaileur actif
			MachineList[j][5]--;
			MachineList[j][3]--;
	        break;
        }
    }
}