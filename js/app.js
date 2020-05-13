
let game = {
   data : ["fire","wheel", "Telephone","lightbulb","car","computer"],
   moves : 0,
   check : [],
   firstCard : {},
   secondCard : {},
   show : function(element){

    $(element).children("p:first").show("fast")
    $(element).children("img:first").show("fast")

   },
   hide : function(element){

    element.children("p:first").hide("slow")
    element.children("img:first").hide("slow")
   },


   start : function() {
              
       $('.card').on("click",function(){

        game.moves =game.moves +1;
        let bigmove = ` Moves ${game.moves}`;
        $("#move").html(bigmove);
        $("#move2").html(bigmove);

        let click = false;

        if($(this).hasClass("checkCard")) {
            return
        }

        game.show(this);
       
        game.check.push($(this).attr("data-framework"));

        if (game.check.length ===2) {
      
            click =true;
            game.secondCard = $(this);

            if (game.check[0] === game.data[0] && game.check[1]=== game.data[0]) {
                game.firstCard.addClass ("checkCard");
                $(this).addClass("checkCard");       
                game.data.shift();

                
            } else {

            game.hide(game.firstCard);
            game.hide($(this));
            
            }

            if (game.data.length== 0) {
                $(".overlay-text").addClass("visible");
                
            }
             game.check = []
        }
            
        if (!click){

            game.firstCard = $(this);
       
            game.firstCard.addClass("checkCardRestart");

        }
    })
       
    },

    restart : function() {
        var shuffle = document.querySelector('.deck');
    for (var i = shuffle.children.length; i >= 0; i--) {
    shuffle.appendChild(shuffle.children[Math.random() * i | 0]);
    }  

    },

};

game.start();

game.restart();

let checkCard = (element) => {

    $(element).children("p").css("display","none");
    $(element).children("img").css("display","none");
    $(element).removeClass("checkCard");

}

let restartgame = () => {
    game.restart();
    game.data = ["fire","wheel", "Telephone","lightbulb","car","computer"];
    checkCard(".checkCard");
    checkCard(".checkCardRestart"); 
    $(".overlay-text").removeClass("visible");;
    $("#move").html("Moves");
    game.moves = 0   
   
}

$("#restartgame").on("click", restartgame);

$("#restartEnd").on("click", restartgame);

