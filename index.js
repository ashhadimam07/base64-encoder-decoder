const chalk = require('chalk');
const readLineSync= require('readline-sync');

function base64Encode(str)
{
  const base64 = Buffer.from(str).toString('base64');
  return base64;
}

function base64Decode(encoded_str)
{
  const decode = Buffer.from(encoded_str, 'base64').toString('ascii');
  return decode;
}

function base64EncodeDecode()
{

  console.log(chalk.yellowBright.bold("------BASE64 ENCODER DECODER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] BASE64 Encoder \n\n[2] BASE64 Decoder\n\n\[3] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
  
  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----BASE64 ENCODER----\n\n"));
        const str = readLineSync.question(chalk.yellowBright.bold("Enter the string to encode?\n"));
        const base64 = base64Encode(str);
        console.log(chalk.red("The encoded string is: ",base64 +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----BASE64 DECODER----\n\n"));
        const encoded_str = readLineSync.question(chalk.yellowBright.bold("Enter the encoded string to decode ?\n"));
        const decode = base64Decode(encoded_str);
        console.log(chalk.red("The decoded string is: ",decode+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!==3)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
  
}



base64EncodeDecode();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));
