import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    let inputCondition = $('#condition').val();
    let nameCall = new API();

    let promise = nameCall.requestAPI(inputCondition);

    promise.then(function(response) {
      let responsePracticesArray = response.data;

      responsePracticesArray.forEach(function(practice) {
        let responseName = practice.profile;
        $('.output').append(
          `<div class="card">
            <div class="card-header">
              <h3>${practice.profile.first_name} ${practice.profile.last_name}, ${practice.profile.title}</h3>
            </div>
            <div class="card-body">
            </div>
          </div>`
        );
        console.log(practice);
      });
      }, function(error) {
      $('div.error').text('There has been an error: ' + error);
      $('div.error').show();
    });
  });
});
