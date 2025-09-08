const calculaterMenu = document.getElementById("calculaterMenuPanel");
const toggleCalculatorBtn = document.querySelector(".toggle-calculator-menu");
function toggleCalculatorMenu() {
    calculaterMenuPanel.style.display = (calculaterMenuPanel.style.display === "block") ? "none" : "block";
}
toggleCalculatorBtn.addEventListener("click", toggleCalculatorMenu);


const historyMenu = document.getElementById("historyPanel");
const toggleHistoryBtn = document.querySelector(".toggle-history");
function toggleHistory() {
    historyPanel.style.display = (historyPanel.style.display === "block") ? "none" : "block";
}
toggleHistoryBtn.addEventListener("click", toggleHistory);


const memoryMenu = document.getElementById("memoryPanel");
const toggleMemoryBtn = document.querySelector(".toggle-memory");
function toggleMemory() {
    memoryPanel.style.display = (memoryPanel.style.display === "block") ? "none" : "block";
}
toggleMemoryBtn.addEventListener("click", toggleMemory);


document.querySelector('.calculator').addEventListener('click', function (e) {
    if (
        e.target.closest('.toggle-calculator-menu') ||
        e.target.closest('.toggle-history') ||
        e.target.closest('.toggle-memory')
    ) return;

    calculaterMenuPanel.style.display = "none";
    historyPanel.style.display = "none";
    memoryPanel.style.display = "none";
});