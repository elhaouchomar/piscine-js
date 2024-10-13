let heroesData = [], filteredData = [], currentPage = 1, pageSize = 20, sortColumn = 'name', sortAscending = true;

// Selects DOM elements
const tableBody = document.querySelector('#heroes-table tbody'),
    searchInput = document.querySelector('#search'),
    pageSizeSelect = document.querySelector('#page-size'),
    pageInfo = document.querySelector('#page-info'),
    prevPageButton = document.querySelector('#prev-page'),
    nextPageButton = document.querySelector('#next-page'),
    pagination = document.querySelector('#pagination');

// Fetches superhero data and initializes the display
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(response => response.json())
    .then(data => {
        heroesData = data;
        filteredData = [...heroesData];
        displayPage();
    });

// Filters heroes based on search input and resets the page
searchInput.addEventListener('input', () => {
    filteredData = heroesData.filter(hero => hero.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    currentPage = 1;
    displayPage();
});

// Updates page size and manages pagination display
pageSizeSelect.addEventListener('change', () => {
    pageSize = pageSizeSelect.value === 'all' ? filteredData.length : parseInt(pageSizeSelect.value, 10);
    pagination.style.display = pageSizeSelect.value === 'all' ? 'none' : 'flex';
    currentPage = 1;
    displayPage();
});

// Moves to the previous page if possible
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) displayPage(--currentPage);
});

// Moves to the next page if possible
nextPageButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredData.length / pageSize)) displayPage(++currentPage);
});

// Adds click listeners to table headers for sorting
document.querySelectorAll('#heroes-table th').forEach((header, index) => {
    header.addEventListener('click', () => {
        const sortColumns = ['images.xs', 'name', 'biography.fullName', 'powerstats.intelligence', 'powerstats.strength', 'powerstats.speed', 'powerstats.durability', 'powerstats.power', 'powerstats.combat', 'appearance.race', 'appearance.gender', 'appearance.height', 'appearance.weight', 'biography.placeOfBirth', 'biography.alignment'];
        sortColumn = sortColumns[index];
        
        // Toggle sort direction
        if (index !== 0) { // Prevent sorting on image column
            sortAscending = !sortAscending;
            sortData();
        }
        displayPage();
    });
});

// Sorts the filtered data based on the selected column
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

        // Returns sorted comparison
        return sortAscending ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });
}

// Convert height string to cm
function convertHeightToCm(heightStr) {
    if (!heightStr) return null;
    return heightStr.includes('cm') ? parseInt(heightStr) : Math.round(parseFloat(heightStr) * 100);
}

// Convert weight string to kg
function convertWeightToKg(weightStr) {
    if (!weightStr) return null;
    return weightStr.includes('kg') ? parseInt(weightStr) : Math.round(parseFloat(weightStr) * 1000);
}

// Retrieve nested object value based on dot notation path
function getNestedValue(obj, path) {
    return path.split('.').reduce((o, p) => o?.[p], obj);
}

// Display the current page of heroes in the table
function displayPage() {
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    filteredData.slice(start, end).forEach(hero => {
        const row = document.createElement('tr');
        const height = hero.appearance.height.length === 2 ? hero.appearance.height[1] : hero.appearance.height[0];

        row.innerHTML = `
            <td><img src="${hero.images.xs}" alt="${hero.name}" width="50"></td>
            <td>${hero.name}</td>
            <td>${hero.biography.fullName}</td>
            <td>${hero.powerstats.intelligence}</td>
            <td>${hero.powerstats.strength}</td>
            <td>${hero.powerstats.speed}</td>
            <td>${hero.powerstats.durability}</td>
            <td>${hero.powerstats.power}</td>
            <td>${hero.powerstats.combat}</td>
            <td>${hero.appearance.race}</td>
            <td>${hero.appearance.gender}</td>
            <td>${height}</td>
            <td>${hero.appearance.weight[1]}</td>
            <td>${hero.biography.placeOfBirth}</td>
            <td>${hero.biography.alignment}</td>
        `;

        tableBody.appendChild(row);
    });

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredData.length / pageSize)}`;
}