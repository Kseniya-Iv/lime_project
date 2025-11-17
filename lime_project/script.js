// База данных рекомендаций по типам фигур
const bodyTypeRecommendations = {
    'hourglass': {
        name: 'ПЕСОЧНЫЕ ЧАСЫ',
        description: 'ВАША ФИГУРА СБАЛАНСИРОВАНА - ПЛЕЧИ И БЕДРА ПРИМЕРНО РАВНЫ, А ТАЛИЯ ЯРКО ВЫРАЖЕНА. ЭТО КЛАССИЧЕСКИЙ ИДЕАЛ, КОТОРЫЙ ПОЗВОЛЯЕТ ЭКСПЕРИМЕНТИРОВАТЬ С РАЗНЫМИ СТИЛЯМИ.',
        clothing: [
            { name: 'ПРИТАЛЕННЫЕ ПЛАТЬЯ', description: 'ПОДЧЕРКНУТ ВАШУ ТАЛИЮ И ЖЕНСТВЕННЫЕ ИЗГИБЫ' },
            { name: 'ДЖИНСЫ КЛЕШ', description: 'БАЛАНСИРУЮТ ПРОПОРЦИИ И УДЛИНЯЮТ СИЛУЭТ' },
            { name: 'КОРОТКИЕ КАРДИГАНЫ', description: 'АКЦЕНТИРУЮТ ЛИНИЮ ТАЛИИ' },
            { name: 'ПОЯСНЫЕ РЕМНИ', description: 'ДОПОЛНИТЕЛЬНО ВЫДЕЛЯТ ТАЛИЮ' },
            { name: 'ТОПЫ С V-ОБРАЗНЫМ ВЫРЕЗОМ', description: 'УДЛИНЯЮТ СИЛУЭТ И ПОДЧЕРКИВАЮТ ГРУДЬ' }
        ]
    },
    'rectangle': {
        name: 'ПРЯМОУГОЛЬНИК',
        description: 'ВАШИ ПЛЕЧИ, ТАЛИЯ И БЕДРА ПРИМЕРНО РАВНЫ ПО ШИРИНЕ. СОЗДАВАЙТЕ ИЛЛЮЗИЮ ИЗГИБОВ С ПОМОЩЬЮ ПРАВИЛЬНОГО КРОЯ И АКЦЕНТОВ!',
        clothing: [
            { name: 'ПЛАТЬЯ С ПОЯСАМИ', description: 'СОЗДАДУТ ВИДИМОСТЬ ВЫРАЖЕННОЙ ТАЛИИ' },
            { name: 'ОДЕЖДА С ОБЪЕМНЫМИ ДЕТАЛЯМИ', description: 'ДОБАВЯТ РЕЛЬЕФНОСТИ СИЛУЭТУ' },
            { name: 'ЮБКИ С ДРАПИРОВКОЙ', description: 'СОЗДАДУТ ОБЪЕМ В НУЖНЫХ МЕСТАХ' },
            { name: 'ТОПЫ С РЮШАМИ', description: 'ДОБАВЯТ ЖЕНСТВЕННОСТИ ВЕРХНЕЙ ЧАСТИ' },
            { name: 'БРЮКИ С ЗАВЫШЕННОЙ ТАЛИЕЙ', description: 'ВИЗУАЛЬНО УДЛИНЯТ НОГИ И СОЗДАДУТ ИЗГИБЫ' }
        ]
    },
    'pear': {
        name: 'ГРУША',
        description: 'ВАШИ БЕДРА ШИРЕ ПЛЕЧ, А ТАЛИЯ ВЫРАЖЕНА. БАЛАНСИРУЕМ СИЛУЭТ, АКЦЕНТИРУЯ ВНИМАНИЕ НА ВЕРХНЕЙ ЧАСТИ ТЕЛА!',
        clothing: [
            { name: 'ТОПЫ С ДЕКОРОМ НА ГРУДИ', description: 'УВЕЛИЧАТ ОБЪЕМ ВЕРХА И УРАВНОВЕСЯТ БЕДРА' },
            { name: 'ЮБКИ А-СИЛУЭТА', description: 'СКОРРЕКТИРУЮТ ЛИНИЮ БЕДЕР И СОЗДАДУТ ГАРМОНИЧНЫЙ СИЛУЭТ' },
            { name: 'ЯРКИЕ БЛУЗКИ', description: 'ПРИВЛЕКУТ ВНИМАНИЕ К ВЕРХНЕЙ ЧАСТИ ТЕЛА' },
            { name: 'ПИДЖАКИ С ПЛЕЧАМИ', description: 'РАСШИРЯТ ЛИНИЮ ПЛЕЧ ДЛЯ БАЛАНСА' },
            { name: 'ТЕМНЫЕ БРЮКИ ПРЯМОГО КРОЯ', description: 'ВИЗУАЛЬНО СУЗЯТ НИЗ И СОЗДАДУТ СТРОЙНОСТЬ' }
        ]
    },
    'inverted_triangle': {
        name: 'ПЕРЕВЕРНУТЫЙ ТРЕУГОЛЬНИК',
        description: 'ВАШИ ПЛЕЧИ ШИРЕ БЕДЕР. СОЗДАЕМ БАЛАНС, ДОБАВЛЯЯ ОБЪЕМ В НИЖНЕЙ ЧАСТИ ТЕЛА И СМЯГЧАЯ ЛИНИЮ ПЛЕЧ!',
        clothing: [
            { name: 'ПЫШНЫЕ ЮБКИ', description: 'УРАВНОВЕСЯТ ШИРОКИЕ ПЛЕЧИ И СОЗДАДУТ ГАРМОНИЮ' },
            { name: 'БРЮКИ С РАСКЛЕШЕННЫМ НИЗОМ', description: 'ДОБАВЯТ ОБЪЕМА НОГАМ ДЛЯ БАЛАНСА' },
            { name: 'ТОПЫ С V-ОБРАЗНЫМ ВЫРЕЗОМ', description: 'ВИЗУАЛЬНО СУЗЯТ ПЛЕЧИ И УДЛИНЯТ ШЕЮ' },
            { name: 'ЮБКИ-ТРАПЕЦИИ', description: 'БАЛАНСИРУЮТ СИЛУЭТ ЗА СЧЕТ ОБЪЕМА ВНИЗУ' },
            { name: 'ОДЕЖДА С АКЦЕНТОМ НА БЕДРАХ', description: 'СМЕСТИТ ФОКУС С ПЛЕЧ НА НИЖНЮЮ ЧАСТЬ' }
        ]
    },
    'apple': {
        name: 'ЯБЛОКО',
        description: 'ВАША ТАЛИЯ ШИРЕ ИЛИ РАВНА БЕДРАМ. УДЛИНЯЕМ СИЛУЭТ И СОЗДАЕМ ВЕРТИКАЛЬНЫЕ ЛИНИИ, ЧТОБЫ ВИЗУАЛЬНО ВЫТЯНУТЬ ФИГУРУ!',
        clothing: [
            { name: 'ПЛАТЬЯ С ЗАПАХОМ', description: 'СОЗДАДУТ ВЕРТИКАЛЬНЫЕ ЛИНИИ И СКОРРЕКТИРУЮТ MIDSECTION' },
            { name: 'ТОПЫ А-СИЛУЭТА', description: 'СВОБОДНЫЙ КРОЙ СКРОЕТ ОБЛАСТЬ ТАЛИИ' },
            { name: 'БРЮКИ С ВЫСОКОЙ ТАЛИЕЙ', description: 'УДЛИНЯТ НОГИ И СОЗДАДУТ СТРОЙНЫЙ СИЛУЭТ' },
            { name: 'ОДЕЖДА С V-ОБРАЗНЫМ ВЫРЕЗОМ', description: 'УДЛИНИТ ТОРС И ОТВЛЕЧЕТ ВНИМАНИЕ' },
            { name: 'МНОГОСЛОЙНЫЕ НАРЯДЫ', description: 'СОЗДАДУТ СТРОЙНЫЙ СИЛУЭТ ЗА СЧЕТ ВЕРТИКАЛЬНЫХ ЛИНИЙ' }
        ]
    }
};

