import { fullName } from 'full-name-generator';
import * as fs from 'fs';

const prompt = msg => {
  fs.writeSync(1, String(msg));
  let s = '', buf = Buffer.alloc(1);
  while(buf[0] - 10 && buf[0] - 13)
    s += buf, fs.readSync(0, buf, 0, 1, 0);
  return s.slice(1);
};

// const result = prompt('Input something: ');
// console.log('Your input was: ' + result);

class createNPC {
    constructor() {

    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    newId() {
        const x = '1234567890abcdefghijklmnopqrstuvwxyz';
        let id = '';
        while (id.length < 16) {
            id += x.charAt(this.rand(0, x.length));
        }
        return id;
    }

    newBirthday() {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'
        ]
        return `${months[rand(1,12)]} ${rand(1,28)}`;
    }

    newSex()  {
        return (this.rand(0, 100) < 49) ? "male" : "female";
    }
    
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(fullName('US', 0));
