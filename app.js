let heroesData = [];
let filteredData = [];
let currentPage = 1;
let pageSize = 20;
let sortColumn = 'name';
let sortAscending = true;

const tableBody = document.querySelector('#heroes-table tbody');
const searchInput = document.querySelector('#search');
const pageSizeSelect = document.querySelector('#page-size');
const pageInfo = document.querySelector('#page-info');
const prevPageButton = document.querySelector('#prev-page');
const nextPageButton = document.querySelector('#next-page');

// Fetch data
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then(response => response.json())
  .then(data => {
    heroesData = data;
    filteredData = [...heroesData];
    displayPage();
  });

// Search functionality
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  filteredData = heroesData.filter(hero => hero.name.toLowerCase().includes(searchTerm));
  currentPage = 1;
  displayPage();
});

// Change page size
pageSizeSelect.addEventListener('change', () => {
  const selectedValue = pageSizeSelect.value;
  pageSize = selectedValue === 'all' ? filteredData.length : parseInt(selectedValue, 10);
  currentPage = 1;
  displayPage();
});

// Pagination
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage();
  }
});

nextPageButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(filteredData.length / pageSize)) {
    currentPage++;
    displayPage();
  }
});

// Sort functionality
document.querySelectorAll('#heroes-table th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const columns = ['icon', 'name', 'biography.fullName', 'powerstats', 'appearance.race', 'appearance.gender', 'appearance.height', 'appearance.weight', 'biography.placeOfBirth', 'biography.alignment'];
    sortColumn = columns[index];
    sortAscending = !sortAscending;
    sortData();
    displayPage();
  });
});

// Sort data
function sortData() {
  filteredData.sort((a, b) => {
    let aValue = getNestedValue(a, sortColumn);
    let bValue = getNestedValue(b, sortColumn);
    
    // Handle height and weight which are arrays in the format ["cm", "ft"]
    if (sortColumn === 'appearance.height' || sortColumn === 'appearance.weight') {
      aValue = parseInt(aValue[0]) || 0;
      bValue = parseInt(bValue[0]) || 0;
    }

    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    if (aValue < bValue) return sortAscending ? -1 : 1;
    if (aValue > bValue) return sortAscending ? 1 : -1;
    return 0;
  });
}

// Display current page
function displayPage() {
  tableBody.innerHTML = '';
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
  const pageData = filteredData.slice(start, end);
  
  pageData.forEach(hero => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${hero.images.xs}" alt="${hero.name}"></td>
      <td>${hero.name}</td>
      <td>${hero.biography.fullName || 'Unknown'}</td>
      <td>${Object.entries(hero.powerstats).map(([key, value]) => `${key}: ${value}`).join(', ')}</td>
      <td>${hero.appearance.race || 'Unknown'}</td>
      <td>${hero.appearance.gender || 'Unknown'}</td>
      <td>${hero.appearance.height[0]}</td>
      <td>${hero.appearance.weight[0]}</td>
      <td>${hero.biography.placeOfBirth || 'Unknown'}</td>
      <td>${hero.biography.alignment || 'Unknown'}</td>
    `;
    tableBody.appendChild(row);
  });

  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredData.length / pageSize)}`;
}

// Get nested object value
function getNestedValue(obj, path) {
  return path.split('.').reduce((o, p) => o ? o[p] : null, obj);
}
