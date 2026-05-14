const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

// Celsius -> Fahrenheit
celsiusInput.addEventListener("input", () => {
    const celsius = parseFloat(celsiusInput.value);

    // Verifica se o campo está vazio
    if (isNaN(celsius)) {
        fahrenheitInput.value = "";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;

    // Exibe com 2 casas decimais
    fahrenheitInput.value = fahrenheit.toFixed(2);
});

// Fahrenheit -> Celsius
fahrenheitInput.addEventListener("input", () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);

    // Verifica se o campo está vazio
    if (isNaN(fahrenheit)) {
        celsiusInput.value = "";
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;

    // Exibe com 2 casas decimais
    celsiusInput.value = celsius.toFixed(2);
});