let response = JSON.parse($response.body);

// 生成随机百分比
function getRandomPercentage() {
    let min = 101.1;
    let max = 110.1;
    return Math.random() * (max - min) + min;
}

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);
    if (content && content["Result"]) {
        let randomPercentage = getRandomPercentage();

        if (content["Result"]["sumBalance"] !== undefined) {
            // 修改 sumBalance 并应用随机百分比
            let originalBalance = 100000.00;
            content["Result"]["sumBalance"] = originalBalance + originalBalance * (randomPercentage / 100);
        }
        if (content["Result"]["accountGold"]) {
            for (let key in content["Result"]["accountGold"]) {
                if (content["Result"]["accountGold"][key]["Balance"] !== undefined) {
                    // 修改 Balance 并应用随机百分比
                    let originalBalance = 100000.00;
                    content["Result"]["accountGold"][key]["Balance"] = originalBalance + originalBalance * (randomPercentage / 100);
                }
            }
        }
    }
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
