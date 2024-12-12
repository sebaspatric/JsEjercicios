const axios = require('axios');

axios.get('https://restcountries.com/v2/all').then(response => {
    //console.log(response.data);
    const {data} = response;
    console.log(data);
});

