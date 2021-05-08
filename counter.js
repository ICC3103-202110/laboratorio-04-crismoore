
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })

const functionview = counter => {
    console.log("\n Count: "+counter)
    console.log("\n (+)  (-)")
    console.log("\n (q) for quit")

    readline.question("Please choose an option: "
        , function(operation) {
            switch (operation){

                case "+":
                    counter++;
                    break;
                
                case "-":
                    counter--;
                    break;

                case "q":
                    return readline.close();
                    break;
                
                default:
                    console.log("No such option. Please enter another: ");
        }
    functionview(counter);
    });

};

functionview(0);


