let response = JSON.parse($response.body);

// 定义增加的比例
const increasePercentage = 12.23541 / 100;

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);
    if (content && content["Result"]) {
        if (content["Result"]["sumBalance"] !== undefined) {
            // 修改 sumBalance 并应用固定百分比
            let originalBalance = content["Result"]["sumBalance"];
            content["Result"]["sumBalance"] = originalBalance + originalBalance * increasePercentage;
        }
        if (content["Result"]["accountGold"]) {
            for (let key in content["Result"]["accountGold"]) {
                if (content["Result"]["accountGold"][key]["Balance"] !== undefined) {
                    // 修改 Balance 并应用固定百分比
                    let originalBalance = content["Result"]["accountGold"][key]["Balance"];
                    content["Result"]["accountGold"][key]["Balance"] = originalBalance + originalBalance * increasePercentage;

                    // 同样修改 Income
                    content["Result"]["accountGold"][key]["Income"] = originalBalance * increasePercentage;
                }
            }
        }
    }
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
