



            // Created by Shanil Ahmed

// Created by Bad_Bit


var rolling = false ;
var num ;
var shown = false;

function roll(){
    var num = [] ;
    for(var i=0;i<3;i++){
        var n = Math.floor(Math.random()*10) ;
        num.push(n) ;
    }
    return num ;
}

function pull(){
    if(!rolling){
        rolling = true ;
        num = roll();
        var le = document.querySelector(".stick");
        shown = false ;
        var vals = document.querySelectorAll(".value") ;
        le.classList.add("pull");
        for(var i=0;i<3;i++){
            var m = 4 * num[i] ;
            console.log(m);
            vals[i].style.marginTop = "-"+m+"rem";
            vals[i].classList.add("roll-it");
            vals[i].addEventListener(
                "webkitAnimationEnd" ,
                function(event){
                    event.target.classList
                    .remove("roll-it") ;
                    rolling = false ;
                }
            );
        }
        vals[2].addEventListener(
            "webkitAnimationEnd" ,
            function(event){
                if(shown){
                    return 0;
                }
                event.target.classList
                    .remove("roll-it") ;
                rolling = false ;
                shown = true ;
                le.classList.remove("pull");
                showPrize();
            }
        );
    }
}

function showPrize(){
    if(num[0]==num[1] && num[1]==num[2]){
        if(num[0]==7){
            alert("JACKPOT ! You got nothing sorry :( ");
        }
        else{
            alert("Congratulations ! You got triple of "+num[0])
        }
    }
    else if(num[0]==num[1]){
        alert("Not Bad You got Double of "+num[0]);
    }
    else if(num[2]==num[1]){
        alert("Not Bad You got Double of "+num[1]);
    }
    else if(num[0]==num[2]){
        alert("Not Bad You got Double of "+num[0]);
    }
    else{
        alert("No Problem You can try until your pockets were full!");
    }
}

