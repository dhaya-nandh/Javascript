var display=document.querySelector(".displayscreen");
function screen(input){
    display.value+=input;
}
function clearDisplay(){
    display.value=" ";
}
function calc(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}
function deletevalue()
{
    display.value=display.value.slice(0,-1);
}
