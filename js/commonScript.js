function clearText(id, id2) {
    document.getElementById(id).value = "";
    if (id2 != undefined) {
        document.getElementById(id2).value = "";
    }
};