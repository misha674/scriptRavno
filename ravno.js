  var blocksName = $('.blocks-classes');

  $.fn.ravno = function () {
    var $self = $(this);
    var fn = function () {
      var maxH = -1;
      $self.height('auto').each(function () {
        var h = $(this).height();
        maxH = (h > maxH) ? h : maxH;
      });
      $self.height(maxH);
    };
    if ($.fn.imagesLoaded) {
      $self.imagesLoaded(fn);
    } else {
      fn();
    }
  };

  $(blocksName).ravno();