// База данных товаров
const productsDatabase = [
    // Для песочных часов
    { id: 1, name: 'ПРИТАЛЕННОЕ ПЛАТЬЕ МИДИ ИЗ САТИНА', price: '12 999₽', category: 'ПЛАТЬЯ', bodyTypes: ['hourglass'], image: 'PLATIE_1.jpeg' },
    { id: 2, name: 'ДЖИНСЫ КЛЕШ СО СТРЕЛКАМИ ИЗ ХЛОПКА И ЛИОЦЕЛЛА', price: '5 599₽', category: 'ДЖИНСЫ', bodyTypes: ['hourglass'], image: 'JEANS_1.jpeg' },
    { id: 3, name: 'КАРДИГАН ИЗ ШЕРСТИ И МОХЕРА', price: '8 999₽', category: 'КАРДИГАНЫ', bodyTypes: ['hourglass'], image: 'CARDIGAN_1.jpeg' },
    { id: 4, name: 'КЛАССИЧЕСКАЯ ЮБКА-КАРАНДАШ', price: '2 999₽', category: 'ЮБКИ', bodyTypes: ['hourglass'], image: 'SKIRT_1.jpeg' },
    { id: 5, name: 'ОБЪЕМНЫЙ БЛЕЙЗЕР ПРИТАЛЕННОГО КРОЯ', price: '8 999₽', category: 'КАРДИГАНЫ', bodyTypes: ['hourglass'], image: 'CARDIGAN_2.jpeg' },
    { id: 6, name: 'РУБАШКА ПРИТАЛЕННОГО КРОЯ', price: '4 599₽', category: 'РУБАШКИ', bodyTypes: ['hourglass'], image: 'BLOUSE_1.jpeg' },
    { id: 7, name: 'УКОРОЧЕННЫЙ БЛЕЙЗЕР С ПОКРЫТИЕМ ПОД КОЖУ', price: '7 999₽', category: 'ПИДЖАКИ', bodyTypes: ['hourglass'], image: 'blazer_hourglass.jpeg' },
    { id: 8, name: 'ФУТБОЛКА ХЕНЛИ ИЗ ВИСКОЗЫ И ШЕРСТИ', price: '2 999₽', category: 'ФУТБОЛКИ', bodyTypes: ['hourglass'], image: 'TS_1.jpeg' },
    { id: 9, name: 'КУРТКА-ТРЕНЧ ИЗ ХЛОПКА С ПОЯСОМ', price: '9 999₽', category: 'ПАЛЬТО', bodyTypes: ['hourglass'], image: 'PALTO_1.jpeg' },
    
    // Для груши
    { id: 10, name: 'ТОП НА БРЕТЕЛЯХ С ВОЛАНОМ', price: '3 499₽', category: 'ТОПЫ', bodyTypes: ['pear'], image: 'TOP_2.jpeg' },
    { id: 11, name: 'ЮБКА МИНИ ИЗ БАРХАТА', price: '4 299₽', category: 'ЮБКИ', bodyTypes: ['pear'], image: 'SKIRT_2.jpeg' },
    { id: 12, name: 'ТВИДОВЫЙ БЛЕЙЗЕР С ПОЯСОМ', price: '8 499₽', category: 'ПИДЖАКИ', bodyTypes: ['pear'], image: 'pid_2.jpeg' },
    { id: 13, name: 'БЛУЗА ИЗ ЛИОЦЕЛЛА С ОБОРКАМИ', price: '5 799₽', category: 'БЛУЗЫ', bodyTypes: ['pear'], image: 'SHIRT_2.jpeg' },
    { id: 14, name: 'ПРЯМЫЕ БРЮКИ СО СКЛАДКАМИ', price: '4 899₽', category: 'БРЮКИ', bodyTypes: ['pear'], image: 'TROUSERS_2.jpeg' },
    { id: 15, name: 'БЛЕЙЗЕР С ФИГУРНЫМИ ПУГОВИЦАМИ', price: '7 999₽', category: 'КАРДИГАНЫ', bodyTypes: ['pear'], image: 'blazer_for_pear.jpeg' },
    { id: 16, name: 'ФУТБОЛКА ИЗ ХЛОПКА С ПРИНТОМ', price: '2 499₽', category: 'ФУТБОЛКИ', bodyTypes: ['pear'], image: 'TS_2.jpeg' },
    { id: 35, name: 'УКОРОЧЕННЫЙ БЛЕЙЗЕР ИЗ ТВИДА', price: '8 999₽', category: 'ПИДЖАКИ', bodyTypes: ['pear'], image: 'blazer_for_pear_2.jpeg'},


    // Для яблока
    { id: 17, name: 'СВОБОДНОЕ ПЛАТЬЕ МАКСИ ИЗ АТЛАСА', price: '11 999₽', category: 'ПЛАТЬЯ', bodyTypes: ['apple'], image: 'dress_3.jpeg' },
    { id: 18, name: 'ТОП ИЗ АТЛАСА С ФАКТУРНЫМИ СКЛАДКАМИ', price: '3 799₽', category: 'ТОПЫ', bodyTypes: ['apple'], image: 'top_3.jpeg' },
    { id: 19, name: 'БРЮКИ ИЗ ВИСКОЗЫ И ЛЬНА С ВЫШИВКОЙ', price: '6 299₽', category: 'БРЮКИ', bodyTypes: ['apple'], image: 'TROUSERS_3.jpeg' },
    { id: 20, name: 'ТОП ИЗ АТЛАСНОГО ШЕЛКА С КРУЖЕВОМ', price: '4 599₽', category: 'ТОПЫ', bodyTypes: ['apple'], image: 'TOP_3.1.jpeg' },
    { id: 21, name: 'ПЛАТЬЕ СВОБОДНОГО КРОЯ ИЗ АТЛАСНОГО ШЕЛКА', price: '13 499₽', category: 'ПЛАТЬЯ', bodyTypes: ['apple'], image: 'DRESS_3.1.jpeg' },

    // Для перевернутого треугольника
    { id: 22, name: 'ЮБКА МИДИ ИЗ ХЛОПКА С ОБОРКАМИ', price: '3 899₽', category: 'ЮБКИ', bodyTypes: ['inverted_triangle'], image: 'SKIRT_4.jpeg' },
    { id: 23, name: 'БРЮКИ КЛЕШ В СТИЛЕ БОХО', price: '5 799₽', category: 'БРЮКИ', bodyTypes: ['inverted_triangle'], image: 'TROUSERS_4.jpeg' },
    { id: 24, name: 'ТОП ИЗ ВИСКОЗЫ С ПРИНТОМ', price: '2 999₽', category: 'ТОПЫ', bodyTypes: ['inverted_triangle'], image: 'TOP_4.jpeg' },
    { id: 25, name: 'ПЛАТЬЕ С ЮБКОЙ-ТРАПЕЦИЕЙ', price: '8 499₽', category: 'ПЛАТЬЯ', bodyTypes: ['inverted_triangle'], image: 'DRESS_4.jpeg' },
    { id: 26, name: 'ТОП С БАСКОЙ-БАЛЛОН', price: '3 299₽', category: 'ТОПЫ', bodyTypes: ['inverted_triangle'], image: 'TOP_4.1.jpeg' },
    { id: 27, name: 'ПЛАТЬЕ МИНИ С ЦВЕТОЧНЫМ ПРИНТОМ', price: '6 999₽', category: 'ПЛАТЬЯ', bodyTypes: ['inverted_triangle'], image: 'DRESS_4.1.jpeg' },

    // Для прямоугольника
    { id: 28, name: 'ПЛАТЬЕ МИДИ ПРИТАЛЕННОГО КРОЯ', price: '7 899₽', category: 'ПЛАТЬЯ', bodyTypes: ['rectangle'], image: 'DRESS_5.jpeg' },
    { id: 29, name: 'ДЖИНСЫ КЛЕШ С ВЫСОКОЙ ПОСАДКОЙ', price: '4 599₽', category: 'ДЖИНСЫ', bodyTypes: ['rectangle'], image: 'JEANS_5.jpeg' },
    { id: 30, name: 'ТОП ИЗ ЛИОЦЕЛЛА С ШЕЛКОМ', price: '3 899₽', category: 'ТОПЫ', bodyTypes: ['rectangle'], image: 'TOP_5.jpeg' },
    { id: 31, name: 'ТОП ИЗ ШЕРСТИ С ВОРОТНИКОМ', price: '4 299₽', category: 'ТОПЫ', bodyTypes: ['rectangle'], image: 'TOP_5.1.jpeg' },
    { id: 32, name: 'ТОП С ОТДЕЛКОЙ КРУЖЕВОМ', price: '3 599₽', category: 'ТОПЫ', bodyTypes: ['rectangle'], image: 'TOP_5.2.jpeg' },
    { id: 33, name: 'ЮБКА МАКСИ ИЗ ЛИОЦЕЛЛА', price: '5 999₽', category: 'ЮБКИ', bodyTypes: ['rectangle'], image: 'SKIRT_5.jpeg' },
    { id: 34, name: 'ТОП ИЗ ВИСКОЗЫ С ОБОРКАМИ', price: '2 899₽', category: 'ТОПЫ', bodyTypes: ['rectangle'], image: 'TOP_5.3.jpeg' }
];

