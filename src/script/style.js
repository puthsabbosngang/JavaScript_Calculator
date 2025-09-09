const toggleContainer = document.getElementById("toggleContainerPanel")
const calculatorMenu = document.getElementById("calculatorMenuPanel");
const toggleCalculatorBtn = document.querySelector(".toggle-calculator-menu");
function toggleCalculatorMenu() {
    toggleContainer.style.display = (toggleContainer.style.display === "block") ? "none" : "block";
    calculatorMenu.style.display = (calculatorMenu.style.display === "block") ? "none" : "block";
}
toggleCalculatorBtn.addEventListener("click", toggleCalculatorMenu);


const historyMenu = document.getElementById("historyPanel");
const toggleHistoryBtn = document.querySelector(".toggle-history");
function toggleHistory() {
    toggleContainer.style.display = (toggleContainer.style.display === "block") ? "none" : "block";
    historyMenu.style.display = (historyMenu.style.display === "block") ? "none" : "block";
}
toggleHistoryBtn.addEventListener("click", toggleHistory);


const memoryMenu = document.getElementById("memoryPanel");
const toggleMemoryBtn = document.querySelector(".toggle-memory");
function toggleMemory() {
    toggleContainer.style.display = (toggleContainer.style.display === "block") ? "none" : "block";
    memoryMenu.style.display = (memoryMenu.style.display === "block") ? "none" : "block";
}
toggleMemoryBtn.addEventListener("click", toggleMemory);


document.querySelector('.toggle-container').addEventListener('click', function (e) {
    if (
        e.target.closest('.toggle-calculator-menu') ||
        e.target.closest('.toggle-history') ||
        e.target.closest('.toggle-memory')
    ) return;

    calculatorMenu.style.display = "none";
    historyMenu.style.display = "none";
    memoryMenu.style.display = "none";
    toggleContainer.style.display = "none";
});