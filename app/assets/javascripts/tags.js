// This is a manifest file that'll be compiled into tags.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// For the_tags_tree
//= require bootstrap-tagsinput/dist/bootstrap-tagsinput


(function () {
  'use strict';
  $(document).on('ready page:load', function() {
    var items = $('#post_tag_list').val();
    $('#post_tag_list').val(items.split(' '));
  });
}());

