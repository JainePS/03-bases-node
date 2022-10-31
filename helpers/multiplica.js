const fs = require('fs');
require('colors');

console.clear();
const createFile = async (base=0, list = false, due) => {
    if(list == true){
        try {
        
        const header =`\n =========================== \n\n Multiplication table of ${base} \n\n ===========================\n\n`;
        const headerConsole =`\n${'==========================='.green}\n\n ${'Multiplication table of'.blue} ${base} \n\n${'==========================='.green}\n\n`;
    
        header;
    
        let exit = '';
        let consoleExit = '';
    
        for (let i = 1; i <= due; i++) {
            
            exit = exit + ` ${base} X ${i} = ${base * i}\n`
            consoleExit = consoleExit + ` ${base} X ${i} = ${base * i}\n`
        }
        exit = `${header}${exit}`;
        consoleExit = `${headerConsole}${consoleExit}`;
        
        console.log(consoleExit);
    
        fs.writeFile(`./exit/table-${base}.txt`, exit, (err) => {
           
            if (err) throw err;
        })
        return `table-${base}`;
    } catch (error) {
        throw error
    }}else
    return ``;
    
};

module.exports = {
    createFile
}

