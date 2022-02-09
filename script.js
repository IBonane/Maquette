$('.accordion-content, .accordion-content2').hide();

var clicks=0;

function showElement(toogleClass,idTriangle) {
    $('.'+toogleClass).click(function(){
        
        if(clicks==0){
            $('#'+idTriangle).text('▼');
            $('.'+toogleClass).css('background-color', 'rgb(49, 163, 230)');
            $('.'+toogleClass).css('color', 'white');

            clicks++;          
        }
        
        else{
            $('#'+idTriangle).text('▶');
            $('.'+toogleClass).css('background-color', 'rgb(201, 194, 194)');
            $('.'+toogleClass).css('color', 'grey');

            clicks--;
        }

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      
    });
}

//bloc de dracaufeu
$(showElement('accordion-toggle', 'tr1'));

//block de pikachu
$(showElement('accordion-toggle2', 'tr2'));