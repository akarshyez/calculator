function buttonClick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay()
{
    document.getElementById("screen").value=""
}

function equalClick()
{
    var text=document.getElementById("screen").value       //select all text
    var result=eval(text)                                  //eval is a library function....... will all the operations
    document.getElementById("screen").value=result          //Display the Screen
}