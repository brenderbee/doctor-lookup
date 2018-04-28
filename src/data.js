class Data {

  getResultsCount(response) {
    return response.meta.total;
  }

  getDoctors(response) {
    return response.data;
  }

  getLastName(doctor) {
    return doctor.profile.last_name;
  }

  getFirstName(doctor) {
    return doctor.profile.first_name;
  }

  getTitle(doctor) {
    return doctor.profile.title;
  }

  getBio(doctor) {
    return doctor.profile.bio;
  }

  getFields(doctor) {
    let allFields = [];
    doctor.specialties.forEach(function(specialty) {
      allFields.push(specialty.name);
    });
    return allFields;
  }

  getSpecialties(doctor) {
    let allSpecialties = [];
    doctor.specialties.forEach(function(specialty) {
      allSpecialties.push(specialty.description);
    });
    return allSpecialties;
  }

  getPractices(doctor) {
    return doctor.practices;
  }

  getPhones(office) {
    let allPhones = [];
    office.phones.forEach(function(phone) {
      allPhones.push(phone.number.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3')); //Got this regex from stackoverflow
    });
    return allPhones;
  }

  getStreetAddress(office) {
    if (typeof office.visit_address.street2 !== 'undefined') {
      return office.visit_address.street + ", " + office.visit_address.street2;
    } else {
      return office.visit_address.street;
    }
  }

  getCityStateZipAddress(office) {
    return office.visit_address.city + ", " + office.visit_address.state + " " + office.visit_address.zip;
  }

  getAcceptingPatients(office) {
    if (office.accepts_new_patients === true) {
      return "Accepting new patients";
    } else {
      return "NOT accepting new patients"
    }
  }

  getWebsite(office) {
    if (typeof office.website !== 'undefined') {
      return office.website;
    } else {
      return "n/a";
    }
  }

}

export { Data };
