Qturn="Player 1";
Aturn="Player 2";
player1_score=0
player2_score=0
pl1=localStorage.getItem("Player1User");
pl2=localStorage.getItem("Player2User");
document.getElementById("player1_name").innerHTML= localStorage.getItem("Player1User") + ": ";
document.getElementById("player2_name").innerHTML= localStorage.getItem("Player2User") + ": ";
document.getElementById("plscore1").innerHTML= player1_score;
document.getElementById("plscore2").innerHTML= player2_score;
document.getElementById("Qturn").innerHTML="Question turn: "+pl1;
document.getElementById("Aturn").innerHTML="Answer turn: "+pl2;

function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actualAnswer=parseInt(number1)*parseInt(number2);
    console.log(actualAnswer);
    question_number="<h4>" + number1 + "x" + number2 + "</h4>";
    input_box="<br>Anwer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=all;
    console.log(all);
    document.getElementById("n1").value=""; 
    document.getElementById("n2").value="";
}
function check(){
    get_answer= document.getElementById("input_check_box").value;
    if (get_answer==actualAnswer){
        
         if(Aturn="Player 1"){
             player1_score=player1_score+1
             document.getElementById("plscore1").innerHTML=player1_score;
         }
         else{
            player2_score= player2_score+1;
             document.getElementById("plscore2").innerHTML=player2_score;
         }
        
         if(Qturn=="Player 1"){
            Qturn="Player 2";
            document.getElementById("Qturn").innerHTML="Question turn: "+pl2;
       }
       else{
           Qturn="Player 1"
           document.getElementById("Qturn").innerHTML="Question turn: "+pl1;
       }
       if(Aturn=="Player 1"){
        Aturn="Player 2";
        document.getElementById("Aturn").innerHTML="Answer turn: "+pl2;
    }
    else{
       Aturn="Player 1"
       document.getElementById("Aturn").innerHTML="Answer turn: "+pl1;
    }
         
    }
    document.getElementById("output").innerHTML="";   
}
