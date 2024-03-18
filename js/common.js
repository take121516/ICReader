
async function read_nfc(){
    try {
        const reader = new NDEFReader()
        await reader.scan()
    
        // Scanは起動しているが、NFCタグからデータが読み込めなかった
        reader.addEventListener('error', (event) => {
            console.log(error)
        })
    
        // データを読み込んだ
        reader.addEventListener('reading', ({ serialNumber, message }) => {
            console.log(`serialNumber: ${serialNumber}`);
            message.records.forEach(record => {
                const { data, recordType } = record
                // recordTypeごとにdecode処理を実行する
                console.log("===========================");
                console.log(`record type: ${recordType}`);
                console.log(data);
            });
        })
    } catch (error) {
        // Scan起動失敗
        console.error(error)
    }
}