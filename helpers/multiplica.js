const fs = require('fs');

const createFile = async (base=0, list = false) => {
    if(list == true){
        try {
        
        const header =`Multiplication table of ${base}\n\n-----------------------\n`
    
        header;
    
        let exit = '';
    
        for (let i = 1; i <= 10; i++) {
            
            exit = exit + ` ${base} X ${i} = ${base * i}\n`
        }
        exit = `${header}${exit}`;
        console.log(exit);
    
        fs.writeFile(`table-${base}.txt`, exit, (err) => {
           
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

