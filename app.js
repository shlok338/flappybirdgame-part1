var myGamePiece
var myObstacles = [];
var myScore;
var flappy = "https://banner2.cleanpng.com/20180403/idw/kisspng-flappy-bird-app-store-sprite-scratch-5ac32182bc1a02.0430951715227375387705.jpg"

function startGame(){
    myGameArea.start();
}
    
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
    this.canvas.width=600;
    this.canvas.height=370;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea,20);
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.width)
    },
    stop:function(){
        clearInterval(this.interval);
    }
}

