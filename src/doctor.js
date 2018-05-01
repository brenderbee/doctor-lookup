class Doctor {

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

}

export { Doctor };
