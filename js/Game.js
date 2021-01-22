class Game{
    constructor(){}
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState= data.val()
        })
        
    }
    Update(State){
        database.ref("/").update({
            gameState:State
        })
    }
    Start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display() 
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]

    }
    Play(){
        form.hide()
        //textSize(30)
        //text("Game Start",450,100)
        Player.getPlayerInfo()
        if(allplayers!== undefined){
            var dp=150
            var index=0
            var x=0
            var y
            
            for(var p in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[p].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index==player.index){
                    cars[index-1].shapeColor="black"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                // dp=dp+30
               // textSize(15)
                //text(allplayers[p].name+":" +allplayers[p].distance,400,dp)
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10
            player.update ()
        }
    
    drawSprites()
    }
}