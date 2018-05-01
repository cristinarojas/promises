const isMomHappy = true;

// Promise
const willGetNewPhone = new Promise(
  (resolve, reject) => {

    if(isMomHappy) {
      const phone = {
        brand: 'Apple',
        color: 'white'
      };

      resolve(phone);
    } else {
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);


// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};


// Call or consumming our promise
async function askMom() {
  try {
    console.log('Before asking mom');

    let phone = await willGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log('After asking mom');
  }

  catch (error) {
    console.log(error.message);
  }
}


(async () => {
  await askMom();
})();
