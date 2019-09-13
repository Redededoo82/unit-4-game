

// generate random numbers for the goal
     $( document ).ready(function(){
          var Random=Math.floor(Math.random()*101+19) 

// display the goal number on the screen
           
            $("#target-number").text(Random);
           
            var num1= Math.floor(Math.random()*11+1)
            var num2= Math.floor(Math.random()*11+1)
            var num3= Math.floor(Math.random()*11+1)
            var num4= Math.floor(Math.random()*11+1)

        

            var userTotal= 0; 
            var wins= 0;
            var losses = 0;
        
//on the click the crystals

    // assign those random numbers to the crystals
    
        // add that value to the score

       
        $('#image1').on ('click', function(){
            userTotal = userTotal + num1;
            $('#finalTotal').text(userTotal); 
            
        })    
             
                
                $('#image2').on ('click', function(){
                    userTotal = userTotal + num2;
                     $('#finalTotal').text(userTotal);
                    
                })   
                   
                    $('#image3').on ('click', function(){
                        userTotal = userTotal + num3;
                        $('#finalTotal').text(userTotal); 
                        
                    })

                        $('#image4').on ('click', function(){
                            userTotal = userTotal + num4;
                            $('#finalTotal').text(userTotal); 
                            
                        })
          
                            $('#face').on ('click', function(){
                                alert('Im gonna get those crystals!..Eheheheheheheheh!')
                                
                                  
                                 

                            })

                                                 
    
        })
        // if the total is greater than the goal

            // display "you lose"  *bonus reset the game
        // else if the total equals the goal "you win"