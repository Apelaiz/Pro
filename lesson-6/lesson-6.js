// Изначальные переменные
let screenPrice;
let percentage = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;

// Функция для проверки, является ли значение числом
const checkIsNumber = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

// Функция для получения и проверки числового значения через prompt
const getValidatedNumber = function(promptMessage) {
    let value;
    while (true) {
        value = prompt(promptMessage);
        if (value === null) {
            return null; // Пользователь нажал отмену
        }
        value = value.trim(); // Удаление лишних пробелов
        if (checkIsNumber(value)) {
            return parseFloat(value); // Преобразование строки в число
        } else {
            console.log('Введите корректное число.');
        }
    }
};

// Функция для получения и проверки данных через prompt
const asking = function() {
    titleProject = prompt('Название проекта');
    screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
    responsive = prompt('Нужен респонсив?');
};

// Получение значений с проверкой
screenPrice = getValidatedNumber('Введите цену страницы:');

// Функция для получения сумм всех услуг
const getAllServicePrices = function() {
    let num = 0;
    for (let i = 0; i < 2; i++) {
        let serviceDescription = prompt('Какой дополнительный вид услуги нужен?');
        let servicePrice = getValidatedNumber('Сколько это будет стоить?');
        if (servicePrice !== null) {
            num += servicePrice;
        } else {
            console.log('Ошибка при вводе стоимости услуги.');
        }
    }
    return num;
};

// Функция для расчета полной стоимости проекта
function getFullPrice() {
    return screenPrice + allServicePrices;
}

// Функция для расчета итоговой стоимости с учетом процента
const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (percentage / 100));
};

// Функция для изменения названия проекта
const getTitle = function() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
};

// Функция для расчета скидки для клиента
function getRollbackMessage() {
    let fullPrice = getFullPrice();

    if (fullPrice > 50000) {
        console.log('Делаем скидку 10%');
    } else if (fullPrice > 20000 && fullPrice <= 40000) {
        console.log('Делаем скидку 5%');
    } else if (fullPrice <= 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        console.log('Проверка на строгое равенство');
    }
}

// Вызовы функций
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

// Вывод результатов
console.log(`Название проекта: ${newTitle}`);
console.log(`Шаблонные, с уникальным дизайном, с анимациями: ${screensValue}`);
console.log(`Нужен респонсив? ${responsive}`);
console.log(`Стоимость страницы: ${screenPrice}`);
console.log(`Стоимость дополнительных услуг: ${allServicePrices}`);
console.log(`Стоимость проекта с учётом % подрядчику: ${Math.ceil(servicePercentPrice)} рублей`);
getRollbackMessage();
