// let titleProject = 'Калькулятор по разработке сайта'
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
// let screenPrice = '10000'
// let percentage = '10'
// let responsive = 'true'

let screenPrice = 10000
let percentage = 10 

let titleProject = prompt ('Название проекта')
console.log(titleProject);

let screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt ('Нужен респонсив?')
console.log(responsive);

let service = prompt ('Какой дополнительный вид услуги нужен?')
console.log(service);

let servicePrice = +prompt ('Сколько это будет стоить?')
console.log(servicePrice);

let serviceSecond = prompt ('Какой дополнительный вид услуги нужен?')
console.log(serviceSecond);

let servicePriceSecond = +prompt ('Сколько это будет стоить?')
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond
console.log(fullPrice);

let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчику: ')

// new variables

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта с учётом % подрядчику');

//Предоставление скидки

if(fullPrice > 50000) {
    console.log ('Делаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log ("Делаем скидку 5%");
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log ('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверка на строгое равенство')
}