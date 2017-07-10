var temp="";
var str1;
var str2;
var operator;
var operator_count=0;
var result;
var calculated=false;
function calculator(value){
            if(calculated==true && isNaN(value)==false ){
            temp="";
            temp += value;
            calculated=false
            document.getElementById("display").value=temp;
        }
        //
        else if(value=="reverse"){
            temp=(-temp);
            document.getElementById("display").value=temp;
            temp=String(temp);
        }
        //
         else if(value=="back"){
            temp=String(temp);
            temp=temp.substring(0,temp.length-1);
            document.getElementById("display").value=temp;
        }

        else if(value=="clean"){
            temp="";
            str1=null;
            str2=null;
            operator_count=0;
            document.getElementById("display").value=temp;
        }
        else if(value=="%"){
            temp=Number(temp)/100;
            document.getElementById("display").value=temp;
            temp=String(temp);
        }
            else if(value=="sin"){
                temp=Math.sin(temp);
                document.getElementById("display").value=temp;
                temp=String(temp);
            }
            else if(value=="cos"){
                temp=Math.cos(temp);
                document.getElementById("display").value=temp;
                temp=String(temp);
            }
            else if(value=="tan"){
                temp=Math.tan(temp);
                document.getElementById("display").value=temp;
                temp=String(temp);
            }
            else if(value=="log"){
                temp=Math.log(temp);
                document.getElementById("display").value=temp;
                temp=String(temp);
            }
            else if(value=="sqrt"){
                temp=Math.sqrt(temp);
                document.getElementById("display").value=temp;
                temp=String(temp);
            }
            else if(isNaN(value)==false || (value == "." && temp.indexOf(".")==-1)){
                temp += value;
                calculated=false
                document.getElementById("display").value=temp;
        }
        else if(value=="+" && operator_count==0){
                str1=temp;
                temp="";
                operator=1;
                operator_count++;
            }
            else if(value=="-"&& operator_count==0){
                str1=temp;
                temp="";
                operator=2;
                operator_count++;
    }
            else if(value=="*" && operator_count==0){
                str1=temp;
                temp="";
                operator=3;
                operator_count++;
    }
            else if(value=="/" && operator_count==0){
                str1=temp;
                temp="";
                operator=4;
                operator_count++;
            }else if((value=="=" && temp!="" && str1!="")||((value=="+"||value=="-"||value=="*"||value=="/")&&operator_count>0)){
                    console.log("=: temp: "+temp +" ; str1: " + str1+" ; str2: " + str2 + "operator: "+operator+"count: "+operator_count)
                    str2=temp;
                    temp="";
                    switch(operator){
                        case 1:
                            result=Number(str1)+Number(str2);
                            result=parseFloat(result.toFixed(9));
                            console.log(result)
                            calculator2(value);
                            calculated=true;
                            document.getElementById("display").value=result;
                            break;
                        case 2:
                            result=Number(str1)-Number(str2);
                            result=parseFloat(result.toFixed(9));
                            console.log(result)
                            calculator2(value);
                            calculated=true;
                            document.getElementById("display").value=result;
                            break;
                        case 3:
                            result=Number(str1)*Number(str2);
                            result=parseFloat(result.toFixed(9));
                            console.log(result);
                            calculator2(value);
                            calculated=true;
                            document.getElementById("display").value=result;
                            break;
                        case 4:
                            if(str2=="0"){
                                document.getElementById("display").value="NAN";
                                str1=null;
                                temp="";
                                str2=null;
                                operator_count=0;
                                return;
                            }
                            result=Number(str1)/Number(str2);
                            result=parseFloat(result.toFixed(9));
                            console.log(result);
                            calculator2(value);
                            calculated=true;
                            document.getElementById("display").value=result;
                            break;

                    }
    }
}

function calculator2(value){
    if(value=="="){
        operator=0;
        operator_count=0;
        temp=String(result);                    // str1=result;
        str1=null
        str2=null;
    }else if(value=="+"){
        str1=String(result);
        temp="";
        operator=1;
        operator_count++;

    }else if(value=="-"){
        str1=String(result);
        temp="";
        operator=2;
        operator_count++;
    }else if(value=="*"){
        str1=String(result);
        temp="";
        operator=3;
        operator_count++;
    }else if(value=="/"){
        str1=String(result);
        temp="";
        operator=4;
        operator_count++;
        console.log(operator_count%2)
    };
}