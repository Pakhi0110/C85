canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

backgroundImage_array=["image_1.jpg","image_2.jpg","image_3.jpg","image_4.jpg"];
random_number= Math.floor(Math.random()*4);


rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = backgroundImage_array[random_number];
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        console.log("up");
        up();

    }
    if(keyPressed == '40'){
        console.log("down");
        down();
    }
    if(keyPressed == '37'){
        console.log("left");
        left();

    }
    if(keyPressed == '39'){
        console.log("right");
        right();
    }

}
function up(){
    if(rover_y>=10){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed= "+rover_x+", "+rover_y);
        uploadBackground();
        uploadRover();
        
    }
    }
    
    function down(){
        if(rover_y<=500){
            rover_y=rover_y+10;
            console.log("when up arrow is pressed= "+rover_x+", "+rover_y);
            uploadBackground();
            uploadRover();
        }
    }

    function left(){
        if(rover_x>=0){
            rover_x=rover_x-10;
            console.log("when up arrow is pressed= "+rover_x+", "+rover_y);
            uploadBackground();
            uploadRover();

        }

    }
    function right(){
        if(rover_x<=700){
            rover_x=rover_x+10;
            console.log("when up arrow is pressed= "+rover_x+", "+rover_y);
            uploadBackground();
            uploadRover();
        }
    }