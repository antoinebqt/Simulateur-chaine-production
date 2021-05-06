function lotDoubleSpawn(){
      for (let i = 0; i < nbLotDouble; i++){
        if(!((LotDoubleList[i][0]==0 ||LotDoubleList[i][0]==null) && (LotDoubleList[i][1]==0||LotDoubleList[i][1]==null)))
        {
          //Dessine les lotDouble et leurs infos
          ctx.drawImage(lotdouble, LotDoubleList[i][0], LotDoubleList[i][1]);
          ctx.fillStyle = 'white';
          ctx.font = '15px sans-serif';
          ctx.fillText('Taille : ' + LotDoubleList[i][2] + ' & ' + LotDoubleList[i][7], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 20);
          ctx.fillText('Stock 1 : ' + LotDoubleList[i][3], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 35);
          ctx.fillText('Stock 2 : ' + LotDoubleList[i][6], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 50);
          ctx.fillText('Lots : ' + LotDoubleList[i][5], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 65);
        }
      }
}

function LotDouble(){
      for (let i = 0; i < nbLotDouble; i++){
            for (let j = 0; j < max; j++){
              if(!((LotDoubleList[i][0]==0 ||LotDoubleList[i][0]==null) && (LotDoubleList[i][1]==0||LotDoubleList[i][1]==null)))
              {
                  let x = Positions[j][0];
                  let y = Positions[j][1];
                  let taille = 100;
                  var diff = Positions[j][0] - OldPositions[j][0];
                  //Si
                  if (((x >= LotDoubleList[i][0]-TailleGenerateur/2-5) && (x < LotDoubleList[i][0]+TailleGenerateur/2) && (y > LotDoubleList[i][1]) && (y < LotDoubleList[i][1]+taille) && (mouvement[j] == 0) && (diff >= 0)) || ((x < LotDoubleList[i][0]+9*TailleGenerateur/4) && (x > LotDoubleList[i][0]+7*TailleGenerateur/4) && (y > LotDoubleList[i][1]) && (y < LotDoubleList[i][1]+taille) && (mouvement[j] == 0) && (diff < 0))){
                        if (x>=LotDoubleList[i][0]-TailleGenerateur/2-5 && x<LotDoubleList[i][0]+TailleGenerateur/2 && y>LotDoubleList[i][1] && y<LotDoubleList[i][1]+taille && mouvement[j]==0 && diff>=0){
                              LotDoubleList[i][4] = 1
                        }
                        if(y+TailleGenerateur/2>=LotDoubleList[i][1]+TailleMachine/2){
                            LotDoubleList[i][6]++;
                        }else{
                            LotDoubleList[i][3]++;
                        }

                  //Fait disparaitre le cube
                        OldPositions[j] = Positions[j];
                        Positions[j] = ['',''];
                        mouvement[j] = 1;
                  }
              }
            }
      }
}

function TravailLotDouble(j){
      for (let i = 0; i < max; i++){
          //Dès qu'un emplacement est libre
          if (Positions[i][0] == ''){
            if (LotDoubleList[j][4] == 1){ //Arrive de la gauche
                  Positions[i][0] = LotDoubleList[j][0] + 2 * TailleGenerateur + 5;
                  Positions[i][1] = LotList[j][1] + TailleGenerateur/2;
            }
            else { //Arrive de la droite
                  Positions[i][0] = LotDoubleList[j][0] - TailleGenerateur/2 - 10;
                  Positions[i][1] = LotDoubleList[j][1] + TailleGenerateur/2;
            }
              mouvement[i] = 0;
              
              break;
        }
    }
}

function VerifStockageLotDouble(){
      for (let i = 0; i < nbLotDouble; i++){
        if(!((LotDoubleList[i][0]==0 ||LotDoubleList[i][0]==null) && (LotDoubleList[i][1]==0||LotDoubleList[i][1]==null)))
        {
          //Dessine les lotDouble et leurs infos
          ctx.drawImage(lotdouble, LotDoubleList[i][0], LotDoubleList[i][1]);
          ctx.fillStyle = 'white';
          ctx.font = '15px sans-serif';
          ctx.fillText('Taille : ' + LotDoubleList[i][2] + ' & ' + LotDoubleList[i][7], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 20);
          ctx.fillText('Stock 1 : ' + LotDoubleList[i][3], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 35);
          ctx.fillText('Stock 2 : ' + LotDoubleList[i][6], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 50);
          ctx.fillText('Lots : ' + LotDoubleList[i][5], LotDoubleList[i][0] + 5, LotDoubleList[i][1] + 65);
          if (LotDoubleList[i][3] >= LotDoubleList[i][2] && LotDoubleList[i][6] >= LotDoubleList[i][7]){
            if (stopped != 1){
              LotDoubleList[i][3] = LotDoubleList[i][3] -1*LotDoubleList[i][2];
              LotDoubleList[i][6] = LotDoubleList[i][6] -1*LotDoubleList[i][7];
              LotDoubleList[i][5]++;
              setTimeout(function(){TravailLotDouble(i)}, CLOCK/VitesseAcceleration);
            }
          }
        }
      }                       
}

