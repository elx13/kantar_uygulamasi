// JavaScript source code
var receiptNo = 1;

function calculate() {
    var emptyWeight = parseFloat(document.getElementById("emptyWeight").value);
    var fullWeight = parseFloat(document.getElementById("fullWeight").value);
    var netWeight = fullWeight - emptyWeight;

    if (netWeight > 42) {
        document.getElementById("result").innerHTML = "Aðýrlýk 42 tonu aþýyor!";
    } else {
        var date = new Date().toLocaleDateString();
        var receiptInfo = "Tarih: " + date + '<br>' + "Fiþ Numarasý: " + receiptNo;
        var netWeightInfo = "Net Aðýrlýk: " + netWeight.toFixed(2) + " ton";
        receiptNo++;

        // Store data using localStorage
        localStorage.setItem("receiptInfo", receiptInfo);
        localStorage.setItem("netWeightInfo", netWeightInfo);
        document.getElementById("result").innerHTML = receiptInfo + "<br>" + netWeightInfo;
    }
}

// Show data in localStorage when the window loads
window.onload = function () {
    var receiptInfo = localStorage.getItem("receiptInfo");
    var netWeightInfo = localStorage.getItem("netWeightInfo");

    if (receiptInfo && netWeightInfo) {
        document.getElementById("result").innerHTML = receiptInfo + "<br>" + netWeightInfo;
    }
}