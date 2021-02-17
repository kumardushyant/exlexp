import {
    Stream
} from 'stream';

const excel = require('exceljs');


export const getExcel = (response) => {

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');

    worksheet.columns = [{
            header: 'Identifier',
            key: 'identifier',
            width: '20',
            style: {
                numFmt: '@'
            }
        },
        {
            header: 'Product',
            key: 'product_name',
            width: '30',
            style: {
                numFmt: '@'
            }
        }
    ];
    worksheet.properties.defaultRowHeight = '20';
    return new Promise((resolve, reject) => {
        const img1 = workbook.addImage({
            extension: 'jpeg',
            base64: 'data:image/jpeg;base64,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'
        });
        worksheet.addImage(img1, {
            tl: {
                col: 2,
                row: 1
            },
            ext: {
                width: 50,
                height: 50
            }
        });
        worksheet.addRow({
            identifier: "GZ2874",
            product_name: "MEN'S ADIDAS ORIGINALS SUPERSTAR"
        });

        worksheet.columns.forEach((cell, row) => {
            cell.alignment = {
                vertical: "bottom",
                horizontal: "center",
                wrapText: true
            };
        })
        workbook.xlsx.write(response).then(data => {
            resolve();
        }).catch(error => {
            console.error(error);
            reject(error);
        });
    });

}