/*
document.addEventListener('keydown', function(event){
    if( event.key == "Enter"){
        console.log('Apertou o Enter');
    }
});
*/

document.addEventListener('keyup', function(event){
    if( event.key == "Enter"){
        console.log('soltou o Enter');
    }
})