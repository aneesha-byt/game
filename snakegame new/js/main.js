
function openGamepage(){
    location.replace('gamepage.html');
}

function openIndex(){
    location.replace('index.html');
}

function showResult(result){
    
    var myDiv = document.getElementById("content");

    if (result ===  'win')
    {
        myDiv.innerHTML = "<h2 style='color:green' > Winner </h2>";
    }
    else{
        myDiv.innerHTML = "<h2 style='color:red' > Loser </h2>";
    }

}