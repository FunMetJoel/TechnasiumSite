// let mainObject = document.getElementById('MAIN')
// let radioBreaboard = document.getElementById('radioPython');
// if(radioBreaboard.checked){
//     mainObject.className = "PythonACTIVE"
// }


document.addEventListener("DOMContentLoaded", function(){
    const mainObject = document.getElementById('MAIN');
    const radioButtons = document.getElementsByName("methodSelect");

    radioButtons.forEach(function(radioButton){
        radioButton.addEventListener("change", function() {
            if (radioButton.value === "radioPython"){
                mainObject.className = "PythonACTIVE";
            }else if (radioButton.value === "radioCpp"){
                mainObject.className = "CppACTIVE";
            }else if (radioButton.value === "radioJS"){
                mainObject.className = "JSACTIVE";
            }else if (radioButton.value === "radioPcb"){
                mainObject.className = "pcbACTIVE";
            }
        });
    });
});