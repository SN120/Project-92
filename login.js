var player_1 = "";
var player_2 = "";

localStorage.removeItem("Player_1_username");
localStorage.removeItem("Player_2_username");

function Login() {
    player_1 = document.getElementById("player_1_un").value;
    player_2 = document.getElementById("player_2_un").value;
    if (player_1 != "" && player_2 != "") {
        if (player_1 != player_2) {
            localStorage.setItem("Player_1_username", player_1);
            localStorage.setItem("Player_2_username", player_2);

            window.location = "game_page.html";
        }
    }
}