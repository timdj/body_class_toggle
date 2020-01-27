(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.bodyToggle = {
    attach: function (context, settings) {
      if($.cookie('bodyclass')) {
        $('body').addClass( $.cookie('bodyclass') );
      }
      else{
        $('body').addClass('light-mode'); // set default theme. No need to set via php now
      }

      $('#theme-toggler', context).once('bodyToggle').click(function(){
        if ($('body').hasClass( 'light-mode')){
          $('body').removeClass('light-mode').addClass('dark-mode');
          $.cookie('bodyclass', 'dark-mode');

        }
        else  {
          $('body').removeClass('dark-mode').addClass('light-mode');
          $.cookie('bodyclass', 'light-mode');
        }
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
