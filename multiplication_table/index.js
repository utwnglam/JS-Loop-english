for(let i = 1; i <= 9; i++) {
    let oneLine = '';
    for(let j = 1; j <= i; j++) {
        oneLine += i + '*' + j + '=' + (i*j);
        if (j < i) {
            oneLine += ' ';
        }
    }
    console.log(oneLine);
}
