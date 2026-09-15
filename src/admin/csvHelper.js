// src/admin/csvHelper.js

/**
 * Converts an array of plain objects into a CSV string and triggers a download.
 * @param {Array<Object>} rows - Array of objects (all with the same keys)
 * @param {string} filename - Desired filename without extension
 */
export const downloadCSV = (rows, filename = 'export') => {
  if (!rows || rows.length === 0) {
    alert('No data to export.');
    return;
  }

  // Get headers from the first row
  const headers = Object.keys(rows[0]);

  // Escape a cell value (handle commas, quotes, newlines)
  const escapeCell = (value) => {
    if (value === null || value === undefined) return '';
    const str = String(value).replace(/"/g, '""');
    return /[",\n\r]/.test(str) ? `"${str}"` : str;
  };

  // Build CSV
  const csvLines = [
    headers.join(','),
    ...rows.map((row) => headers.map((h) => escapeCell(row[h])).join(',')),
  ];

  const csvString = csvLines.join('\r\n');

  // Add BOM so Excel opens UTF-8 correctly
  const blob = new Blob(['\uFEFF' + csvString], {
    type: 'text/csv;charset=utf-8;',
  });

  // Trigger download
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};