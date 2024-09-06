// let screenPrice = 10000
// let percentage = 10 
// let allServicePrices;
// let newTitle = '';
// let titleProject;
// let screensValue;
// let responsive;


const asking = function() {
  titleProject = prompt ('Название проекта')
  screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями')
  responsive = prompt ('Нужен респонсив?')
}



let service = prompt ('Какой дополнительный вид услуги нужен?')
let servicePrice = +prompt ('Сколько это будет стоить?')
let serviceSecond = prompt ('Какой дополнительный вид услуги нужен?')
let servicePriceSecond = +prompt ('Сколько это будет стоить?')


const getAllServicePrices = function() {
    return servicePrice + serviceSecond
}


function getFullPrice() {
    return screenPrice + allServicePrices
}


const getServicePercentPices = function () {
    return fullPrice - (fullPrice * (percentage / 100))
}


const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}



//Предоставление скидки
function getRollbackMessage(fullPrice) {
    if (fullPrice > 50000) {
        let percentage = 10;
        console.log('Ваша скидка', percentage.toString(), 'процентов');
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        let percentage = 5;
        console.log('Ваша скидка', percentage.toString(), 'процентов');
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что то пошло не так');
    } else if (fullPrice === 0) {
        console.log('Значение стоимости: 0');
    } else if (fullPrice === 20000) {
        console.log('Скидка не применяется к данной сумме');
    } else if (fullPrice === 50000) {
        console.log('Скидка не применяется к данной сумме');
    } else {
        console.log('Что то пошло не так');
    }
}


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getAllServicePrices();
getRollbackMessage(fullPrice);

newTitle = getTitle();


console.log(service);
console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(servicePrice);
console.log(serviceSecond);
console.log(servicePriceSecond);
console.log(Math.ceil(servicePercentPrice));
console.log(getRollbackMessag);