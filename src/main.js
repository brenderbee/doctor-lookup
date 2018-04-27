import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';

$(document).ready(function() {
  $('form.condition button').click(function(event) {
    event.preventDefault();

    let inputCondition = $('#condition').val();
    let conditionCall = new API();

    let promiseCondition = conditionCall.requestConditionAPI(inputCondition);

    promiseCondition.then(function(response) {
      let responseDoctorsArray = response.data;
      responseDoctorsArray.forEach(function(doctor) {
        $('.output').append(
          `<div class="card">
            <div class="card-header">
              <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
            </div>
            <div class="card-body">
              <p>Phone Number:</p>
              <p></p>
              <p>Address:</p>
              <p>${doctor.practices[0].visit_address.street}</p>
              <p>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
            </div>
          </div>`
        );
      });
      }, function(error) {
      $('div.error').text('There has been an error: ' + error);
      $('div.error').show();
    });
  });

  $('form.name button').click(function(event) {
    event.preventDefault();
    debugger;
    let inputName = $('#name').val();
    let nameCall = new API();

    let promiseName = nameCall.requestNameAPI(inputName);

    promiseName.then(function(response) {
      let responseDoctorsArray = response.data;
      responseDoctorsArray.forEach(function(doctor) {
        $('.output').append(
          `<div class="card">
            <div class="card-header">
              <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
            </div>
            <div class="card-body">
              <p>Phone Number:</p>
              <p></p>
              <p>Address:</p>
              <p>${doctor.practices[0].visit_address.street}</p>
              <p>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
            </div>
          </div>`
        );
      });
      }, function(error) {
      $('div.error').text('There has been an error: ' + error);
      $('div.error').show();
    });
  });
});
