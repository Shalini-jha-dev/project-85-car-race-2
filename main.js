var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car1.jpg";
car2_x = 10;
car2_y = 100;

background_image = "carracebackground.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log (keypress);
    if(keypress=='38'){
        console.log ("up arrow key");
        car1_up();
    }
    if(keypress=='40'){
        console.log ("down arrow key");
        car1_down();
    }
    if(keypress=='37'){
        console.log ("left arrow key");
        car1_left();
    }
    if(keypress=='39'){
        console.log ("right arrow key");
        car1_right();
    }
    if(keypress=='85'){
        console.log ("u key");
        car2_up();
    }
    if(keypress=='68'){
        console.log ("d key");
        car2_down();
    }
    if(keypress=='76'){
        console.log ("l key");
        car2_left();
    }
    if(keypress=='82'){
        console.log ("r key");
        car2_right();
    }
}

if (car1_x > 700){
    console.log("Car 1 WON");
    document.getElementById("game_status").innerHTML = "Car 1 Won";
}

if (car2_x > 700){
    console.log("Car 2 WON");
    document.getElementById("game_status").innerHTML = "Car 2 Won";
}

function car1_up(){
    if (car1_y > 0){
        car1_y -= 10;
        console.log ("When up arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_down(){
    if (car1_y <= 500){
        car1_y += 10;
        console.log ("When down arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left(){
    if (car1_x > 0){
        car1_x -= 10;
        console.log ("When left arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right(){
    if (car1_x <= 700){
        car1_x += 10;
        console.log ("When right arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_up(){
    if (car2_y > 0){
        car2_y -= 10;
        console.log ("When up arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_down(){
    if (car2_y <= 500){
        car2_y += 10;
        console.log ("When down arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left(){
    if (car2_x > 0){
        car2_x -= 10;
        console.log ("When left arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right(){
    if (car2_x <= 700){
        car2_x += 10;
        console.log ("When right arrow key is pressed ,x = " + car1_x + "y =" + car1_y );
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

