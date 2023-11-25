let customMergeBal = 500.0163; // 克数
let goldPricePerGram = 454; // 每克黄金价格
let benefitRate = 0.1145141; // 利润率

let response = JSON.parse($response.body);

if (response && response["bizResult"] && response["bizResult"]["data"]) {
    let data = response["bizResult"]["data"];
    let goldList = data["goldList"];
    
    if (goldList) {
        let calculatedAmt = (customMergeBal * goldPricePerGram).toFixed(2);
        let calculatedBenefit = (customMergeBal * goldPricePerGram * benefitRate).toFixed(2);

        for (let i = 0; i < goldList.length; i++) {
            goldList[i]["mergeBal"] = customMergeBal.toString();
            goldList[i]["mergeAmt"] = calculatedAmt;
            goldList[i]["benefit"] = calculatedBenefit;
        }

        // 更新 mergeTotalAmt
        data["mergeTotalAmt"] = calculatedAmt;
    }
}

$done({body: JSON.stringify(response)});
