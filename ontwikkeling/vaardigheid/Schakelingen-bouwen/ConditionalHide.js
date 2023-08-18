// let mainObject = document.getElementById('MAIN')
// let radioBreaboard = document.getElementById('radioBreadboard');
// if(radioBreaboard.checked){
//     mainObject.className = "breadboardACTIVE"
// }


document.addEventListener("DOMContentLoaded", function(){
    const mainObject = document.getElementById('MAIN');
    const radioButtons = document.getElementsByName("methodSelect");

    radioButtons.forEach(function(radioButton){
        radioButton.addEventListener("change", function() {
            if (radioButton.value === "radioBreadboard"){
                mainObject.className = "breadboardACTIVE";
            }else if (radioButton.value === "radioOpHout"){
                mainObject.className = "opHoutACTIVE";
            }else if (radioButton.value === "radioTroughHole"){
                mainObject.className = "troughHoleACTIVE";
            }else if (radioButton.value === "radioPcb"){
                mainObject.className = "pcbACTIVE";
            }
        });
    });
});