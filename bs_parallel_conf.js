exports.config = {
	'specs': ['va_parallel_spec.js'],
	'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

	'commonCapabilities': {
    'browserstack.user': process.env.BSUSERNAME || 'BSUSERNAME',
    'browserstack.key': process.env.BSKEY ||'BSKEY'
	},

	'multiCapabilities': [{
    'browserName': 'Chrome'
  },{
    'browserName': 'Safari'
  },{
    'browserName': 'Firefox'
	}]

};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});