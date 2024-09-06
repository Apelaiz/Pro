// let titleProject = 'Калькулятор по разработке сайта'
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
// let screenPrice = '10000'
// let percentage = '10'
// let responsive = 'true'

// Изначальные переменные
let screenPrice = 10000;
let percentage = 10;

// Получение данных через prompt
let titleProject = prompt('Название проекта');
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);

let responsive = prompt('Нужен респонсив?');
console.log(responsive);

let service = prompt('Какой дополнительный вид услуги нужен?');
console.log(service);

let servicePrice = +prompt('Сколько это будет стоить?');
console.log(servicePrice);

let serviceSecond = prompt('Какой дополнительный вид услуги нужен?');
console.log(serviceSecond);

let servicePriceSecond = +prompt('Сколько это будет стоить?');
console.log(servicePriceSecond);

// 1. Функция для расчета суммы всех услуг
const getAllServicePrices = function() {
    return servicePrice + servicePriceSecond;
};

// 2. Функция для расчета полной стоимости проекта
function getFullPrice() {
    const allServicePrices = getAllServicePrices(); // Используем первую функцию
    return screenPrice + allServicePrices;
}

// 3. Функция для изменения названия проекта
function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

// 4. Функция для расчета итоговой стоимости с учетом процента
function getServicePercentPrices() {
    let fullPrice = getFullPrice();
    let percentageResult = fullPrice * (percentage / 100);
    return fullPrice - percentageResult;
}

// 5. Функция для расчета скидки для клиента
function getRollbackMessage() {
    let fullPrice = getFullPrice();

    if (fullPrice > 50000) {
        console.log('Делаем скидку 10%');
    } else if (fullPrice > 20000 && fullPrice < 40000) {
        console.log('Делаем скидку 5%');
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        console.log('Проверка на строгое равенство');
    }
}

// Вывод результатов
console.log(`Полная стоимость проекта: ${getFullPrice()} рублей`);
console.log(`Стоимость проекта с учётом % подрядчику: ${Math.ceil(getServicePercentPrices())} рублей`);
console.log(`Название проекта: ${getTitle()}`);

// Вывод сообщения о скидке
getRollbackMessage();
