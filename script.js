const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let t = input[0];
let idx = 1;
let ans = [];

while (t--) {
    let a = input[idx++];
    let b = input[idx++];
    ans.push((b - (a % b)) % b);
}

console.log(ans.join("\n"));
