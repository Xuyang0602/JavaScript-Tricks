// Method - 1
function sentEmail(config, provider) {
  // Set default value if user has not passed value for  provider
  provider = typeof provider !== 'undefined' ? provider : "Gmail"; // "Gmail" default value
  // code logic
}

// Mathod - 2
function sentMail(config, provider) {
  // Set default value if user has not passed value for  provider
  provider = provider || "Gmail"; // "Gmail" default value
  // code logic
}

sentEmail({
  from: 'gordonwang0718@gmail.com',
  subject: 'Test Email'
});

// Passing "Yahoo Mail" as a provider value
sentEmail({
  from: 'gordonwang0718@gmail.com',
  subject: 'Test Email'
}, 'Yahoo Mail');
