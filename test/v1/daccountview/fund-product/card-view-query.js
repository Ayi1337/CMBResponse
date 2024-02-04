let specifiedValue = 123456.00;

let response = JSON.parse($response.body);

if (response && response["bizResult"] && response["bizResult"]["data"] && response["bizResult"]["data"]["fundResult"] && response["bizResult"]["data"]["fundResult"]["data"]) {
    response["bizResult"]["data"]["fundResult"]["data"]["sumAsset"] = specifiedValue;
}

$done({body: JSON.stringify(response)});
