function lotsSpawn(){
      for (let i = 0; i < nbLots; i++){
            //Dessine les lots et leurs infos
      ctx.drawImage(lot, LotsList[i][0], LotsList[i][1]);
      ctx.fillStyle = 'black';
          ctx.font = '15px sans-serif';
          ctx.fillText('Taille : ' + LotsList[i][2] + ' & ' + LotsList[i][7], LotsList[i][0] + 5, LotsList[i][1] + 20);
          ctx.fillText('Stock 1 : ' + LotsList[i][3], LotsList[i][0] + 5, LotsList[i][1] + 35);
          ctx.fillText('Stock 2 : ' + LotsList[i][6], LotsList[i][0] + 5, LotsList[i][1] + 50);
          ctx.fillText('Lots : ' + LotsList[i][5], LotsList[i][0] + 5, LotsList[i][1] + 65);
      }
}

function Lots(){
      for (let i = 0; i < nbLots; i++){
            for (let j = 0; j < max; j++){
                  let x = Positions[j][0];
                  let y = Positions[j][1];
                  let taille = 100;
                  var diff = Positions[j][0] - OldPositions[j][0];
                  //Si
                  if (((x >= LotsList[i][0]-TailleGenerateur/2-5) && (x < LotsList[i][0]+TailleGenerateur/2) && (y > LotsList[i][1]) && (y < LotsList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < LotsList[i][0]+9*TailleGenerateur/4) && (x > LotsList[i][0]+7*TailleGenerateur/4) && (y > LotsList[i][1]) && (y < LotsList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
                        if (x>=LotsList[i][0]-TailleGenerateur/2-5 && x<LotsList[i][0]+TailleGenerateur/2 && y>LotsList[i][1] && y<LotsList[i][1]+taille && mouvement[j]==0 && diff>=0){
                              LotsList[i][4] = 1
                        }
                        if(y+TailleGenerateur/2>=LotsList[i][1]+TailleMachine/2){
                            LotsList[i][6]++;
                        }else{
                            LotsList[i][3]++;
                        }

                        

                  //Fait disparaitre le cube
                        OldPositions[j] = Positions[j];
                        Positions[j] = ['',''];
                        mouvement[j] = 1;
                  }
            }
      }
}

function TravailLots(j){
      for (let i = 0; i < max; i++){
          //Dès qu'un emplacement est libre
          if (Positions[i][0] == ''){
            if (LotsList[j][4] == 1){
                  Positions[i][0] = LotsList[j][0] + 2 * TailleGenerateur + 5;
                  Positions[i][1] = LotList[j][1] + TailleGenerateur/2;
            }
            else {
                  Positions[i][0] = LotsList[j][0] - TailleGenerateur/2 - 10;
                  Positions[i][1] = LotsList[j][1] + TailleGenerateur/2;
            }
              mouvement[i] = 0;
              
              break;
        }
    }
}

function VerifStockageLots(){
      for (let i = 0; i < nbLots; i++){
          //Dessine les lots et leurs infos
          ctx.drawImage(lot, LotsList[i][0], LotsList[i][1]);
          ctx.fillStyle = 'black';
          ctx.font = '15px sans-serif';
          ctx.fillText('Taille : ' + LotsList[i][2] + ' & ' + LotsList[i][7], LotsList[i][0] + 5, LotsList[i][1] + 20);
          ctx.fillText('Stock 1 : ' + LotsList[i][3], LotsList[i][0] + 5, LotsList[i][1] + 35);
          ctx.fillText('Stock 2 : ' + LotsList[i][6], LotsList[i][0] + 5, LotsList[i][1] + 50);
          ctx.fillText('Lots : ' + LotsList[i][5], LotsList[i][0] + 5, LotsList[i][1] + 65);
            if (LotsList[i][3] >= LotsList[i][2] && LotsList[i][6] >= LotsList[i][7]){
                  if (stopped != 1){
                        LotsList[i][3] = LotsList[i][3] -1*LotsList[i][2];
                        LotsList[i][6] = LotsList[i][6] -1*LotsList[i][7];
                        LotsList[i][5]++;
                        setTimeout(function(){TravailLots(i)}, CLOCK/VitesseAcceleration);
                  }
            }
      }                       
}

