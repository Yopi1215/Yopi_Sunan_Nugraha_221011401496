// Mengosongkan layar
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Menghapus karakter terakhir
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Menambah karakter ke layar
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Menghitung hasil ekspresi
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
