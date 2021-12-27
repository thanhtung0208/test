function DbRequest(sql) {
    let xhr = new XMLHttpRequest();

    var sendData = JSON.stringify({"sql": sql, "mode": 'bcp'});

    xhr.open("POST", 'http://localhost:5000/data', false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(sendData);

    if (xhr.status == 200) {
       
        console.log("xhr done successfully");
        let resp = xhr.responseText;
        let respJson = JSON.parse(resp);
        console.log(respJson);
        return resp;
    }
    console.log("request sent succesfully");
    return null;
}

DbRequest('SELECT * FROM list');