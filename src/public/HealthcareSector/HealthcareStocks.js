var da ='[{"Name":"AUROBINDO PHARMA","price":"702.35","dayL":"697.3","dayH":"707.9","bidQ":"702.85","PE":"7.726792668705583"},{"Name":"CADILA HEALTHCARE","price":"541.85","dayL":"540.35","dayH":"547","bidQ":"541.6","PE":"24.46054532322138"},{"Name":"ALKEM LAB LTD","price":"3839.9","dayL":"3791.7","dayH":"3856.35","bidQ":"3837.2","PE":"28.14845765892564"},{"Name":"CIPLA LTD","price":"908","dayL":"906.3","dayH":"916.75","bidQ":"907.7","PE":"28.843710292249046"},{"Name":"DR REDDYS LABS","price":"4518.45","dayL":"4508","dayH":"4554.9","bidQ":"4519.6","PE":"43.8118739879573"},{"Name":"ABBOTT INDIA LTD","price":"19199.85","dayL":"18875.15","dayH":"19351.5","bidQ":"19174.25","PE":"57.78005489148099"},{"Name":"BIOCON LTD","price":"345.05","dayL":"344.2","dayH":"349.5","bidQ":"344.9","PE":"61.03838669732886"},{"Name":"DIVIS LABORATORIE","price":"4856","dayL":"4831","dayH":"4877.2","bidQ":"4854.1","PE":"62.904813720918185"},{"Name":"APOLLO HOSPITALS.","price":"4703","dayL":"4690.45","dayH":"4780","bidQ":"4700.5","PE":"78.30893984048487"},{"Name":"DR LAL PATHLABS LT","price":"3799.2","dayL":"3793.8","dayH":"3855","bidQ":"3800.6","PE":"79.75648157867114"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempHealthcareStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});

