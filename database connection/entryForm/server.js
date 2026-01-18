const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, email, age } = req.body;

    const fileName = 'data.xlsx';
    let workbook;
    let sheet;

    if (fs.existsSync(fileName)) {
        // Load existing Excel file
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(fileName);
        sheet = workbook.getWorksheet(1); // Load the first worksheet
        sheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Age', key: 'age', width: 10 }
        ];
    }
   // Add new row with form data
   else {
        // Create new Excel file
        workbook = new ExcelJS.Workbook();
        sheet = workbook.addWorksheet('Data');
        sheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Age', key: 'age', width: 10 }
        ];
    }

    // Add new row with form data
    sheet.addRow({ name, email, age });

    // Save Excel file
    await workbook.xlsx.writeFile(fileName);

    // Redirect back to the form page after saving data
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
