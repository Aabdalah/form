let result =[] //array to hold the result shown after generation 
$(document).ready(function(){//wait till the page is loaded
    $("button").not(".special").click(function(){//git the button that the user clicks will not work if it a special button
        $(this).css("background-color","green");//change the background color of the clicked option
        let add = [];//make another array that will go into the result array 
        add.push($(this).val());//add the value of the clicked button to the add array
        result[$(this).parent().parent().attr('id')]=add;//add the add array to the result 
        $(this).siblings().each(function(){//make sure to keep the color of the rest of the buttons to white
            $(this).css("background-color","white")
        });
        $(this).parent().parent().next().css("display","block");//display the next question and its options
    })
    $("#Generate").click(function(){//if the user hits generate 
        let str= "the user has chosen"// a new string that will hold the result to be shown in the text area 
        for(let i = 0 ; i < result.length ; i++){//loop through the result array to make the result 
            if(str.length <20){
                str+= " "+result[i][0];
            }else{//depends on the user chosen only one option or multi will add with 
                str+= " with "+result[i][0];
            }
        }
        str+=". Thanks."
        $("textarea").text(str)
    })
    $("#reset").click(function(){//if the user hits reset hide all the question except for the main one 
        $(".hidden").css("display","none");
        $("button").css("background-color","white");//return all the buttons background color to white 
        result=[];
        $("textarea").text("")//reset the text area
    })
    $("#copy").click(function(){
        navigator.clipboard.writeText($("textarea").text());//copy button
        $("#alret").css("display","block");//a nice alret with the text copied to be shown
        setTimeout(function(){
            $("#alret").css("display","none");   
        },3000);//make it appear and fade 
    })
  });
  
