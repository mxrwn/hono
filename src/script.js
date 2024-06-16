// Function to get data of the file

import xlsx from 'node-xlsx';

function getData() {
  try {
    const workSheetsFromFile = xlsx.parse(`./data.xlsx`);
    console.log(workSheetsFromFile[0].data);
  } catch (error) {
    console.log(error)
  }
  
}

getData();