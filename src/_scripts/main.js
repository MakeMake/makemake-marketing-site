// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import feather from 'feather-icons'
import { Link } from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
  feather.replace()

  // anchor link animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          block: 'center',
          behavior: 'smooth'
      });
    });
  });

});
