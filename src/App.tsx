import React from 'react';

import { saveAs } from 'file-saver';
const ExcelJS = require('exceljs/dist/es5/exceljs.browser');

const App = () => {
  (async function() {
    const wb = new ExcelJS.Workbook();

    const ws = wb.addWorksheet();
    ws.columns = [
      {
        header: 'Id',
        key: 'id',
        width: 10,
      },
      {
        header: 'Name',
        key: 'name',
        width: 32,
      },

      {
        header: 'D.O.B.',
        key: 'dob',
        width: 60,
      },
    ];

    ws.getRow(1).style = {
      font: {
        bold: true,
      },
    };

    console.log(ws.getRow(1));
    console.log(ws.columns);

    ws.addRow({
      id: 1,
      name: 'John Doe',
      dob: new Date(1970, 1, 1).toLocaleString(),
    });
    ws.addRow({
      id: 2,
      name: 'Jane Doe',
      dob: new Date(1965, 1, 7).toLocaleString(),
    });

    const buf = await wb.xlsx.writeBuffer();

    saveAs(new Blob([buf]), 'abc.xlsx');
  })();

  return <h1>Hello world!</h1>;
};

export default App;
