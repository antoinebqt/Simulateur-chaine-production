let tabConvoyeur = [
	[0,0,0,0]
];

let tabMachine = [
	[0,0,0,0,0,0,0,0]
];

let tabLot = [
	[0,0,0,0,0,0]
];

let tabDecoupeur = [
    [0,0,0,0,0,0,0]
];

let tabLotDouble = [
	[0,0,0,0,0,0,0,0]
];

let tabAiguillage = [
	[0,0,0,0,0,"",0]
];

function AddLigne(RefId)
{
	var refTable = document.getElementById(RefId);

	var nouvelleLigne = refTable.insertRow(1);
	if(RefId == 'convoyeur')
	{
		for(let i = 0; i<4;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);

		  	var nouveauTexte = document.createElement("INPUT");
		  	nouveauTexte.setAttribute("type", "number");
		  	nouveauTexte.setAttribute("min", "0");
		  	nouveauTexte.setAttribute("max", "100000000");
		  	nouveauTexte.setAttribute("class", "valeurConvoyeur");
		  	nouvelleCellule.appendChild(nouveauTexte);
		}
		tabConvoyeur.unshift([0,0,0,0]);
	}else if(RefId == 'machine')
	{
		for(let i = 0; i<8;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i!=3 && i<5)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurMachine");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabMachine.unshift([0,0,0,0,0,0,0,0]);
	}else if(RefId == 'lot')
	{
		for(let i = 0; i<6;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurLot");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabLot.unshift([0,0,0,0,0,0]);
	}else if(RefId == 'decoupeur')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==6)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurDecoupeur");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabDecoupeur.unshift([0,0,0,0,0,0,0]);
	}else if(RefId == 'lotDouble')
	{
		for(let i = 0; i<8;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==7)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurLotDouble");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabLotDouble.unshift([0,0,0,0,0,0,0,0]);
	}else if(RefId == 'aiguillage')
	{
		for(let i = 0; i<7;i++)
		{
			var nouvelleCellule = nouvelleLigne.insertCell(i);
			if(i<3 || i==5)
			{
			  	var nouveauTexte = document.createElement("INPUT");
			  	nouveauTexte.setAttribute("type", "number");
			  	nouveauTexte.setAttribute("min", "0");
			  	nouveauTexte.setAttribute("max", "100000000");
			  	nouveauTexte.setAttribute("class", "valeurAiguillage");
			}else
			{
				var nouveauTexte = document.createTextNode("0");
			}

			nouvelleCellule.appendChild(nouveauTexte);
		}
		tabAiguillage.unshift([0,0,0,0,0,0,0]);
	}
	
}

function SuppLigne(RefId)
{
	document.getElementById(RefId).deleteRow(1);
	if(RefId == 'convoyeur')tabConvoyeur.shift();
	if(RefId == 'lot')tabLot.shift();
	if(RefId == 'decoupeur')tabDecoupeur.shift();
	if(RefId == 'lotDouble')tabLotDouble.shift();
	if(RefId == 'aiguillage')tabAiguillage.shift();
}

function Actualiser(RefClass)
{
	if(RefClass == 'valeurConvoyeur')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<tabConvoyeur.length*tabConvoyeur[0].length;i++)
		{
			tabConvoyeur[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=tabConvoyeur[0].length){j=0;k++;}
		}
	}
	if(RefClass == 'valeurMachine')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j++;}
			tabMachine[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=5){j=0;k++;}
		}
	}
	if(RefClass == 'valeurLot')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			tabLot[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=3){j=0;k++;}
		}
	}
	if(RefClass == 'valeurDecoupeur')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j=6;}
			tabDecoupeur[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=7){j=0;k++;}
		}
	}
	if(RefClass == 'valeurLotDouble')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){j=7;}
			tabLotDouble[k][j]=parseInt(List[i].value,10);
			j++;
			if (j>=8){j=0;k++;}
		}
	}
	if(RefClass == 'valeurAiguillage')
	{
		List = document.getElementsByClassName(RefClass);
		let k=0,j=0;
		for(let i = 0; i<List.length;i++)
		{
			if (j==3){
				j=5;
				tabAiguillage[k][j]=List[i].value;
			}
			else
			{
				tabAiguillage[k][j]=parseInt(List[i].value,10);
			} 
			j++;
			if (j>=7){j=0;k++;}
		}
	}
	Affichage()
}

function TabList()
{
	console.log('tabConvoyeur',tabConvoyeur);
	console.log('tabMachine',tabMachine);
	console.log('tabLot',tabLot);
	console.log('tabDecoupeur',tabDecoupeur);
	console.log('tabLotDouble',tabLotDouble);
	console.log('tabAiguillage',tabAiguillage);
}

