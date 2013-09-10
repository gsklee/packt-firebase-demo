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

    /*/
    / / The result will look like the following:
    / / 
    / / {
    / /     "name": "Karen",
    / /
    / /     "gender": "f"
    / / }
    /*/
})();
