// 自定义变量
let customMergeBal = 500; // 克数
let goldPricePerGram = 454; // 克单价

let response = JSON.parse($response.body);

if (response && response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["goldList"]) {
    let goldList = response["bizResult"]["data"]["goldList"];
    for (let i = 0; i < goldList.length; i++) {
        goldList[i]["mergeBal"] = customMergeBal.toString();
        goldList[i]["mergeAmt"] = (customMergeBal * goldPricePerGram).toFixed(2);
    }
}

$done({body: JSON.stringify(response)});
