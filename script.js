// homework June, 10th

function all() {

    // 5 variables
    var name = 'Jonathan';
    var dog = 'pitbull';
    var car = 'chevy';
    var favnumber = 8;
    var favmultiple = 3;

    // split 
    var namesplit = name.split('a');
    console.log(namesplit);

    // concat
    var whoelse = name.concat(' and friends');
    console.log(whoelse);

    // legth
    var doglength = dog.length;
    console.log(doglength);

    // join
    var animals = ['zebra', 'lion', 'giraffe', 'ox', 'mule', 'donkey', 'ape', 'monkey', 'cat', 'mouse'];
    console.log(animals.join());

    // push
    console.log(animals.push('gorilla'));
    console.log(animals);

    // pop
    console.log(animals.pop());

    // reverse: 
    console.log(animals.reverse());

    // splice: 
    console.log(animals.splice());
}
all();