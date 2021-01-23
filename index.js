const chalk = require('chalk');
const emoji = require('node-emoji');
const hexRgb = require('hex-rgb');
const rgbHex = require('rgb-hex');
const readLineSync = require('readline-sync');

const rgbToHex = (red, green, blue) => `#${rgbHex(red, green, blue)}`;

const hexToRgb = hexCode => hexRgb(hexCode);

// I/O logic follows
const promptUser = () => {
    console.log(chalk.yellowBright("Welcome to CLI RGB<-->HEX Converter " + emoji.get('rainbow')));

    const userSelection = readLineSync.question(`\nWhich color code converter would you like to use?\n\n${emoji.get('one')}  ${chalk.yellowBright('RGB-to-HEX')}\n${emoji.get('two')}  ${chalk.yellowBright('HEX-to-RGB')}\n\n`);

    return userSelection;
}

const printSelection = option => console.log(`You selected ${emoji.get(option)}  !`);

const runApp = () => {
    const userSelection = promptUser();
    if (userSelection === '1') {
        printSelection('one');
        // RGB-to-HEX
        const red = Number(readLineSync.question(chalk.redBright("Enter the value of red color: ")));
        const green = Number(readLineSync.question(chalk.greenBright("\nEnter the value of green color: ")));
        const blue = Number(readLineSync.question(chalk.blueBright("\nEnter the value of blue color: ")));

        console.log(`\nThe HEX code of RGB(${red}, ${green}, ${blue}) is ${chalk.yellowBright(rgbToHex(red, green, blue))}.`)

    } else if (userSelection === '2') {
        printSelection('two');
        // HEX-to-RGb
        const hexCode = readLineSync.question(chalk.yellowBright("Enter the HEX code that you wish to convert to RGB:\n"));

        const rgb = hexToRgb(hexCode);
        const rgbString = `{ ${chalk.redBright('red')}: ${rgb.red}, ${chalk.greenBright('green')}: ${rgb.green}, ${chalk.blueBright('blue')}: ${rgb.blue} }`

        console.log(`The RGB version of hex-code ${hexCode} is:\n${rgbString}`)

    } else {
        console.log(chalk.red(`Invalid choice! ${emoji.get('no_entry')}`));
    }
}

runApp();