function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function firstOrder () {
        console.log('bogus')
    }
}

function returnsAnAnonymousFunction() {
    return () => {console.log('bogus')}
}