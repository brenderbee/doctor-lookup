class Doctor {

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

}

export { Doctor };
