touconst fs = require("fs");
const login = require("fca-jiser-main");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('Ayanstate.json', JSON.stringify(api.getAyanState())); //create Ayanstate
});
