
var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object  = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}

function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img ;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object );
    });

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed=='80'){
        console.log("p and shiftkey pressed together");
        block_image_height = block_image_height + 10 ;
        block_image_width  = block_image_width  + 10 ;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keypressed=='77'){
        console.log("m and shiftkey pressed together");
        block_image_height = block_image_height - 10 ;
        block_image_width  = block_image_width  - 10 ;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    }
if(keypressed == '38'){
        up();
        console.log("up");
}
if(keypressed == '40'){
    down();
    console.log("down");
}

if(keypressed == '37'){
    left();
    console.log("left");
}

if(keypressed == '39'){
    right();
    console.log("right");
}

if(keypressed == '87'){
    block_update("wall.jpg");
    console.log("w");
}

if(keypressed == '71'){
    block_update("ground.png");
    console.log("g");
}

if(keypressed == '76'){
    block_update("light_green.png");
    console.log("l");
}

if(keypressed == '84'){
    block_update("trunk.jpg");
    console.log("t");
}

if(keypressed == '82'){
    block_update("roof.jpg");
    console.log("r");
}

if(keypressed == '89'){
    block_update("yellow_wall.png");
    console.log("y");
}

if(keypressed == '68'){
    block_update("dark_green.png");
    console.log("d");
}

if(keypressed == '85'){
    block_update("unique.png");
    console.log("u");
}

if(keypressed == '67'){
    block_update("cloud.jpg");
    console.log("c");
}

}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up  arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left  arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right  arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
    


