let specifiedValue = 1100000.00;

let response = JSON.parse($response.body);

if (response && response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["fundResult"] && response["bizResult"]["data"]["fundResult"]["data"]) {
    let fundData = response["bizResult"]["data"]["fundResult"]["data"];

    fundData["sumAsset"] = specifiedValue;

    if (fundData["fundMap"]) {
        for (let key in fundData["fundMap"]) {
            if (fundData["fundMap"].hasOwnProperty(key)) {
                fundData["fundMap"][key] = specifiedValue;
            }
        }
    }

    response["bizResult"]["data"]["fundResult"]["data"] = fundData;
}

$done({body: JSON.stringify(response)});
