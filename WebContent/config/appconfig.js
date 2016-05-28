angular.module('StarterApp').config(function($mdThemingProvider,$mdIconProvider,$httpProvider) {
   $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
	
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
  
  
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
		
		
});