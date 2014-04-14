'use strict';

(function() {
    var Data = new Firebase('https://packt-firebase-demo.firebaseio.com/');

    Data.set({
        name: 'Sandy',
        gender: 'f'
    });

    Data.update({
        name: 'Karen'
    });

    Data.push({
        name: 'Patrick',
        gender: 'm'
    });

    Data.push({
        name: 'Plankton',
        gender: 'm'
    });

    Data.set({
        name: 'Squidward',
        gender: 'm'
    });

    Data.on('value', function(data) {
        console.log('Value: ' + JSON.stringify(data.val()));

        /*/
        / / The console logs will look like the following:
        / /
        / / Value: {"gender":"m","name":"Squidward"}
        / /
        / / Value: {"gender":"f","name":"Sandy"}
        / /
        / / Value: {"gender":"f","name":"Karen"}
        / /
        / / Value: {"-J36HiIlZjs1DZm1o95u":{"gender":"m","name":"Patrick"},"gender":"f","name":"Karen"}
        / /
        / / Value: {"-J36HiIlZjs1DZm1o95u":{"gender":"m","name":"Patrick"},"-J36HiIm57U0P5hqVZGW":{"gender":"m","name":"Plankton"},"gender":"f","name":"Karen"}
        / /
        / / Value: {"gender":"m","name":"Squidward"}
        /*/
    });

    Data.on('child_added', function(data) {
        console.log('Child Added: ' + JSON.stringify(data.val()));

        /*/
        / / The console logs will look like the following:
        / /
        / / Child Added: "f"
        / /
        / / Child Added: "Sandy"
        / /
        / / Child Added: {"gender":"m","name":"Patrick"}
        / /
        / / Child Added: {"gender":"m","name":"Plankton"}
        /*/
    });
})();
