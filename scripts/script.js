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

    /*/
    / / The result will look like the following:
    / / 
    / / {
    / /     "name": "Squidward",
    / /
    / /     "gender": "m"
    / / }
    /*/
})();
