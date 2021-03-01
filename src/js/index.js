import '../styles/styles.scss';
import '../index.html';
import '../img/average.svg';
import '../img/average2.svg';
import '../img/average3.svg';
import '../img/average4.svg';
import '../img/average5.svg';

const slideValue = document.querySelector('.capital__slider-value span')
const showSlide = document.querySelector('.capital__slider-value')
const inputSlider = document.querySelector('input')
const slider = document.querySelector('.capital__slider-line')
const progress = document.querySelector('.capital__slider-progress')
const capitalBlock = document.querySelectorAll('.capital__block--cap')
const price = document.querySelector('.price')
const mattress = document.getElementById('mattress')
const deposit = document.getElementById('deposit')
const alfabank = document.getElementById('alfabank')

const tabsBtn = document.querySelectorAll('.tabsBtn')
const tabsItems = document.querySelectorAll('.capital__block-profit-block')

const select = document.querySelector('.capital__block-select')
const inner = document.querySelector('.capital__block-stats__inner')

const chart = document.querySelector('.svg-1')
const chart2 = document.querySelector('.svg-2')

const coin = document.getElementById('mattress-money')
const coin2 = document.getElementById('deposit-money')
const coin3 = document.getElementById('capital-money')

const icon = document.querySelector('.capital__block-stats__average-picture-icon')
const averageValue = document.querySelector('.average')

const deleteBg = document.querySelector('.delete-bg')

// Рассчет 1-й категории без процентов
const noDeposit = function (value, year) {
    const month = 12;
    let result = value * year * month;
    return '~' + result.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
}

function coins(placeWrite, placePrice, maxCoins, initCoin) {
    const max = 2797444;
    const step = max / 10;
    console.log(step)
    const currentValue = parseInt(placePrice.textContent.replace(/[^\d]/g, '')); // значение текущего вклада

    let needSteps = Math.round(currentValue / step); // сколько надо шагов

    while (placeWrite.getElementsByTagName('span').length > initCoin) {
        placeWrite.lastChild.remove();
    }

    let isValid = true;
    for (let index = initCoin; isValid && index < needSteps; index++) {
        if (index > maxCoins - initCoin) { // если цикл больше максимального значение коинов - цикл фор не выполняется
            isValid = false;
        }
        placeWrite.insertAdjacentHTML('beforeend', '<span class="span"></span>');
    }
}

// Рассчет 2-й категории вкладов под 6,98 процентов годовых
const procent = function (value, year) {
    let intermin = 0;
    let result = 0;
    for (let i = 1; i <= year; i++) {
        if (intermin <= 0) {
            intermin += value * 12 + value * 12 * 0.0698 + result; // 2721
            result = intermin + value * 12 // 5265

        } else if (intermin > 0) {
            intermin = (intermin + value * 12) * 0.0698 + result; // 5629
            result = intermin + value * 12 // 8173
        }
    }
    const final = Math.floor(intermin)
    return '~' + final.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
}
// Рассчет 3-й категории вкладов под 23,7% годовых
const alfa = function (value, year) {
    let intermin = 0;
    let result = 0;
    for (let i = 1; i <= year; i++) {
        if (intermin <= 0) {
            intermin += value * 12 + value * 12 * 0.2373 + result;
            result = intermin + value * 12

        } else if (intermin > 0) {
            intermin = (intermin + value * 12) * 0.2373 + result;
            result = intermin + value * 12
        }
    }
    const final = Math.floor(intermin)
    return 'до ~' + final.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ₽';
}

inputSlider.addEventListener('input', () => {
    let value = inputSlider.value;
    const newValue = Number((value - inputSlider.min) * 100 / (inputSlider.max - inputSlider.min))
    const newPosition = 6 - (newValue * 0.2);
    showSlide.style.left = `calc(${newValue}% + (${newPosition}px))`;
    slideValue.textContent = value + " ₽";
    progress.style.width = (value / 500) + "%";
    showSlide.classList.add('show');
});
// Можно оптимизировать 
inputSlider.addEventListener('mouseup', () => {
    let value = inputSlider.value;
    if (value > 0) {
        capitalBlock.forEach(element => {
            element.style.display = "block"
        });
        price.textContent = `${value} ₽`
        mattress.textContent = noDeposit(parseInt(`${value}₽`), 3)
        deposit.textContent = procent(parseInt(`${value} ₽`), 3)
        alfabank.textContent = alfa(parseInt(`${value} ₽`), 3)

        coins(coin, mattress, 3, 1);
        coins(coin2, deposit, 6, 2);
        coins(coin3, alfabank, 8, 3);
    }
    averageValue.textContent = '~ ' + '42 000' + ' ₽'  // Среднее значение 
    average(parseInt(averageValue.textContent.replace(/[^\d]/g, '')))
})

inputSlider.addEventListener('touchend', () => {
    let value = inputSlider.value;
    if (value > 0) {
        capitalBlock.forEach(element => {
            element.style.display = "block"
        });
        price.textContent = `${value} ₽`
        mattress.textContent = noDeposit(parseInt(`${value}₽`), 3)
        deposit.textContent = procent(parseInt(`${value} ₽`), 3)
        alfabank.textContent = alfa(parseInt(`${value} ₽`), 3)

        coins(coin, mattress, 3, 1);
        coins(coin2, deposit, 6, 2);
        coins(coin3, alfabank, 8, 3);
    }
    averageValue.textContent = '~ ' + '42 000' + ' ₽'
    average(parseInt(averageValue.textContent.replace(/[^\d]/g, '')))
})

// Нажатие на знаки вопроса
tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        tabsItems.forEach(function (item) {
            item.classList.remove('show')
        })
        currentTab.classList.add('show')
        if (currentTab.classList.contains('show')) {
            deleteBg.addEventListener('click', () => {
                tabsItems.forEach(function (item) {
                    item.classList.remove('show')
                })
            })
        }
    })
})



select.addEventListener('click', () => {
    inner.classList.toggle('show')
    select.scrollIntoView({
        behavior: 'smooth'
    })
    select.innerHTML = `
    <div> Свернуть</div>
    <div>
        <svg width="16" height="7" viewBox="0 0 16 7" fill="none"xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>`
    select.classList.add('active')
    if (!(inner.classList.contains('show'))) {
        select.innerHTML = `
        <div> А как в среднем у читателей vc.ru?</div>
        <div>
            <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>`
        select.classList.remove('active')
    }
    chart.style.strokeDashoffset = 198
    chart2.style.strokeDashoffset = 339
})

// Смена картинки при определении того, сколько читатели откладывают
function average(valueAverage) {
    if (valueAverage <= 10000) {
        icon.innerHTML = `<img src="./img/average.svg" alt="">`
    } else if ((11000 <= valueAverage) && (valueAverage <= 20000)) {
        icon.innerHTML = `<img src="./img/average2.svg" alt="">`
    } else if ((21000 <= valueAverage) && (valueAverage <= 30000)) {
        icon.innerHTML = `<img src="./img/average3.svg" alt="">`
    } else if ((31000 <= valueAverage) && (valueAverage <= 40000)) {
        icon.innerHTML = `<img src="./img/average4.svg" alt="">`
    } else if ((41000 <= valueAverage) && (valueAverage <= 50000)) {
        icon.innerHTML = `<img src="./img/average5.svg" alt="">`
    }
}


