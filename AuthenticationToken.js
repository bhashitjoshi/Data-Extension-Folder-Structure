var request = require('request');
var client_secret = document.getElementById('cs');
console.log('Client_secret->',client_secret);
var client_id = document.getElementById('ci');
console.log('Client_id-> ',client_id);
var url = document.getElementById('url');
console.log('url-> ',url);
var options = {
  'method': 'POST',
  'url': url+'/v2/token',
  'headers': {
  },
  formData: {
    'grant_type': 'grant_type',
    'client_id': client_id,
    'client_secret': client_secret
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
 
     12 2 3 6 5 4 7 9 9