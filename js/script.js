window.onload = function(){
    
    // accordion-component

    let expandComponent = document.querySelectorAll('.accordion-component .accordion-btn'); 

    let expandCurrent 

    expandComponent.forEach(items => {         
        items.addEventListener('click', function(e){
            
            let expandActiveIs = e.currentTarget
            
            if(expandActiveIs.classList.contains('active')){
                expandActiveIs.classList.remove('active')
                expandCurrent = e.currentTarget; 
                return
            }

            if(expandCurrent) expandCurrent.classList.remove('active')
            expandActiveIs.classList.add('active')
            expandCurrent = e.currentTarget; 

            // expandActiveIs.classList.toggle('active')

        }); 
    })
}
