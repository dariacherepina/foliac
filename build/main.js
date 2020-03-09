let tabs=document.querySelectorAll(".tabs_items")
tabs.forEach(function(item){
    item.addEventListener('click', function(){
        tabs.forEach(function(elem){
            if(elem == item){
                elem.classList.add('active');
            } else{
                elem.classList.remove('active');
            }
        });
    });
});


let chbox = document.querySelector('#hamburger');
let body = document.body;
chbox.addEventListener('change', function(){

    body.style.overflow = chbox.checked ? body.style.overflow = 'hidden' : body.style.overflow = 'unset';

    // if (chbox.checked) {
    //     body.style.overflow = 'hidden';
    //   }
    //   else {
    //     body.style.overflow = 'unset';
    //   }
});
