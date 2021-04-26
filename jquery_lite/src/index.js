const DOMNodeCollection = require("./dom_node_collection");

window.$1 = function(arg) {
    let arr = [];
    if (typeof arg == "string") {
        arr = Array.from(document.querySelectorAll(arg));
    } else if (arg instanceof HTMLElement) {
        arr = [arg];
    }
    let nodeCollection = new DOMNodeCollection(arr);
    return nodeCollection;
}