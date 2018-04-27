class Data {

  parsePortlandOffices() {
    let portlandOffices = [];
    response.data.practices.forEach(function(practice) {
      if (practice.location_slug === 'or-portland') {
        portlandOffices.push(practice);
      }
    });
    return portlandOffices;
  }

}

export { Data };
