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

    /*/
    / / The result will look like the following:
    / / 
    / / {
    / /     "name": "Karen",
    / /
    / /     "gender": "f"
    / /
    / /     "-J36HiIlZjs1DZm1o95u": {
    / /         "name": "Patrick",
    / /         "gender": "m"
    / /     },
    / /
    / /     "-J36HiIm57U0P5hqVZGW": {
    / /         "name": "Plankton",
    / /         "gender": "m"
    / /     }
    / / }
    /*/
})();
