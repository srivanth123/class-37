class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
//if playercount=4 then play method will be called
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    // calling static function to get data of players 
    Player.getAllPlayerInfo();
// !== means not equal to, here it means all players are defined
    if(allPlayers !== undefined){
     
      var y = 130;
      //all players will execute till 3
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        y=y+20;
        textSize(15);
        //[] is an array and is holding position plr from 0-3
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,y)
      }
    }
//player index should be between 1-4
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
