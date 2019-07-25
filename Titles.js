var random = require("random");
var titleParts = require("./titleParts.json");

getTitle = () => {
    var s = [];
    titleParts.forEach(element => {
        var x = element.items[random.int(0, element.items.length - 1)];    
        if(x.length > 0)
            s.push(x);
    });

    return s.join(' ');
}

exports.getRandomTitle = (id) =>  {
    return new Promise((resolve, reject) => {
        var title = getTitle();
        resolve({
            id,
            title
        });
    });
}

exports.getSome = () =>  {
    return new Promise((resolve, reject) => {
        var arr = [];
        for(i = 1; i < 11; i++) {
            arr.push({ id: i, title: getTitle() });
        }
       
        resolve(arr);
    });
}