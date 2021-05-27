console.log('client side javascript');

const link  = document.querySelector('#login');

link.addEventListener('click',(e)=>{

    // fetch('../src/index.js/spotify')

    fetch('/spotify').then((result)=>{

        console.log(result);

    }).catch((error)=>{
        console.log(error);
    });
});

