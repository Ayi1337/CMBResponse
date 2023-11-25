let specifiedValue = 1100000.00; // 指定值，您可以根据需要修改这个数值

let response = JSON.parse($response.body);

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);

    // 修改 DicRmbDeposit 中的 Balance 和 AvlBal
    if (content["DicRmbDeposit"]) {
        for (let key in content["DicRmbDeposit"]) {
            if (content["DicRmbDeposit"].hasOwnProperty(key)) {
                content["DicRmbDeposit"][key]["Balance"] = specifiedValue;
                content["DicRmbDeposit"][key]["AvlBal"] = specifiedValue;
            }
        }
    }

    // 修改其他相关字段
    content["RmbBalance"] = specifiedValue;
    content["BankDepositSumBalance"] = specifiedValue;
    content["CurrentBalance"] = specifiedValue;

    // 重新构造响应体
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
