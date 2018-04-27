import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { parsePortlandOffices } from './api.js';

$(document).ready(function() {
  $('form.condition button').click(function(event) {
    event.preventDefault();

    let inputCondition = $('#condition').val();
    let conditionCall = new API();

    let promiseCondition = conditionCall.requestConditionAPI(inputCondition);

    promiseCondition.then(
      function(response) {
        let responseDoctorsArray = response.data;
        responseDoctorsArray.forEach(function(doctor) {
          let portlandOffices = parsePortlandOffices(doctor.practices);
          $('.output').append(
            `<div class="card">
            <div class="card-header">
            <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
            </div>)`);
            portlandOffices.forEach(function(office) {
              $('.output').append(
                `<div class="card-body">
                <p><strong>Phone Number:</strong></p>
                <p>${office.phones[0].number}</p>
                <p><strong>Address:</strong></p>
                <p>${office.visit_address.street}</p>
                <p>${office.visit_address.city}, ${office.visit_address.state} ${office.visit_address.zip}</p>
                </div>
                </div>`
              );
            });
          });
        },

        function(error) {
          $('div.error').text('There has been an error: ' + error);
          $('div.error').show();
        });

  // $('form.name button').click(function(event) {
  //   event.preventDefault();
  //   debugger;
  //   let inputName = $('#name').val();
  //   let nameCall = new API();
  //
  //   let promiseName = nameCall.requestNameAPI(inputName);
  //
  //   promiseName.then(function(response) {
  //     let responseDoctorsArray = response.data;
  //     responseDoctorsArray.forEach(function(doctor) {
  //       $('.output').append(
  //         `<div class="card">
  //           <div class="card-header">
  //             <h3>${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</h3>
  //           </div>
  //           <div class="card-body">
  //             <p><strong>Phone Number:</strong></p>
  //             <p>${doctor.practices[0].phones[0].number}</p>
  //             <p><strong>Address:</strong></p>
  //             <p>${doctor.practices[0].visit_address.street}</p>
  //             <p>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
  //           </div>
  //         </div>`
  //       );
  //     });
  //     }, function(error) {
  //     $('div.error').text('There has been an error: ' + error);
  //     $('div.error').show();
  //   });
  // });
});
