var player = {};
var game = {};

//TODO Load saved game if exists

//END TODO
game.baseInterval = 1000;
game.resources = {
    electricty : {
        label: "Electricty",
        currentCount : 0
    },
    animalmeat : {
        label: "Animal Meat",
        currentCount : 0
    },
    },
    cows : {
        label: "Cows",
        currentCount : 0
    },
    zombies : {
        label: "Zombies",
        currentCount : 0
    },
    people : {
        label: "People",
        currentCount : 0
    },
    generator : {
        label: "Generator",
        currentCount : 0
    },
    wood : {
        label: "Wood",
        currentCount : 0
    },

}

game.facilities = {
    tent : {
        Cost : {
            wood : 10
        },
        currentCount : 0
    },
    shed : {
        Cost : {
            wood : 100,
            stone : 10
        },
        currentCount : 0
    },
    smallhouse : {
        Cost : {
            wood : 1000,
            stone : 100,
            metal : 10
        },
        currentCount : 0
    },
    largehouse : {
        Cost : {
            wood : 10000,
            stone : 1000,
            metal : 100,
            brick : 10,
            currentCount : 0
        }
    },
    mansion : {
        Cost : {
            wood : 100000,
            stone : 10000,
            metal : 1000,
            brick : 100,
            marble : 10,
            currentCount : 0
        }
    },
}


$(document).ready(function(){
    $('.getParticle').click(function(){
        var particle = $(this).attr('particle');
        game.resources[particle].currentCount++;
        $(this).next('span').text("count: " + game.resources[particle].currentCount);
        
    });

    $('.buyFacility').click(function(){
        var facility = $(this).attr('facility');
        if(game.resources.wood.currentCount >= game.facilities[facility].cost.wood){
        game.facilities[facility].currentCount++;
        game.resources.wood.currentCount -= game.facilities[facility].cost.wood;
        $(this).next('span').text("count: " + game.facilities[facility].currentCount);
        }else{
            $(this).notify("Not enough resources")
        }
        update();
        
    });

    window.setInterval(function(){
        update();
    },game.baseInterval);
});
function update(){
    $('.getParticle').each(function(i,v){
        var particle = $(this).attr('particle');
        $(this).next('span').text("count: " + game.resources[particle].currentCount);
    })
    
}
