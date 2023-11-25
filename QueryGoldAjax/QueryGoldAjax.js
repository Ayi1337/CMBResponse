let response = JSON.parse($response.body);

if (response && response["$SysResult$"] && response["$SysResult$"]["$Content$"]) {
    let content = JSON.parse(response["$SysResult$"]["$Content$"]);
    if (content && content["Result"]) {
        if (content["Result"]["sumBalance"] !== undefined) {
            content["Result"]["sumBalance"] = 1000.00;  // 修改 sumBalance
        }
        if (content["Result"]["accountGold"]) {
            for (let key in content["Result"]["accountGold"]) {
                if (content["Result"]["accountGold"][key]["Balance"] !== undefined) {
                    content["Result"]["accountGold"][key]["Balance"] = 1000.00;  // 修改 Balance
                }
            }
        }
    }
    response["$SysResult$"]["$Content$"] = JSON.stringify(content);
}

$done({body: JSON.stringify(response)});
