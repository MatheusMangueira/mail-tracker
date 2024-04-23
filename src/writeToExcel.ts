import ExcelJS from 'exceljs';
import fs from 'fs';

async function writeToExcel(dynamicPart: string, date: string) {
  const fileName = 'emails.xlsx';
  const workbook = new ExcelJS.Workbook();

  let sheet;
  if (fs.existsSync(fileName)) {
    await workbook.xlsx.readFile(fileName);
    sheet = workbook.getWorksheet('Emails');
  } else {
    sheet = workbook.addWorksheet('Emails');
    sheet.addRow(['Empresa', 'Data']);
  }

  sheet?.addRow([dynamicPart, date]);

  await workbook.xlsx.writeFile(fileName);
  console.log(`Dados atualizados em ${fileName}`);
}

export default writeToExcel;