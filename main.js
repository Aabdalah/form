let result =[] //array to hold the result shown after generation 
let questionsFor1 = [];
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><button class='generated' value='A'>Option A</button><button  class='generated' value='B'>Option B</button><button  class='generated' value='C'>Option C</button><button  class='generated' value='D'>Option D</button></div></div>");
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><button class='generated' value='1'>Option 1</button><button  class='generated' value='2'>Option 2</button><button  class='generated' value='3'>Option 3</button><button  class='generated' value='4'>Option 4</button></div></div>");
questionsFor1.push("<div class='question hidden' id='2'><h1>Question two ?</h1><div class='options'><button class='generated'  value='10'>Option 10</button><button  class='generated' value='11'>Option 11</button><button  class='generated' value='12'>Option 12</button></div></div>");
questionsFor1.push("");
let questionsFor2A = [];
questionsFor2A.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='z'>Option z</button><button  class='generated' value='w'>Option w</button><button  class='generated' value='se'>Option se</button><button  class='generated' value='ff'>Option ff</button></div></div>");
questionsFor2A.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='x'>Option x</button><button  class='generated' value='f'>Option f</button><button  class='generated' value='re'>Option re</button></div></div>");
questionsFor2A.push("");
questionsFor2A.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='y'>Option y</button><button  class='generated' value='q'>Option q</button><button  class='generated' value='as'>Option as</button><button  class='generated' value='xw'>Option xw</button></div></div>");
let questionsFor2B = [];
questionsFor2B.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='ah'>Option ah</button><button  class='generated' value='ab'>Option ab</button><button  class='generated' value='hh'>Option hh</button><button  class='generated' value='yo'>Option io</button></div></div>");
questionsFor2B.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='md'>Option md</button><button  class='generated' value='ad'>Option ad</button><button  class='generated' value='gt'>Option gt</button></div></div>");
questionsFor2B.push("");
questionsFor2B.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='ed'>Option ed</button><button  class='generated' value='bb'>Option bb</button><button  class='generated' value='ff'>Option ff</button><button  class='generated' value='kk'>Option kk</button></div></div>");
let questionsFor2C= [];
questionsFor2C.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='ahmed'>Option ahmed</button><button  class='generated' value='is'>Option is</button><button  class='generated' value='him'>Option him</button><button  class='generated' value='red'>Option red</button></div></div>");
questionsFor2C.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='mohamed'>Option mohamed</button><button  class='generated' value='are'>Option are</button><button  class='generated' value='her'>Option her</button></div></div>");
questionsFor2C.push("<div class='question hidden' id='3'><h1>Question three ?</h1><div class='options'><button class='generated' value='mahmod'>Option mahmod</button><button  class='generated' value='you'>Option you</button><button  class='generated' value='his'>Option his</button><button  class='generated' value='green'>Option green</button></div></div>");


let questionNumbers;
$(document).ready(function(){
    questionNumbers = $(".question").length;
    console.log("number of qs = "+questionNumbers)
    $("button").click(function(){
        questionNumbers = $(".question").length;
        console.log("number of qs = "+questionNumbers)
      });
      $("#main").on('click','.generated',function(){
        questionNumbers = $(".question").length;
        console.log("number of qs = "+questionNumbers)
      });
})

