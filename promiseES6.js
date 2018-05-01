// ES6 introdue promises.
// A promise (or a promise Object) represents an asynchronous operation.
// The Promise constructor is used to create new Promise instances.

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
const showOff = function(phone) {
  const message = 'Hey friend, I have a new' + ' ' + phone.color + ' ' + phone.brand + ' ' + 'phone';
  return Promise.resolve(message);
}

// Consumming the Promise
const askMom = function() {
  willGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
};

askMom();
