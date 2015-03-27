$.fn.cycle.transitions.mask = function($cont, $slides, opts) {
  $slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 0, 'visibility': 'hidden' });

  opts.before.push(function(curr,next,opts,w,h,rev) {
    $slides.not(':eq('+opts.currSlide+')')
    .removeClass('cycle_transition_mask')
    .css({ display: 'block', 'opacity': 0, 'visibility': 'hidden' });

    $(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
    $(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
    $(next).css({'opacity': 1, 'visibility': 'visible'});

    if (curr == next) {
      //initial load
      $slides.last().addClass('cycle_transition_mask');
      return;
    }

    $(curr).addClass('cycle_transition_mask');
  });
};
