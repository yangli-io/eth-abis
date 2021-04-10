import path from 'path';
import fs from 'fs';

const fsPromises = fs.promises;

const abiFolderPath = `${process.cwd()}/abi/`;

export async function getAbi(address: string) {
    const filePath = path.join(abiFolderPath, address);

    try {
        await fsPromises.access(filePath, fs.constants.R_OK);

        const data = await fsPromises.readFile(filePath);

        const jsonData = JSON.parse(data.toString());

        return jsonData;
    } catch (e) {
        const abi = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=`;

        const res = await fetch(abi);

        if (res.ok) {
            const data = await res.json();

            const jsonData = JSON.parse(data.result);
            // happens async
            fsPromises.writeFile(filePath, data.result);

            return jsonData;
        }
    }
}
