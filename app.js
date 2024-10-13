let heroesData = [], filteredData = [], currentPage = 1, pageSize = 20, sortColumn = 'name', sortAscending = true;
const tableBody = document.querySelector('#heroes-table tbody'),
    searchInput = document.querySelector('#search'),
    pageSizeSelect = document.querySelector('#page-size'),
    pageInfo = document.querySelector('#page-info'),
    prevPageButton = document.querySelector('#prev-page'),
    nextPageButton = document.querySelector('#next-page');

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(data => {
        heroesData = data;
        filteredData = [...heroesData];
        displayPage();
    });

searchInput.addEventListener('input', () => {
    filteredData = heroesData.filter(hero => hero.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    currentPage = 1;
    displayPage();
});

pageSizeSelect.addEventListener('change', () => {
    pageSize = pageSizeSelect.value === 'all' ? filteredData.length : parseInt(pageSizeSelect.value, 10);
    pagination.style.display = pageSizeSelect.value === 'all' ? 'none' : 'flex';
    currentPage = 1;
    displayPage();
});

prevPageButton.addEventListener('click', () => { if (currentPage > 1) displayPage(--currentPage); });
nextPageButton.addEventListener('click', () => { if (currentPage < Math.ceil(filteredData.length / pageSize)) displayPage(++currentPage); });

document.querySelectorAll('#heroes-table th').forEach((header, index) => {
    header.addEventListener('click', () => {
        const sortColumns = ['images.xs', 'name', 'biography.fullName', 'powerstats', 'appearance.race', 'appearance.gender', 'appearance.height', 'appearance.weight', 'biography.placeOfBirth', 'biography.alignment'];
        sortColumn = sortColumns[index];

        if (sortColumn !== 'powerstats') {
            sortAscending = !sortAscending;
            sortData();
        }
        displayPage();
    });
});

function sortData() {
    filteredData.sort((a, b) => {
        let aValue = getNestedValue(a, sortColumn);
        let bValue = getNestedValue(b, sortColumn);

        if (sortColumn === 'appearance.height') {
            aValue = convertHeightToCm(aValue[1]);
            bValue = convertHeightToCm(bValue[1]);
        }
        if (sortColumn === 'appearance.weight') {
            aValue = convertWeightToKg(aValue[1]);
            bValue = convertWeightToKg(bValue[1]);
        }

        const isANullOrInvalid = aValue === null || aValue === '' || aValue === '-';
        const isBNullOrInvalid = bValue === null || bValue === '' || bValue === '-';

        if (isANullOrInvalid && isBNullOrInvalid) return 0;
        if (isANullOrInvalid) return 1;
        if (isBNullOrInvalid) return -1;

        return sortAscending ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
}

function convertHeightToCm(heightStr) {
    if (!heightStr) return null;
    return heightStr.includes('cm') ? parseInt(heightStr) : Math.round(parseFloat(heightStr) * 100);
}

function convertWeightToKg(weightStr) {
    if (!weightStr) return null;
    return weightStr.includes('kg') ? parseInt(weightStr) : Math.round(parseFloat(weightStr) * 1000);
}

function displayPage() {
    tableBody.innerHTML = '';
    filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize).forEach(hero => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${hero.images.xs}" alt="${hero.name}"></td>
            <td>${hero.name}</td>
            <td>${hero.biography.fullName}</td>
            <td>${Object.entries(hero.powerstats)
                .map(([k, v]) => `${k}: ${v}`)
                .join(' | ')}</td>
            <td>${hero.appearance.race}</td>
            <td>${hero.appearance.gender}</td>
            <td>${hero.appearance.height[1]}</td>
            <td>${hero.appearance.weight[1]}</td>
            <td>${hero.biography.placeOfBirth}</td>
            <td>${hero.biography.alignment}</td>
        `;
        tableBody.appendChild(row);
    });
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredData.length / pageSize)}`;
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((o, p) => o?.[p], obj);
}
