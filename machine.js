function machineSpawn()
{
	for (let i = 0; i<nbMachine;i++)
	{
		ctx.fillStyle = 'purple';  
    	ctx.fillRect(MachineList[i][0], MachineList[i][1], TailleGenerateur*2 ,TailleGenerateur*2);
		ctx.fillStyle = 'green';  
    	ctx.fillRect(MachineList[i][0]+TailleGenerateur/8, MachineList[i][1]+TailleGenerateur/8, TailleGenerateur*7/4 ,TailleGenerateur*7/4);
    	ctx.fillStyle = 'black';
	    ctx.font = '20px serif';
	    ctx.fillText('Stock:0',MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+7*TailleGenerateur/4 );
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
			if(x>=MachineList[i][0]-TailleGenerateur/2 && y>MachineList[i][1] && y<MachineList[i][1]+taille && mouvement[j]==0)
			{
				MachineList[i][4]++;

				//regarde si travailleur libre
				if(MachineList[i][5]<MachineList[i][3])
				{
					MachineList[i][5]++;
					TravailMachine();
				}
				
				//colorie en fonction du nombre d'objet qui attend
				if(MachineList[i][4]>20) ctx.fillStyle = 'red'; 
				else if(MachineList[i][4]>10) ctx.fillStyle = 'orange'; 
				else ctx.fillStyle = 'green'; 
		    	
		    	//colorie l'interieur et affiche le stock
		    	ctx.fillRect(MachineList[i][0]+TailleGenerateur/8, MachineList[i][1]+TailleGenerateur/8, TailleGenerateur*7/4 ,TailleGenerateur*7/4);
	            ctx.fillStyle = 'black';
	            ctx.font = '20px serif';
	            ctx.fillText('Stock:',MachineList[i][0]+1*TailleGenerateur/4 ,MachineList[i][1]+7*TailleGenerateur/4 );
	            ctx.fillText(MachineList[i][4],MachineList[i][0]+5*TailleGenerateur/4 ,MachineList[i][1]+7*TailleGenerateur/4 );


				//fait disparaitre le cube
				OldPositions[j] = Positions[j];
				Positions[j]=['',''];
				mouvement[j]=1;
			}
		}
	}
}

function TravailMachine()
{

}