// 定义固定参数
let customMergeBal = 500.0163; // 克数
let goldPricePerGram = 454; // 每克黄金价格
let benefitRate = 0.1145141; // 利润率

let response = JSON.parse($response.body);

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);
    if (content && content["Result"]) {
        let calculatedAmt = (customMergeBal * goldPricePerGram).toFixed(2);
        let calculatedIncome = (customMergeBal * goldPricePerGram * benefitRate).toFixed(2);

        // 更新 sumBalance 和 Balance
        content["Result"]["sumBalance"] = parseFloat(calculatedAmt);
        if (content["Result"]["accountGold"]) {
            for (let key in content["Result"]["accountGold"]) {
                if (content["Result"]["accountGold"][key]["Balance"] !== undefined) {
                    content["Result"]["accountGold"][key]["Balance"] = parseFloat(calculatedAmt);
                }
                // 更新 Income
                if (content["Result"]["accountGold"][key]["Income"] !== undefined) {
                    content["Result"]["accountGold"][key]["Income"] = parseFloat(calculatedIncome);
                }
            }
        }
    }
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
