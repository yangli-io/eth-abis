import path from 'path';
import fs from 'fs';

const abiFolderPath = `${process.cwd()}/abi/`;

async function getAbi(address: string) {
    const filePath = path.join(abiFolderPath, address);

    try {
        await fsPromises.access(filePath, fs.constants.R_OK);
    } catch (e) {
        const abi = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=`;

        const res = await fetch(abi);

        if (res.ok) {
            const data = await res.json();

            const jsonData = JSON.parse(data.result);
            abis[address] = jsonData;
            // happens async
            fsPromises.writeFile(filePath, data.result);
        }
    }
}
