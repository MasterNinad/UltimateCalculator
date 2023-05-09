function clearText(id, id2, id2text) {
    document.getElementById(id).value = "";
    if (id2 != undefined && id2text != undefined) {
        document.getElementById(id2).innerText = id2text;
    }
};