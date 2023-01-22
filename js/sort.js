function sortList() {
    let numberCardsList = [];
    const list = document.getElementById("numberCards");
    let nodes = list.children;
    nodes = Array.prototype.slice.call(nodes);
    let tempList = nodes.slice(0);
    for (let i = 0, l = tempList.length; i < l; i++) {
        numberCardsList.push(tempList[i].outerHTML);
    }
    numberCardsList.sort();
    for (let i = 0, l = tempList.length; i < l; i++) {
        tempList[i].outerHTML = numberCardsList[i];
    }
}
