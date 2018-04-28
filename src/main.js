import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { parsePortlandOffices } from './api.js';
import { Response } from './response.js';
import { Doctor } from './doctor.js';
import { Office } from './office.js';

$(document).ready(function() {
  $('form.condition button').click(function(event) {
    event.preventDefault();
    $('.output').empty();

    let inputCondition = $('#condition').val();
    let conditionCall = new API();
    let responseInfo = new Response();
    let doctorInfo = new Doctor();
    let officeInfo = new Office();
    let promiseCondition = conditionCall.requestConditionAPI(inputCondition);

    promiseCondition.then(function(response) {
      if (responseInfo.getResultsCount(response) === 0) {
        $('.output').text('Your search returned no results.');
      } else {
        let responseDoctorsArray = responseInfo.getDoctors(response);

        responseDoctorsArray.forEach(function(doctor) {
          let practices = doctorInfo.getPractices(doctor);
          let portlandOffices = parsePortlandOffices(practices);
          let firstPortlandOffice = portlandOffices[0];
          let fields = doctorInfo.getFields(doctor).join(', ');
          let specialties = doctorInfo.getSpecialties(doctor).join(' ');
          let fullName = `${doctorInfo.getFirstName(doctor)} ${doctorInfo.getLastName(doctor)}, ${doctorInfo.getTitle(doctor)}`
          let bio = doctorInfo.getBio(doctor);
          let phones = officeInfo.getPhones(firstPortlandOffice).join(', ');
          let streetAddress = officeInfo.getStreetAddress(firstPortlandOffice);
          let addressCityStateZip = officeInfo.getCityStateZipAddress(firstPortlandOffice);
          let website = officeInfo.getWebsite(firstPortlandOffice);
          let newPatients = officeInfo.getAcceptingPatients(firstPortlandOffice);

          $('.output').append(
            `<div class="card doctor">
              <div class="card-header">
                <h3>${fullName}</h3>
                <h4>${fields}</h4>
              </div>
              <div class="card-body">
                <p><strong>${specialties}</strong></p>
                <p>${bio}</p>
                <p><strong>Phone Number:</strong></p>
                <p>${phones}</p>
                <p><strong>Address:</strong></p>
                <p>${streetAddress}</p>
                <p>${addressCityStateZip}</p>
                <p><strong>Website:</strong> ${website}</p>
                <h4>${newPatients}</h4>
              </div>
            </div>`
          );
        });
      }
    }, function(error) {
      $('div.error').text('There has been an error: ' + error);
      $('div.error').show();
    });
  });


  $('form.name button').click(function(event) {
    event.preventDefault();
    $('.output').empty();

    let inputName = $('#name').val();
    let nameCall = new API();
    let promiseName = nameCall.requestNameAPI(inputName);

    promiseName.then(function(response) {
      if (response.meta.total === 0) {
        $('.output').text('Your search returned no results.');
      } else {
        let responseDoctorsArray = response.data;
        responseDoctorsArray.forEach(
          function(doctor) {
          let practices = doctor.practices;
          let portlandOffices = parsePortlandOffices(practices);
          let website = checkWebsite(portlandOffices[0].website);
          let newPatients = portlandOffices[0].accepts_new_patients;
          let field = doctor.specialties[0].name;
          let specialties = doctor.specialties[0].description;

          $('.output').append(
            `<div class="card doctor">
              <div class="card-header">
                <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
                <h4>${field}</h4>
              </div>
              <div class="card-body">
                <p><strong>${specialties}</strong></p>
                <p>${doctor.profile.bio}</p>
                <p><strong>Phone Number:</strong></p>
                <p>${portlandOffices[0].phones[0].number}</p>
                <p><strong>Address:</strong></p>
                <p>${portlandOffices[0].visit_address.street}</p>
                <p>${portlandOffices[0].visit_address.city}, ${portlandOffices[0].visit_address.state} ${portlandOffices[0].visit_address.zip}</p>
                <p><strong>Website:</strong> ${website}</p>
                <p><strong>Accepting new patients:</strong> ${newPatients}</p>
              </div>
            </div>`
          );
        });
      }
      }, function(error) {
      $('div.error').text('There has been an error: ' + error);
      $('div.error').show();
    });
  });
});
