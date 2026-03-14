let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";

    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j === Math.abs(n - i) + 1 || j === (2 * n - 1) - Math.abs(n - i)) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}