// Изначальные переменные
let screenPrice = 10000;
let percentage = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;

// Получение данных через prompt
const asking = function() {
  titleProject = prompt('Название проекта');
  screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
  responsive = prompt('Нужен респонсив?');
};

// Получение дополнительных услуг и их цен
let service = prompt('Какой дополнительный вид услуги нужен?');
let servicePrice = +prompt('Сколько это будет стоить?');
let serviceSecond = prompt('Какой дополнительный вид услуги нужен?');
let servicePriceSecond = +prompt('Сколько это будет стоить?');

// Функция для расчета суммы всех услуг
const getAllServicePrices = function() {
    return servicePrice + servicePriceSecond;
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
console.log(`Дополнительная услуга: ${service}`);
console.log(`Стоимость дополнительной услуги: ${servicePrice}`);
console.log(`Дополнительная услуга (второе): ${serviceSecond}`);
console.log(`Стоимость дополнительной услуги (второе): ${servicePriceSecond}`);
console.log(`Стоимость проекта с учётом % подрядчику: ${Math.ceil(servicePercentPrice)} рублей`);
getRollbackMessage();
