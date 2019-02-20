function logatLeast5(n) {
    for (var i = 0; i <= Math.max(5, n); i++) {
        console.log('====================================');
        console.log(i);
        console.log('====================================');
    }
}

function logAtMost5(n) {
    for (var i = 0; i <= Math.min(5, n); i++) {
        console.log('====================================');
        console.log(i);
        console.log('====================================');
    }
}