function Affichage()
{
	var ctx = document.getElementById('canvasMain').getContext('2d'); 
	ctx.drawImage(generateur, Xgenerateur, Ygenerateur);
	for (let i = 0; i<tabConvoyeur.length;i++)
	{
		if(tabConvoyeur[i][0]!=0)
		{
			var x = tabConvoyeur[i][0];
			var y = tabConvoyeur[i][1];
			var t = tabConvoyeur[i][2];
			ctx.fillStyle = 'black';
			ctx.strokeStyle = 'black';
	        ctx.fillRect(x, y, t, 3);
	        ctx.fillRect(x, y + 5, t, 3);
	        ctx.lineWidth = 2;
	        ctx.beginPath();
	        ctx.arc(x + 1, y + 4, 3, Math.PI / 2, 1.5 * Math.PI, false);
	        ctx.stroke();
	        ctx.beginPath();
	        ctx.arc(x + t - 1, y + 4, 3, Math.PI * 1.5, Math.PI / 2, false);
	        ctx.stroke();
	        ctx.font = '12px sans-serif';
	        ctx.fillText('Temps : ' +  tabConvoyeur[i][3] + 's', x, y + 20);
		}
	}
	for (let i = 0; i<tabMachine.length;i++)
	{
		if(tabMachine[i][0]!=0)
		{
			ctx.drawImage(machine0, tabMachine[i][0], tabMachine[i][1]);
	    	ctx.fillStyle = 'white';
		    ctx.font = '15px sans-serif';
		    ctx.fillText('Ouvrier : ' + tabMachine[i][5] + '/' + tabMachine[i][4], tabMachine[i][0] + 15, tabMachine[i][1] + 20);
		    ctx.fillText('Vitesse : ' + tabMachine[i][2] + 's', tabMachine[i][0] + 15, tabMachine[i][1] + 35);
		    ctx.fillText('Stock : ' + tabMachine[i][3], tabMachine[i][0] + 15, tabMachine[i][1] + 50);
		}
	}
	for (let i = 0; i<tabLot.length;i++)
	{
		if(tabLot[i][0]!=0)
		{
			ctx.drawImage(lot, tabLot[i][0], tabLot[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '15px sans-serif';
		    ctx.fillText('Taille : ' + tabLot[i][2], tabLot[i][0] + 5, tabLot[i][1] + 20);
		    ctx.fillText('Stock : ' + tabLot[i][3], tabLot[i][0] + 5, tabLot[i][1] + 35);
		    ctx.fillText('LotDouble : ' + tabLot[i][5], tabLot[i][0] + 5, tabLot[i][1] + 50);
		}
	}
	for (let i = 0; i<tabDecoupeur.length;i++)
	{
		if(tabDecoupeur[i][0]!=0)
		{
			ctx.drawImage(decoupeur, tabDecoupeur[i][0], tabDecoupeur[i][1]);
	    	ctx.fillStyle = 'black';
		    ctx.font = '14px sans-serif';
		    ctx.fillText('Taille : ' + tabDecoupeur[i][2], tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 20);
		    ctx.fillText('Vitesse : ' + tabDecoupeur[i][6] + 's', tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 35);
		    ctx.fillText('Decoupés : ' + tabDecoupeur[i][5], tabDecoupeur[i][0] + 5, tabDecoupeur[i][1] + 50);
		}
	}
	for (let i = 0; i<tabLotDouble.length;i++)
	{
		if(tabLotDouble[i][0]!=0)
		{
			ctx.drawImage(lot, tabLotDouble[i][0], tabLotDouble[i][1]);
      		ctx.fillStyle = 'black';
	        ctx.font = '15px sans-serif';
	        ctx.fillText('Taille : ' + tabLotDouble[i][2] + ' & ' + tabLotDouble[i][7], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 20);
	        ctx.fillText('Stock 1 : ' + tabLotDouble[i][3], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 35);
	        ctx.fillText('Stock 2 : ' + tabLotDouble[i][6], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 50);
	        ctx.fillText('LotDouble : ' + tabLotDouble[i][5], tabLotDouble[i][0] + 5, tabLotDouble[i][1] + 65);
		}
	}
	for (let i = 0; i<tabAiguillage.length;i++)
	{
		if(tabAiguillage[i][0]!=0)
		{
			let tailleAiguillage = 50;
			cycle = tabAiguillage[i][5];
			//Dessine les aiguillages
			//Dessine le haut des aiguillages
			ctx.fillStyle = 'brown';  
			ctx.strokeStyle = 'brown';
	 		ctx.fillRect(tabAiguillage[i][0], tabAiguillage[i][1], tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] - tailleAiguillage, tailleAiguillage, 3);

	 		//Dessine le bas des aiguillages
	 		ctx.fillRect(tabAiguillage[i][0], tabAiguillage[i][1] + 5, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 5  + tailleAiguillage, tailleAiguillage, 3);
	 		ctx.fillRect(tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 5  - tailleAiguillage, tailleAiguillage, 3);
	 		ctx.lineWidth = 2;
	 		
	 		//Dessine les arrondis de la première partie de l'aiguillage
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1, tabAiguillage[i][1] + 4, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage - 1,  tabAiguillage[i][1] + 4, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();  

	 		//Dessine les arrondis de l'aiguillage haut
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1 + tailleAiguillage, tabAiguillage[i][1] + 4 + tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage * 2 - 1,  tabAiguillage[i][1] + 4 + tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke(); 

	 		//Dessine les arrondis de l'aiguillage bas
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + 1 + tailleAiguillage, tabAiguillage[i][1] + 4 - tailleAiguillage, 3, Math.PI/2, 1.5*Math.PI, false);
	 		ctx.stroke();  
	 		ctx.beginPath();
	 		ctx.arc(tabAiguillage[i][0] + tailleAiguillage * 2 - 1,  tabAiguillage[i][1] + 4 - tailleAiguillage, 3, Math.PI*1.5, Math.PI/2, false);
	 		ctx.stroke();
	 		
	 		//Dessine les infos
		    ctx.fillStyle = 'black';
		    ctx.font = '15px sans-serif';
		    ctx.fillText(cycle, tabAiguillage[i][0] + 2, tabAiguillage[i][1] + 20);
		    ctx.fillText('0', tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] + 3 * tailleAiguillage/2);
		    ctx.fillText('1', tabAiguillage[i][0] + tailleAiguillage, tabAiguillage[i][1] - tailleAiguillage/2);
		}
	}
}