$(document).ready(function(){//wait till the page is loaded
    $("button").not(".special").on('click',function(){//git the button that the user clicks will not work if it a special button
        console.log("reg")
        result=[];//make sure the result is empty on click
        $(this).css("background-color","green");//change the background color of the clicked option
        let add = [];//make another array that will go into the result array 
        add.push($(this).val());//add the value of the clicked button to the add array
        result[$(this).parent().parent().attr('id')-1]=add;//add the add array to the result 
        $(this).siblings().each(function(){//make sure to keep the color of the rest of the buttons to white
            $(this).css("background-color","white")
        });
        //displaying the next question
        let questionNumber = $(this).parent().parent().attr("id");//get the number of the question the user answered
        
        let placeToAppend = $(this).parent().parent();//get the place you will append the new question
        if(questionNumber==1 && questionNumbers == 1){//if there is only one question and the question answered number one append rhe next question based on the user input
            if($(this).val()=="A"){
                $(questionsFor1[0]).insertAfter(placeToAppend);
            }else if($(this).val()=="B"){
                $(questionsFor1[1]).insertAfter(placeToAppend);
            }
            else if($(this).val()=="C"){
                $(questionsFor1[2]).insertAfter(placeToAppend);
            }
            else if($(this).val()=="D"){
                $(questionsFor1[3]).insertAfter(placeToAppend);
            }
        }
        if(questionNumber==1 && questionNumbers > 1){//if there is2 question and the question answered number one replace the next question based on the user input
            if($(this).val()=="A"){
                $(placeToAppend.next()).replaceWith(questionsFor1[0]);
            }else if($(this).val()=="B"){
                $(placeToAppend.next()).replaceWith(questionsFor1[1]);
            }
            else if($(this).val()=="C"){
                $(placeToAppend.next()).replaceWith(questionsFor1[2]);
            }
            else if($(this).val()=="D"){
                $(placeToAppend.next()).replaceWith(questionsFor1[3]);
            }
        }
        if(questionNumber==1 && questionNumbers > 1){
            $("#3").remove();
        }
        console.log("q number = "+questionNumber);
        //end of display 
    })


    
        $("#main").on('click','.generated',function(){//git the button that the user clicks will not work if it a special button
            console.log("reg")
            if(result.length >2){result.pop()};
            $(this).css("background-color","green");//change the background color of the clicked option
            let add = [];//make another array that will go into the result array 
            add.push($(this).val());//add the value of the clicked button to the add array
            result[$(this).parent().parent().attr('id')-1]=add;//add the add array to the result 
            $(this).siblings().each(function(){//make sure to keep the color of the rest of the buttons to white
                $(this).css("background-color","white")
            });
            //displaying the next question
            let questionNumber = $(this).parent().parent().attr("id");//get the number of the question the user answered

            let placeToAppend = $(this).parent().parent();//get the place you will append the new question
            if(questionNumber==1 && questionNumbers == 1){//if there is only one question and the question answered number one append rhe next question based on the user input
                if($(this).val()=="A"){
                    $(questionsFor1[0]).insertAfter(placeToAppend);
                }else if($(this).val()=="B"){
                    $(questionsFor1[1]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="C"){
                    $(questionsFor1[2]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="D"){
                    $(questionsFor1[3]).insertAfter(placeToAppend);
                }
            }
            if(questionNumber==1 && questionNumbers == 2){//if there is2 question and the question answered number one replace the next question based on the user input
                if($(this).val()=="A"){
                    $(placeToAppend.next()).replaceWith(questionsFor1[0]);
                }else if($(this).val()=="B"){
                    $(placeToAppend.next()).replaceWith(questionsFor1[1]);
                }
                else if($(this).val()=="C"){
                    $(placeToAppend.next()).replaceWith(questionsFor1[2]);
                }
                else if($(this).val()=="D"){
                    $(placeToAppend.next()).replaceWith(questionsFor1[3]);
                }
            }


            if(questionNumber==2 && questionNumbers == 2){//if there is only two question and the question answered number two append rhe next question based on the user input
                if($(this).val()=="A"){
                    $(questionsFor2A[0]).insertAfter(placeToAppend);
                }else if($(this).val()=="B"){
                    $(questionsFor2A[1]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="C"){
                    $(questionsFor2A[2]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="D"){
                    $(questionsFor2A[3]).insertAfter(placeToAppend);
                }
            }
            if(questionNumber==2 && questionNumbers == 3){//if there is two question and the question answered number one replace the next question based on the user input
                if($(this).val()=="A"){
                    $(placeToAppend.next()).replaceWith(questionsFor2A[0]);
                }else if($(this).val()=="B"){
                    $(placeToAppend.next()).replaceWith(questionsFor2A[1]);
                }
                else if($(this).val()=="C"){
                    $(placeToAppend.next()).replaceWith(questionsFor2A[2]);
                }
                else if($(this).val()=="D"){
                    $(placeToAppend.next()).replaceWith(questionsFor2A[3]);
                }
            }



            if(questionNumber==2 && questionNumbers == 2){//if there is only two question and the question answered number two append rhe next question based on the user input
                if($(this).val()=="1"){
                    $(questionsFor2B[0]).insertAfter(placeToAppend);
                }else if($(this).val()=="2"){
                    $(questionsFor2B[1]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="3"){
                    $(questionsFor2B[2]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="4"){
                    $(questionsFor2B[3]).insertAfter(placeToAppend);
                }
            }
            if(questionNumber==2 && questionNumbers == 3){//if there is two question and the question answered number one replace the next question based on the user input
                if($(this).val()=="1"){
                    $(placeToAppend.next()).replaceWith(questionsFor2B[0]);
                }else if($(this).val()=="2"){
                    $(placeToAppend.next()).replaceWith(questionsFor2B[1]);
                }
                else if($(this).val()=="3"){
                    $(placeToAppend.next()).replaceWith(questionsFor2B[2]);
                }
                else if($(this).val()=="4"){
                    $(placeToAppend.next()).replaceWith(questionsFor2B[3]);
                }
            }


            if(questionNumber==2 && questionNumbers == 2){//if there is only two question and the question answered number two append rhe next question based on the user input
                if($(this).val()=="10"){
                    $(questionsFor2C[0]).insertAfter(placeToAppend);
                }else if($(this).val()=="11"){
                    $(questionsFor2C[1]).insertAfter(placeToAppend);
                }
                else if($(this).val()=="12"){
                    $(questionsFor2C[2]).insertAfter(placeToAppend);
                }
            }
            if(questionNumber==2 && questionNumbers == 3){//if there is two question and the question answered number one replace the next question based on the user input
                if($(this).val()=="10"){
                    $(placeToAppend.next()).replaceWith(questionsFor2C[0]);
                }else if($(this).val()=="11"){
                    $(placeToAppend.next()).replaceWith(questionsFor2C[1]);
                }
                else if($(this).val()=="12"){
                    $(placeToAppend.next()).replaceWith(questionsFor2C[2]);
                }
            }

            console.log("q number = "+questionNumber);
            //end of display 
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
        $("textarea").val(str)
    })
    $("#reset").click(function(){//if the user hits reset hide all the question except for the main one 
        $(".hidden").css("display","none");
        $("button").css("background-color","white");//return all the buttons background color to white 
        result=[];
        $("textarea").val("")//reset the text area
    })
    $("#copy").click(function(){
        navigator.clipboard.writeText($("textarea").val());//copy button
        $("#alret").css("display","block");//a nice alret with the text copied to be shown
        setTimeout(function(){
            $("#alret").css("display","none");   
        },3000);//make it appear and fade 
    })
  });
