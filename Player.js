class Player {
  constructor(){
this.index=null;
this.distance=0;
this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
//updating player count in the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  /*update(n){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:n
    });
  }*/

  //new update method without parameter to update name and distance in database as per index in players

  update(){
   var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({ 
      name:this.name,
     distance:this.distance
     });
   }
//static is a class level function and will call this function with class name and not with object name
   static getAllPlayerInfo(){
    var allPlayerRef = database.ref('players/player');
    allPlayerRef.on("value",function(data){
      allPlayers = data.val();
    })
  }
}
