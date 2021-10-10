function adduser(){
    Username1 = document.getElementById("p1input").value;
    Username2 = document.getElementById("p2input").value;
    localStorage.setItem("Player1User",Username1);
    localStorage.setItem("Player2User",Username2)
    window.location="game_page.html"
  }