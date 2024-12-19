// Function to collect table data
function getTableData() {
    const tables = document.querySelectorAll('table');
    const tableData = [];
  
    tables.forEach(table => {
      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
        const rowData = [];
        const cells = row.querySelectorAll('td, th');
        cells.forEach(cell => {
          rowData.push(cell.textContent.trim());
        });
        if (rowData.length > 0) {
          tableData.push(rowData);
        }
      });
    });
    return tableData;
  }
  
  // Send the table data to the background script or popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTableData') {
      sendResponse({ data: getTableData() });
    }
  });
  