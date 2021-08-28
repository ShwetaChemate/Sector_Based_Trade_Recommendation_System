var da='[{"Name":"ASHOK LEYLAND","price":"117.85","dayL":"117.85","dayH":"119.75","bidQ":"118.05","PE":"-1155.3921568627452"},{"Name":"EXIDE INDUSTRIES","price":"158","dayL":"157.8","dayH":"161","bidQ":"158","PE":"15.833249824631729"},{"Name":"AMARA RAJA BATTERI","price":"676.6","dayL":"675.5","dayH":"680","bidQ":"676.5","PE":"16.31265520649999"},{"Name":"HERO MOTOCORP LTD","price":"2664","dayL":"2656.05","dayH":"2680","bidQ":"2664.05","PE":"17.087109623044505"},{"Name":"BAJAJ AUTO LTD","price":"3690.05","dayL":"3670","dayH":"3719.65","bidQ":"3690.55","PE":"18.95609335107339"},{"Name":"MRF LTD","price":"77080.9","dayL":"76751","dayH":"77265","bidQ":"77005","PE":"22.872874239236552"},{"Name":"BALKRISHNA INDS","price":"2249","dayL":"2248.45","dayH":"2293.15","bidQ":"2250","PE":"31.58974070848667"},{"Name":"EICHER MOTORS","price":"2571.6","dayL":"2546.5","dayH":"2579","bidQ":"2573.1","PE":"42.93800404067389"},{"Name":"BOSCH LTD","price":"13750","dayL":"13750","dayH":"13891.35","bidQ":"13755.1","PE":"46.949959879125196"},{"Name":"BHARAT FORGE","price":"728.4","dayL":"724","dayH":"735.65","bidQ":"728.15","PE":"221.4654910307084"}]';


const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempAutomobileStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
