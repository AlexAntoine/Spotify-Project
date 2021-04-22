console.log('client side javascript');

const link  = document.querySelector('.login');

link.addEventListener('submit', (e)=>{

    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    console.log(e);

    fetch(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=localhost%3A3000`).then((response)=>{

        response,json().then((data)=>{

        });

    });

    
});

