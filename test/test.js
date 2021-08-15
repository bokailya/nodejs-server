const app = require('../src/app');
const assert = require('assert');
const request = require('supertest');

describe(
  'GET /',
  function() {
    it(
      'Check response',
      function(done) {
        const input_url = '/';
        const expected_content_length = '33';
        const expected_content_type = /json/;
        const expected_http_status = 200;
        const expected_response_body = { message: 'Docker is easy 🐳' };

        request(app)
          .get(input_url)
          .expect('Content-Length', expected_content_length)
          .expect('Content-Type', expected_content_type)
          .expect(expected_http_status, expected_response_body, done);
      },
    );
  }
);
