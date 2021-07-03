var player_1 = localStorage.getItem("Player_1_username");
var player_2 = localStorage.getItem("Player_2_username");

var player_1_score = 0;
var player_2_score = 0;

var question_turn = "Player_1";
var answer_turn = "Player_2";

var number_1;
var number_2;
var true_answer;
var answer

document.getElementById("player_1_name").innerHTML = player_1 + " : ";
document.getElementById("player_2_name").innerHTML = player_2 + " : ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

function Send() {
    number_1 = document.getElementById("No.1").value;
    number_2 = document.getElementById("No.2").value;
    if (number_1 != "" && number_2 != "") {
        true_answer = parseInt(number_1) * parseInt(number_2);

        console.log(number_1);
        console.log(number_2);
        console.log(true_answer);

        document.getElementById("input").style.display = "none"

        question_1Word = "<label id='number_display'>" + number_1 + "x" + number_2 + "</label>";
        input_box = "<br> Answer : <input type='number' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onClick='check();'>Check</button>";
        row = question_1Word + input_box + check_button;

        document.getElementById("output").innerHTML = row;
        document.getElementById("No.1").value = "";
        document.getElementById("No.2").value = "";
    }

}

function check() {
    answer = document.getElementById("input_check_box").value;
    if(true_answer == answer){
        if(answer_turn == "Player_2"){
            player_2_score = player_2_score + 1;
            answer_turn = "Player_1";
            question_turn = "Player_2"

            document.getElementById("player_1_score").innerHTML = player_1_score;
            document.getElementById("player_2_score").innerHTML = player_2_score;

            document.getElementById("Q_Turn").innerHTML = question_turn;
            document.getElementById("A_Turn").innerHTML = answer_turn;
        }
        else{
            player_1_score = player_1_score + 1;
            answer_turn = "Player_2";
            question_turn = "Player_1"

            document.getElementById("player_1_score").innerHTML = player_1_score;
            document.getElementById("player_2_score").innerHTML = player_2_score;

            document.getElementById("Q_Turn").innerHTML = question_turn;
            document.getElementById("A_Turn").innerHTML = answer_turn;
        }     
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").style.display = "block";
    
}