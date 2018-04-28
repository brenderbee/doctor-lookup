export function parsePortlandOffices(practices) {
  let portlandOffices = [];
  practices.forEach(function(practice) {
    if (practice.location_slug === 'or-portland') {
      portlandOffices.push(practice);
    }
  });
  return portlandOffices;
}

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

  getResultCount() {
    return this.meta.total;
  }

  getDoctors() {
    return this.data;
  }

  getLastName() {
    return this.profile.last_name;
  }

  getFirstName() {
    return this.profile.first_name;
  }

  getTitle() {
    return this.profile.title;
  }

  getBio() {
    return this.profile.bio;
  }

  getFields() {
    let allFields = [];
    this.specialties.forEach(function(specialty) {
      allSpecialties.push(specialty.name);
    });
    return allFields;
  }

  getSpecialties() {
    let allSpecialties = [];
    this.specialties.forEach(function(specialty) {
      allSpecialties.push(specialty.description);
    });
    return allSpecialties;
  }

  getPractices() {
    return this.practices;
  }

  getPhone() {
    let allPhones = [];
    this.phones.forEach(function(phone) {
      allPhones.push(phone);
    });
    return allPhones;
  }

  getStreet() {
    if (this.visit_address.street2 !== "") {
      return this.visit_address.street + ", " + this.visit_address.street2;
    } else {
      return this.visit_address.street;
    }
  }

  getCityStateZip() {
    return this.visit_address.city + ", " + this.visit_address.state + " " + this.visit_address.zip;
  }

  getAcceptingPatients() {
    let text = "";
    if (this.accepts_new_patients = true) {
      return "Accepting new patients";
    } else {
      return "NOT accepting new patients"
    }
  }

  getWebsite() {
    if (if this.website !== "") {
      return this.website;
    } else {
      return "n/a";
    }
  }

}

export { API };
