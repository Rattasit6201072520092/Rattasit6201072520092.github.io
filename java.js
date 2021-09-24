document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('select').onchange = function() {
        document.querySelector('h5').style.color = this.value;
    }
});
// #########################################################
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('form').onsubmit = function () {
        const name =  document.querySelector('#fname').value;
        console.log(name);
        alert(`HAVE A NICE DAY, ${name}!`);
    };
    return false;
});

//########################### TASKS ############################
let counter = 0;
function count(){
    counter++;
    document.querySelector('h4').innerHTML = counter;
    
    if(counter % 10 === 0){
        alert(`Count is now ${counter}`);
    }
}