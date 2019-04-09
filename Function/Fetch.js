const fetch = require("node-fetch");

fetch('https://raw.githubusercontent.com/cben/sandbox/master/json/index.json', {}).then((response) => {
    if (response.status === 200) {
        console.log(response);
        return response.json;
    } else {
        throw new Error('unable to fetch data')
    }
}).catch((err) => {
    console.log(err);
});
