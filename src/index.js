require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const axios = require('axios');

const app = express();

const viewsPath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(path.join(__dirname, '../public')));

app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

const redirect_uri = {uri:'http%3A%2F%2Flocalhost%3A3000%2F'};

app.get('/',(req, res)=>{
    
    res.render('home', {
        client_id: process.env.CLIENT_ID
    });

   const code = req.url.substring(7,169)

});

app.get('/:code', (req, res)=>{

    // console.log(req.url);
});


app.listen(4000, ()=>{
    console.log('server is listenging on port 4000');    
});

const callApi = (auth_code) => {

    const url = 'https://accounts.spotify.com/api/token';

    axios.get(url,{
        Header: {'content-type': 'application/x-www-form-urlencoded'},
        grant_type:"authorization_code",
        code: auth_code,
        redirect_uri: 'http%3A%2F%2Flocalhost%3A4000',
        //authorization
    }).then((response) =>{
        console.log(response);
    })
}


// const options = {
//     Headers: {'content-type' : 'application/x-www-form-urlencoded'},
//     grant_type:"authorization_code",
//     code: "AQDsX5w7Jy8Bf9HmgT73hsxX-YvxDfceMrp9WD23VLOpwR35_XxNxWFFZ_uSNp7Gep8qFmhnFywfQFz7QK1cNNzaoDeFqOiJGxnzZAqDYydDQv-fi2XXAZE1DcUrImMPaY5p7dAgx9gcmeGahIkhLvj4YedffA",
//     redirect_uri: "https://google.com",
//     authorization: "MDYyZjY4YzNiMmNkNGQxM2FjODE3NDAxNjA5ZjRhZDY6NjU5MDkwZWYzYTE1NDU0Mzk1MWE5NzU4ZjlmYjk1YWQ="
// };


// request.post({url:'https://accounts.spotify.com/api/token', json: true}, options,(error, response)=>{

//     if(error) 
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(response);
//     }

// });

// https://accounts.spotify.com/authorize?client_id=062f68c3b2cd4d13ac817401609f4ad6&response_type=code&redirect_uri=https://google.com

//curl -H "Authorization: Basic MDYyZjY4YzNiMmNkNGQxM2FjODE3NDAxNjA5ZjRhZDY6NjU5MDkwZWYzYTE1NDU0Mzk1MWE5NzU4ZjlmYjk1YWQ=" -d grant_type=authorization_code -d code=AQB8-RQHtru5NE185mUnMCrU1g_o_nQfQIsGG05LY0yyllHHQ2amxJwlXdLjwrodZ-Ltof9B54KULAEnC7Kd5bkFUi-s9BUu-Qy0RixoyUSDjGA6ETMjd5klJkCXgegWVCWT7dZxzbr0gs5JUpTaFQcEb-PxeA -d redirect_uri=https%3A%2F%2Fgoogle.com https://accounts.spotify.com/api/token

//{"access_token":"BQCWp0AC-GiMIBjerHcdSU3apW6um2zzqrPIhZczKOgHJIMAsnHx34OzfzX2Efk8mbRsq4_5h5XlVE4SYprYrXteH_XiIE1-99K0O4XkybpNfkEGpSO7gGWLrt5P0jHiovgm_vluNu6jCiPJYgYE",
//"token_type":"Bearer",
//"expires_in":3600,
//"refresh_token":"AQCPI7NbfazaQg6K6vgCqslUEhqXVLrBkkS57B76mL-pMaOnZF6ch8_C8ivH4tK78KWRL4y4xfal9Q1VevjGcWL012NBiTQFL4UyIBfHoe7XLWeU65mUKytdQG2gaAMt68M"}