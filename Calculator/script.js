const inputValue = document.getElementById("user-input");

// Handle number button clicks
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Handle operation button clicks
const operations = document.querySelectorAll(".operations");
operations.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const lastChar = inputValue.innerText.slice(-1); // Get last character
        const operation = e.target.innerHTML;

        if (operation === "=") {
            // Evaluate expression
            try {
                inputValue.innerText = eval(inputValue.innerText);
            } catch (error) {
                inputValue.innerText = "NaN"; // Handle invalid expression
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0"; // Reset input
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0"; // Delete last character
        } else {
            // Append operation if last character is not an operator
            if (!isNaN(lastChar)) {
                inputValue.innerText += operation;
            }
        }
    });
});