// Основная функция расчета типа фигуры
function calculateBodyType() {
    // Получаем значения из полей ввода
    const bust = parseFloat(document.getElementById('bust').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);

    // Проверяем, что все поля заполнены
    if (!bust || !waist || !hips) {
        alert('ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ВСЕ ПОЛЯ');
        return;
    }

    // Проверяем корректность значений
    if (bust < 50 || bust > 200 || waist < 40 || waist > 180 || hips < 50 || hips > 200) {
        alert('ПОЖАЛУЙСТА, ПРОВЕРЬТЕ ВВЕДЕННЫЕ ЗНАЧЕНИЯ. ОНИ ДОЛЖНЫ БЫТЬ РЕАЛИСТИЧНЫМИ.');
        return;
    }

    // Определяем тип фигуры
    const bodyType = determineBodyType(bust, waist, hips);
    
    // Показываем результат
    displayResult(bodyType);
}

// Функция определения типа фигуры
function determineBodyType(bust, waist, hips) {
    const waistToHipRatio = waist / hips;
    const bustHipDifference = bust - hips;

    // Песочные часы: талия значительно уже груди и бедер
    if (waistToHipRatio < 0.75 && Math.abs(bustHipDifference) <= 5) {
        return 'hourglass';
    }
    
    // Груша: бедра значительно шире груди
    if (hips > bust + 5 && waistToHipRatio < 0.85) {
        return 'pear';
    }
    
    // Перевернутый треугольник: грудь значительно шире бедер
    if (bust > hips + 5 && waistToHipRatio > 0.85) {
        return 'inverted_triangle';
    }
    
    // Яблоко: талия больше или равна бедрам
    if (waist >= hips - 2) {
        return 'apple';
    }
    
    // Прямоугольник: все измерения примерно равны
    return 'rectangle';
}

