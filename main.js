let result =[]
$(document).ready(function(){
    $("button").not(".special").click(function(){
        $(this).css("background-color","green");
        let add = [];
        add.push($(this).val());
        result[$(this).parent().parent().attr('id')]=add;
        $(this).siblings().each(function(){
            $(this).css("background-color","white")
        });
        $(this).parent().parent().next().css("display","block");
        console.log(result)
    })
    $("#Generate").click(function(){
        let str= "the user has chosen"
        for(let i = 0 ; i < result.length ; i++){
            if(str.length <20){
                str+= " "+result[i][0];
            }else{
                str+= " with "+result[i][0];
            }
            
        }
        str+=". Thanks."
        $("textarea").text(str)
    })
    $("#reset").click(function(){
        $(".hidden").css("display","none");
        $("button").css("background-color","white");
        result=[];
        $("textarea").text("")
    })
    $("#copy").click(function(){
        navigator.clipboard.writeText($("textarea").text());
        $("#alret").css("display","block");
        setTimeout(function(){
            $("#alret").css("display","none");   
        },3000);
    })
   
  });
  