
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })

function update(msg,counter) {

    switch (msg){

        case "+":
            counter++;
            return (counter++);
  
        case "-":
            counter--;
            return (counter--);

        default:
            console.log("No such option. Please enter another: ");

    }
}

const currentView = counter => {
    console.log("\n Count: "+counter)
}

function app(counter) {
    console.clear()
    currentView(counter)
    console.log("\n (+)  (-)")
    console.log("\n (q) for quit")

    readline.question("\n Please choose an option: ", message => {
        if (message==='q'){
            readline.close();
        } 
            
        else {
            let count = update(message,counter);
            app(count);
        
        }
    });
    
};

app(0);