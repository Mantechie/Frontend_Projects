let expr = "";
let ans = 0;

const expression = document.getElementById("expression");
const result = document.getElementById("result");

function append(value) {
    expr += value;
    updateDisplay();
}

function updateDisplay() {
    expression.innerText = expr || "0";
}

function clearAll() {
    expr = "";
    result.innerText = "0";
    updateDisplay();
}

function del() {
    expr = expr.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let safeExpr = expr.replace(/×/g, "*").replace(/÷/g, "/");
        ans = eval(safeExpr);
        result.innerText = ans;
        expr = ans.toString();
    } catch {
        result.innerText = "Error";
    }
}

function sqrt() {
    try {
        ans = Math.sqrt(eval(expr));
        result.innerText = ans;
        expr = ans.toString();
    } catch {
        result.innerText = "Error";
    }
}

function toggleSign() {
    if (expr) {
        expr = (-eval(expr)).toString();
        updateDisplay();
    }
}

function useAns() {
    expr += ans;
    updateDisplay();
}
