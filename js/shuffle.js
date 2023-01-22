function shuffleNodes() {
    const list = document.getElementById("numberCards");
    let nodes = list.children;
    nodes = Array.prototype.slice.call(nodes);
    let tempList = nodes.slice(0),
        temp,
        i = tempList.length,
        rand;
    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = tempList[rand];
        tempList[rand] = tempList[i];
        tempList[i] = temp;
    }
    nodes = tempList;
    while (i < nodes.length) {
        list.appendChild(nodes[i]);
        ++i;
    }
}
