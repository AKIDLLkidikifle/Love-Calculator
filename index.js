$("#submit").click(calculateLove);

var start = false;

function calculateLove() {
    let yourName = $("#firstname").val();
    let crushName = $("#secondname").val();

    if (start==false) {
        let percentage = Math.floor(Math.random() * 100)+1; //1-100
        
        $("#randomeResult").text(yourName + " and " + crushName + "'s chance of love:");
        $("#randompercentage").text(percentage + "%");

        var audio = new Audio("sounds/snare.mp3");
        audio.play();

        $(".part1").slideUp();
        start = true;
    }
}