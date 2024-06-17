function random(choices){var randomNumber1=Math.floor(Math.random()*3)+1;
var randomDiceImage="roll"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelector("img.botI");
image1.setAttribute("src",randomImageSource);

if(randomNumber1===choices)
    {
        document.querySelector("h2").textContent="It's a tie";
    }

    else if(randomNumber1===1 && choices===2 || randomNumber1===2 && choices===3 || randomNumber1===3 && choices===1)
        {
            document.querySelector("h2").textContent="Bot Wins";
        }
         else
            {
                document.querySelector("h2").textContent="You win";
            }
}
function page(choice){
   if (choice===1)
    {  
        var imageFind=document.querySelector("img.userI");
        imageFind.setAttribute("src","images/roll1.png");
        random(choice);
     }
     if (choice===2)
        {  
            var imageFind=document.querySelector("img.userI");
            imageFind.setAttribute("src","images/roll2.png");
            random(choice);
         }
         if (choice===3)
            {  
                var imageFind=document.querySelector("img.userI");
                imageFind.setAttribute("src","images/roll3.png");
                random(choice);
             }
            
}
