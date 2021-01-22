var playerCount,form,player,game,database,allplayers
var gameState=0
var car1,car2,car3,car4,cars
function setup(){
    createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.Start()
}
function draw(){
    if(playerCount == 4){
        game.Update(1)
    }
    if(gameState==1){
        clear()
        game.Play() 
    }
}