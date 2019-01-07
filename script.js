var animals=["ant","cat", "sheep", "goat", "octopus","jellyfish","hippopotamous","lynx","rhinocerous","catepillar"];
var city = ["sanfransisco","chicago","oakland","berkeley","sandiego","newyorkcity"];
var objects = ["soap", "pen","yacht","fishhook"];
var guesses = 10;
var word = "";
//var wrongLetters = [];
var lettersTried = [];
var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var g = "";
var images = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png",
    "img/9.png","img/10.png","img/11.png"];

function go(type){
    guesses = 10;
    word = "";
    lettersTried = [];
    document.getElementById("print").innerHTML = "";
    document.getElementById("myField").value = "";
    document.getElementById("lives").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("tried").innerHTML = "";
    document.getElementById("image").src = "img/1.png";


    var type= parseInt(document.getElementById("catagory").value);
    if(type == 1){
        word = animals[Math.floor(Math.random() * animals.length)];
    }
    if(type == 2){
        word = city[Math.floor(Math.random()* city.length)];
    }
    if(type == 3){
        word = objects[Math.floor(Math.random()* objects.length)];
    }
    console.log(word);
    printWord();
}

function printWord(){
    var answer = "";
    for(i=0; i<word.length; i++){
        if(lettersTried.indexOf(word[i]) >= 0){
            answer += word[i];
        }else{
            answer += "_ ";
        }
    }
    console.log(answer);
    document.getElementById("print").innerHTML = answer;
    return answer;
}

function enterButton(){
    var wantedLetter = document.getElementById("myField").value;
    var answer = printWord();
    if(answer == word){
        document.getElementById("lives").innerHTML = "You win!!"
    }
    else{
        if(!/^[a-zA-Z]+$/.test(wantedLetter) || lettersTried.indexOf(wantedLetter)>-1 || wantedLetter.length != 1){
            document.getElementById("message").innerHTML = "please enter a new letter.";
            return false;
        }
        else{
            lettersTried.push(wantedLetter);
            printWord();
            console.log(wantedLetter);
            document.getElementById("message").innerHTML = "";
            if(word.indexOf(wantedLetter)<0){
                guesses --;
                document.getElementById("image").src = images[10-guesses];

            }
        }

        document.getElementById("lives").innerHTML = "Lives remaining: " + guesses;
        document.getElementById("tried").innerHTML = "Letters tried: " + lettersTried;

        if(guesses<=0){
            document.getElementById("lives").innerHTML = "You lose!"
        }
    }
}
