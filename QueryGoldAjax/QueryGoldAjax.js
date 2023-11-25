let response = JSON.parse($response.body);

// 定义 sumBalance 和 Balance 的增加比例
const balanceIncreasePercentage = 12.23541 / 100;
// 定义 Income 的增加比例
const incomeIncreasePercentage = 11.451419 / 100;
const originalBalance = 100000.00;  // 初始余额

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);
    if (content && content["Result"]) {
        if (content["Result"]["sumBalance"] !== undefined) {
            // 修改 sumBalance 并应用固定百分比，结果限定为两位小数
            content["Result"]["sumBalance"] = parseFloat((originalBalance + originalBalance * balanceIncreasePercentage).toFixed(2));
        }
        if (content["Result"]["accountGold"]) {
            for (let key in content["Result"]["accountGold"]) {
                if (content["Result"]["accountGold"][key]["Balance"] !== undefined) {
                    // 修改 Balance 并应用固定百分比，结果限定为两位小数
                    content["Result"]["accountGold"][key]["Balance"] = parseFloat((originalBalance + originalBalance * balanceIncreasePercentage).toFixed(2));
                }
                // 修改 Income 为 originalBalance * 11.451419%，结果限定为两位小数
                if (content["Result"]["accountGold"][key]["Income"] !== undefined) {
                    content["Result"]["accountGold"][key]["Income"] = parseFloat((originalBalance * incomeIncreasePercentage).toFixed(2));
                }
            }
        }
    }
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
