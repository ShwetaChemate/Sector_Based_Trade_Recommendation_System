var da='[{"Name":"HINDUSTAN PETROL","price":"255.9","dayL":"255","dayH":"258.45","bidQ":"255.8","PE":"3.6520622234907956"},{"Name":"INDIAN OIL CORP","price":"104.9","dayL":"104.8","dayH":"106.05","bidQ":"104.85","PE":"3.7758260744366856"},{"Name":"BHARAT PETROL CORP","price":"459.9","dayL":"458.6","dayH":"462","bidQ":"459.85","PE":"5.4633578445930695"},{"Name":"OIL & NATURAL GAS","price":"114.9","dayL":"114.6","dayH":"116.25","bidQ":"114.95","PE":"6.49409370937659"},{"Name":"NTPC LTD","price":"112.05","dayL":"112.05","dayH":"114.5","bidQ":"112.05","PE":"7.237904528131257"},{"Name":"POWER GRID CORP","price":"172.4","dayL":"172.05","dayH":"175.4","bidQ":"172.5","PE":"7.523456251363736"},{"Name":"GAIL INDIA LTD","price":"142.05","dayL":"141.95","dayH":"145.3","bidQ":"142","PE":"8.373614713510966"},{"Name":"RELIANCE INDS","price":"2233.85","dayL":"2205","dayH":"2244.9","bidQ":"2233.85","PE":"30.495413094523016"},{"Name":"TATA POWER CO LTD","price":"125.1","dayL":"125.05","dayH":"126.6","bidQ":"125.05","PE":"33.297844024487624"},{"Name":"ADANI ENTERPRISES","price":"1472","dayL":"1460.4","dayH":"1494.65","bidQ":"1471.3","PE":"138.90723789751817"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempEnergyStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