// Функция отображения результатов
function displayResult(bodyType) {
    const recommendation = bodyTypeRecommendations[bodyType];
    
    // Обновляем текст результата
    document.getElementById('bodyTypeName').textContent = recommendation.name;
    document.getElementById('bodyTypeDescription').textContent = recommendation.description;
    
    // Создаем элементы рекомендованной одежды
    displayClothingRecommendations(recommendation.clothing);
    
    // Показываем секцию с результатом
    document.getElementById('resultSection').classList.remove('hidden');
    
    // Показываем подобранные товары
    displayProducts(bodyType);
    
    // Прокручиваем к результату
    document.getElementById('resultSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Функция отображения рекомендаций по одежде
function displayClothingRecommendations(clothingItems) {
    const clothingGrid = document.getElementById('clothingItems');
    clothingGrid.innerHTML = '';
    
    clothingItems.forEach(item => {
        const clothingItem = document.createElement('div');
        clothingItem.className = 'clothing-item';
        clothingItem.innerHTML = `
            <h5>${item.name}</h5>
            <p>${item.description}</p>
        `;
        clothingGrid.appendChild(clothingItem);
    });
}

// Функция фильтрации товаров по типу фигуры
function filterProductsByBodyType(bodyType) {
    return productsDatabase.filter(product => 
        product.bodyTypes.includes(bodyType)
    );
}

// Функция отображения товаров
function displayProducts(bodyType) {
    const filteredProducts = filterProductsByBodyType(bodyType);
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');
    const productsSection = document.getElementById('productsSection');
    
    // Обновляем счетчик
    productsCount.textContent = `НАЙДЕНО: ${filteredProducts.length} ТОВАРОВ`;
    
    // Очищаем сетку
    productsGrid.innerHTML = '';
    
    // Создаем карточки товаров
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-category">${product.category}</div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Показываем секцию с товарами
    productsSection.classList.remove('hidden');
}

// Обработчик нажатия Enter в полях ввода
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateBodyType();
            }
        });
    });
});