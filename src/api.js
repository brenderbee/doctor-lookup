class API {

  requestConditionAPI(inputCondition) {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputCondition}&location=or-portland&skip=0&limit=100&user_key=${process.env.exports.apiKey}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }

  requestNameAPI(inputName) {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputName}&location=or-portland&skip=0&limit=100&user_key=${process.env.exports.apiKey}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }

}

export { API };
