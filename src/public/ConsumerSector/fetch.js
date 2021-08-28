var da='[{"Name":"BATA INDIA","price":"1710","dayL":"1701.3","dayH":"1732.55","bidQ":"1709.3","PE":"-379.4098069669403"},{"Name":"RAJESH EXPORTS","price":"590","dayL":"587.2","dayH":"598.9","bidQ":"590","PE":"21.1257519335434"},{"Name":"ORIENT ELECTRIC LT","price":"321.9","dayL":"318.05","dayH":"323","bidQ":"321.95","PE":"44.88287785833798"},{"Name":"CROMPTON GREAVES C","price":"459.25","dayL":"450.1","dayH":"462.5","bidQ":"459.3","PE":"45.587651379789556"},{"Name":"KAJARIA CERAMICS","price":"1119.35","dayL":"1095.25","dayH":"1120.9","bidQ":"1117.45","PE":"47.02953657409353"},{"Name":"BLUE STAR","price":"781.7","dayL":"775","dayH":"788.6","bidQ":"780.65","PE":"56.69422686393966"},{"Name":"HAVELLS INDIA","price":"1210.35","dayL":"1191","dayH":"1220.85","bidQ":"1210.15","PE":"62.264005350069446"},{"Name":"AMBER ENTERPRISES","price":"2930.75","dayL":"2870.5","dayH":"2970","bidQ":"2927.6","PE":"83.66877926230444"},{"Name":"RELAXO FOOTWEARS","price":"1169.45","dayL":"1166.4","dayH":"1177.6","bidQ":"1169.3","PE":"97.52731215077976"},{"Name":"DIXON TECHNOLOGIES","price":"3892.9","dayL":"3841.45","dayH":"3901.1","bidQ":"3891.7","PE":"131.97613316608468"}]'

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/ConsumerStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
