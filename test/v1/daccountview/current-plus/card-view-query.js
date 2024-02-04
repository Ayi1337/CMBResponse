let specifiedValue = 51326781.56;

let response = JSON.parse($response.body);

if (response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["bankDepositResult"] && response["bizResult"]["data"]["bankDepositResult"]["data"]) {
    let bankDepositData = response["bizResult"]["data"]["bankDepositResult"]["data"];
    bankDepositData["sumAsset"] = specifiedValue;

    for (let key in bankDepositData["bankDepositDetailVoMap"]) {
        if (bankDepositData["bankDepositDetailVoMap"].hasOwnProperty(key)) {
            bankDepositData["bankDepositDetailVoMap"][key]["current"] = specifiedValue;
        }
    }
}

if (response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["cornucopiaResult"] && response["bizResult"]["data"]["cornucopiaResult"]["data"]) {
    let cornucopiaData = response["bizResult"]["data"]["cornucopiaResult"]["data"];
    cornucopiaData["sumAsset"] = specifiedValue;

    for (let key in cornucopiaData["cornucopiaMap"]) {
        if (cornucopiaData["cornucopiaMap"].hasOwnProperty(key)) {
            cornucopiaData["cornucopiaMap"][key]["asset"] = specifiedValue;
        }
    }
}

$done({body: JSON.stringify(response)});
