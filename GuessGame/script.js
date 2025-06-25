var score =  10;


function checkNum(){
    var num = Math.random();
    var gnum = Math.floor(num*10)+1;
    console.log(gnum);
    var g = document.getElementById('guess').value;
    if(g == gnum){
        document.getElementById('result').textContent="correct";
        score++;
    }
    else{
        document.getElementById('result').textContent="wrong";
        score--;
    }
    document.getElementById('score').textContent="score : "+score;
}
