let specifiedValue = 342136.68;

let response = JSON.parse($response.body);

if (response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["goldAccountResult"] && response["bizResult"]["data"]["goldAccountResult"]["data"]) {
    let goldAccountData = response["bizResult"]["data"]["goldAccountResult"]["data"];

    goldAccountData["sumAsset"] = specifiedValue;

    Object.keys(goldAccountData["currentGoldMap"]).forEach(key => {
        goldAccountData["currentGoldMap"][key] = specifiedValue;
    });
}

const modifiedResponse = JSON.stringify(response);

$done({body: modifiedResponse});
