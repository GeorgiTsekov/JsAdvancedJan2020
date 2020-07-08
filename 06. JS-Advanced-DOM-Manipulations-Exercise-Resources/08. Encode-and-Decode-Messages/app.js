function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName("button")[0];
    let decodeButton = document.getElementsByTagName("button")[1];

    let inputMessage = document.getElementsByTagName('textarea')[0];
    let inputDecodeMessage = document.getElementsByTagName('textarea')[1];
    
    encodeButton.addEventListener('click', (e) => {
        let letters = '';
        Array.from(inputMessage.value).map(x => {
            let letter = String.fromCharCode((x.charCodeAt(0) + 1))
            letters += letter;
        })

        inputDecodeMessage.value = letters;
        inputMessage.value = ''
    })

    decodeButton.addEventListener('click', (e) => {
        let letters = '';
        Array.from(inputDecodeMessage.value).map(x => {
            let letter = String.fromCharCode((x.charCodeAt(0) - 1))
            letters += letter;
        })

        inputDecodeMessage.value = letters;
    })
}