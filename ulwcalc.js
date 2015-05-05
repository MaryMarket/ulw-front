var message = '';
var fmr;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < fmr.length; i += 1) {
  fmr = fmrs[i];
  message += '<p>The Universal Living Wage for an Efficiency Apartment is $' + fmr.ulw0 + ' in ' + fmr.areaname + '.</p>';
  message += '<p>The Universal Living Wage for a One Bedroom Apartment is $' + fmr.ulw1 + ' in ' + fmr.areaname + '.</p>';
  message += '<p>The Universal Living Wage for a Two Bedroom Apartment is $' + fmr.ulw2 + ' in ' + fmr.areaname + '.</p>';
  message += '<p>The Universal Living Wage for a Three Bedroom Apartment is $' + fmr.ulw3 + ' in ' + fmr.areaname + '.</p>';
  message += '<p>The Universal Living Wage for a Four Bedroom Apartment is $' + fmr.ulw4 + ' in ' + fmr.areaname + '.</p>';
}
