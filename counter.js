
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const functionview = (operation,counter)=> {
    if (operation === '+'){
        return (counter=counter+1);
    }
    else if (operation === '-') {
        return (counter=counter-1);
    }
    else if (operation === 'q') {
        return (false);
    }
}

counter = 0
while (true){

    console.log(counter)
    console.log("(+)   (-)")    
    console.log("(q) for quit")


    readline.question("What do you want to do? ", operation => {
        console.log(functionview(operation, counter))

        readline.close()
    })
}