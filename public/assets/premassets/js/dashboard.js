// upcoming birthday
var scrollDuration = 300;
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
var paddleMargin = 20;

var picLength = $('#picture-scroll').attr('picLength');

var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
var menuVisibleSize = menuWrapperSize;

var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
var menuInvisibleSize = menuSize - menuWrapperSize;

var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

$('.menu').on('scroll', function() {

	menuInvisibleSize = menuSize - menuWrapperSize;
	var menuPosition = getMenuPosition();
	var menuEndOffset = menuInvisibleSize - paddleMargin;
    if (picLength < 9) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).addClass('hidden');
    } else {
        if (menuPosition <= paddleMargin) {
            $(leftPaddle).addClass('hidden');
            $(rightPaddle).removeClass('hidden');
        } else if (menuPosition < menuEndOffset) {
            $(leftPaddle).removeClass('hidden');
            $(rightPaddle).removeClass('hidden');
        } else if (menuPosition >= menuEndOffset) {
            $(leftPaddle).removeClass('hidden');
            $(rightPaddle).addClass('hidden');
        }
    }
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

}).trigger('scroll');

$(rightPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: menuInvisibleSize+50}, scrollDuration);
});

$(leftPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});


// new joiners
var scrollDurationJoiner = 300;
var leftPaddleJoiner = document.getElementsByClassName('left-paddle-joiner');
var rightPaddleJoiner = document.getElementsByClassName('right-paddle-joiner');
var itemsLengthJoiner = $('.item-joiner').length;
var itemSizeJoiner = $('.item-joiner').outerWidth(true);
var paddleMarginJoiner = 20;

var picLength = $('#picture-scroll-joiner').attr('picLength');

var getMenuWrapperSizeJoiner = function() {
	return $('.menu-wrapper-joiner').outerWidth();
}
var menuWrapperSizeJoiner = getMenuWrapperSizeJoiner();
$(window).on('resize', function() {
	menuWrapperSizeJoiner = getMenuWrapperSizeJoiner();
});
var menuVisibleSize = menuWrapperSizeJoiner;

var getMenuSizeJoiner = function() {
	return itemsLengthJoiner * itemSizeJoiner;
};
var menuSize = getMenuSizeJoiner();
var menuInvisibleSizeJoiner = menuSize - menuWrapperSizeJoiner;

var getMenuPosition = function() {
	return $('.menu-joiner').scrollLeft();
};

$('.menu-joiner').on('scroll', function() {

	menuInvisibleSizeJoiner = menuSize - menuWrapperSizeJoiner;
	var menuPosition = getMenuPosition();
	var menuEndOffset = menuInvisibleSizeJoiner - paddleMarginJoiner;
    if (picLength < 9) {
		$(leftPaddleJoiner).addClass('hidden');
		$(rightPaddleJoiner).addClass('hidden');
    } else {
        if (menuPosition <= paddleMarginJoiner) {
            $(leftPaddleJoiner).addClass('hidden');
            $(rightPaddleJoiner).removeClass('hidden');
        } else if (menuPosition < menuEndOffset) {
            $(leftPaddleJoiner).removeClass('hidden');
            $(rightPaddleJoiner).removeClass('hidden');
        } else if (menuPosition >= menuEndOffset) {
            $(leftPaddleJoiner).removeClass('hidden');
            $(rightPaddleJoiner).addClass('hidden');
        }
    }
	$('#print-wrapper-size-joiner span').text(menuWrapperSizeJoiner);
	$('#print-menu-size-joiner span').text(menuSize);
	$('#print-menu-invisible-size-joiner span').text(menuInvisibleSizeJoiner);
	$('#print-menu-position-joiner span').text(menuPosition);

}).trigger('scroll');

$(rightPaddleJoiner).on('click', function() {
	$('.menu-joiner').animate( { scrollLeft: menuInvisibleSizeJoiner+50}, scrollDurationJoiner);
});

$(leftPaddleJoiner).on('click', function() {
	$('.menu-joiner').animate( { scrollLeft: '0' }, scrollDurationJoiner);
});



// calender


// !function() {

//   var today = moment();

//   function Calendar(selector, events) {
//     this.el = document.querySelector(selector);
//     this.events = events;
//     this.current = moment().date(1);
//     this.draw();
//     var current = document.querySelector('.today');
//     if(current) {
//       var self = this;
//       window.setTimeout(function() {
//         self.openDay(current);
//       }, 500);
//     }
//   }

//   Calendar.prototype.draw = function() {
//     //Create Header
//     this.drawHeader();

//     //Draw Month
//     this.drawMonth();

//     this.drawLegend();
//   }

//   Calendar.prototype.drawHeader = function() {
//     var self = this;
//     if(!this.header) {
//       //Create the header elements
//       this.header = createElement('div', 'header');
//       this.header.className = 'header';

//       this.title = createElement('h1');

//       var right = createElement('div', 'right');
//       right.addEventListener('click', function() { self.nextMonth(); });

//       var left = createElement('div', 'left');
//       left.addEventListener('click', function() { self.prevMonth(); });

//       //Append the Elements
//       this.header.appendChild(this.title); 
//       this.header.appendChild(right);
//       this.header.appendChild(left);
//       this.el.appendChild(this.header);
//     }

//     this.title.innerHTML = this.current.format('MMMM YYYY');
//   }

//   Calendar.prototype.drawMonth = function() {
//     var self = this;
    
//     this.events.forEach(function(ev) {
//      ev.date = self.current.clone().date(Math.random() * (29 - 1) + 1);
//     });
    
    
//     if(this.month) {
//       this.oldMonth = this.month;
//       this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
//       this.oldMonth.addEventListener('webkitAnimationEnd', function() {
//         self.oldMonth.parentNode.removeChild(self.oldMonth);
//         self.month = createElement('div', 'month');
//         self.backFill();
//         self.currentMonth();
//         self.fowardFill();
//         self.el.appendChild(self.month);
//         window.setTimeout(function() {
//           self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
//         }, 16);
//       });
//     } else {
//         this.month = createElement('div', 'month');
//         this.el.appendChild(this.month);
//         this.backFill();
//         this.currentMonth();
//         this.fowardFill();
//         this.month.className = 'month new';
//     }
//   }

//   Calendar.prototype.backFill = function() {
//     var clone = this.current.clone();
//     var dayOfWeek = clone.day();

//     if(!dayOfWeek) { return; }

//     clone.subtract('days', dayOfWeek+1);

//     for(var i = dayOfWeek; i > 0 ; i--) {
//       this.drawDay(clone.add('days', 1));
//     }
//   }

//   Calendar.prototype.fowardFill = function() {
//     var clone = this.current.clone().add('months', 1).subtract('days', 1);
//     var dayOfWeek = clone.day();

//     if(dayOfWeek === 6) { return; }

//     for(var i = dayOfWeek; i < 6 ; i++) {
//       this.drawDay(clone.add('days', 1));
//     }
//   }

//   Calendar.prototype.currentMonth = function() {
//     var clone = this.current.clone();

//     while(clone.month() === this.current.month()) {
//       this.drawDay(clone);
//       clone.add('days', 1);
//     }
//   }

//   Calendar.prototype.getWeek = function(day) {
//     if(!this.week || day.day() === 0) {
//       this.week = createElement('div', 'week');
//       this.month.appendChild(this.week);
//     }
//   }

//   Calendar.prototype.drawDay = function(day) {
//     var self = this;
//     this.getWeek(day);

//     //Outer Day
//     var outer = createElement('div', this.getDayClass(day));
//     outer.addEventListener('click', function() {
//       self.openDay(this);
//     });

//     //Day Name
//     var name = createElement('div', 'day-name', day.format('ddd'));

//     //Day Number
//     var number = createElement('div', 'day-number', day.format('DD'));


//     //Events
//     var events = createElement('div', 'day-events');
//     this.drawEvents(day, events);

//     outer.appendChild(name);
//     outer.appendChild(number);
//     outer.appendChild(events);
//     this.week.appendChild(outer);
//   }

//   Calendar.prototype.drawEvents = function(day, element) {
//     if(day.month() === this.current.month()) {
//       var todaysEvents = this.events.reduce(function(memo, ev) {
//         if(ev.date.isSame(day, 'day')) {
//           memo.push(ev);
//         }
//         return memo;
//       }, []);

//       todaysEvents.forEach(function(ev) {
//         var evSpan = createElement('span', ev.color);
//         element.appendChild(evSpan);
//       });
//     }
//   }

//   Calendar.prototype.getDayClass = function(day) {
//     classes = ['day'];
//     if(day.month() !== this.current.month()) {
//       classes.push('other');
//     } else if (today.isSame(day, 'day')) {
//       classes.push('today');
//     }
//     return classes.join(' ');
//   }

//   Calendar.prototype.openDay = function(el) {
//     var details, arrow;
//     var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
//     var day = this.current.clone().date(dayNumber);

//     var currentOpened = document.querySelector('.details');

//     if(currentOpened && currentOpened.parentNode === el.parentNode) {
//       details = currentOpened;
//       arrow = document.querySelector('.arrow');
//     } else {
//       if(currentOpened) {
//         currentOpened.addEventListener('webkitAnimationEnd', function() {
//           currentOpened.parentNode.removeChild(currentOpened);
//         });
//         currentOpened.addEventListener('oanimationend', function() {
//           currentOpened.parentNode.removeChild(currentOpened);
//         });
//         currentOpened.addEventListener('msAnimationEnd', function() {
//           currentOpened.parentNode.removeChild(currentOpened);
//         });
//         currentOpened.addEventListener('animationend', function() {
//           currentOpened.parentNode.removeChild(currentOpened);
//         });
//         currentOpened.className = 'details out';
//       }

//       details = createElement('div', 'details in');

//       var arrow = createElement('div', 'arrow');


//       details.appendChild(arrow);
//       el.parentNode.appendChild(details);
//     }

//     var todaysEvents = this.events.reduce(function(memo, ev) {
//       if(ev.date.isSame(day, 'day')) {
//         memo.push(ev);
//       }
//       return memo;
//     }, []);

//     this.renderEvents(todaysEvents, details);

//     arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
//   }

//   Calendar.prototype.renderEvents = function(events, ele) {
//     var currentWrapper = ele.querySelector('.events');
//     var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

//     events.forEach(function(ev) {
//       var div = createElement('div', 'event');
//       var square = createElement('div', 'event-category ' + ev.color);
//       var span = createElement('span', '', ev.eventName);

//       div.appendChild(square);
//       div.appendChild(span);
//       wrapper.appendChild(div);
//     });

//     if(!events.length) {
//       var div = createElement('div', 'event empty');
//       var span = createElement('span', '', 'No Events');

//       div.appendChild(span);
//       wrapper.appendChild(div);
//     }

//     if(currentWrapper) {
//       currentWrapper.className = 'events out';
//       currentWrapper.addEventListener('webkitAnimationEnd', function() {
//         currentWrapper.parentNode.removeChild(currentWrapper);
//         ele.appendChild(wrapper);
//       });
//       currentWrapper.addEventListener('oanimationend', function() {
//         currentWrapper.parentNode.removeChild(currentWrapper);
//         ele.appendChild(wrapper);
//       });
//       currentWrapper.addEventListener('msAnimationEnd', function() {
//         currentWrapper.parentNode.removeChild(currentWrapper);
//         ele.appendChild(wrapper);
//       });
//       currentWrapper.addEventListener('animationend', function() {
//         currentWrapper.parentNode.removeChild(currentWrapper);
//         ele.appendChild(wrapper);
//       });
//     } else {
//       ele.appendChild(wrapper);
//     }
//   }

//   Calendar.prototype.drawLegend = function() {
//     var legend = createElement('div', 'legend');
//     var calendars = this.events.map(function(e) {
//       return e.calendar + '|' + e.color;
//     }).reduce(function(memo, e) {
//       if(memo.indexOf(e) === -1) {
//         memo.push(e);
//       }
//       return memo;
//     }, []).forEach(function(e) {
//       var parts = e.split('|');
//       var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
//       legend.appendChild(entry);
//     });
//     this.el.appendChild(legend);
//   }

//   Calendar.prototype.nextMonth = function() {
//     this.current.add('months', 1);
//     this.next = true;
//     this.draw();
//   }

//   Calendar.prototype.prevMonth = function() {
//     this.current.subtract('months', 1);
//     this.next = false;
//     this.draw();
//   }

//   window.Calendar = Calendar;

//   function createElement(tagName, className, innerText) {
//     var ele = document.createElement(tagName);
//     if(className) {
//       ele.className = className;
//     }
//     if(innerText) {
//       ele.innderText = ele.textContent = innerText;
//     }
//     return ele;
//   }
// }();

// !function() {
//   var data = [
//     { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange' },
//     { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange' },
//     { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange' },
//     { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange' },

//     { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue' },
//     { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue' },
//     { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue' },
//     { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue' },

//     { eventName: 'School Play', calendar: 'Kids', color: 'yellow' },
//     { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow' },
//     { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow' },
//     { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow' },

//     { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green' },
//     { eventName: 'Bowling Team', calendar: 'Other', color: 'green' },
//     { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green' },
//     { eventName: 'Startup Weekend', calendar: 'Other', color: 'green' }
//   ];

  

//   function addDate(ev) {
    
//   }

//   var calendar = new Calendar('#calendar', data);

// }();


$(document).ready(function () {
  var SITEURL = "{{ url('/') }}";
  $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });
  var calendar = $('#full_calendar_events').fullCalendar({
      editable: true,
      editable: true,
      events: SITEURL + "/calendar-event",
      displayEventTime: true,
      eventRender: function (event, element, view) {
          if (event.allDay === 'true') {
              event.allDay = true;
          } else {
              event.allDay = false;
          }
      },
      selectable: true,
      selectHelper: true,
      select: function (event_start, event_end, allDay) {
          var event_name = prompt('Event Name:');
          if (event_name) {
              var event_start = $.fullCalendar.formatDate(event_start, "Y-MM-DD HH:mm:ss");
              var event_end = $.fullCalendar.formatDate(event_end, "Y-MM-DD HH:mm:ss");
              $.ajax({
                  url: SITEURL + "/calendar-crud-ajax",
                  data: {
                      event_name: event_name,
                      event_start: event_start,
                      event_end: event_end,
                      type: 'create'
                  },
                  type: "POST",
                  success: function (data) {
                      displayMessage("Event created.");
                      calendar.fullCalendar('renderEvent', {
                          id: data.id,
                          title: event_name,
                          start: event_start,
                          end: event_end,
                          allDay: allDay
                      }, true);
                      calendar.fullCalendar('unselect');
                  }
              });
          }
      },
      eventDrop: function (event, delta) {
          var event_start = $.fullCalendar.formatDate(event.start, "Y-MM-DD");
          var event_end = $.fullCalendar.formatDate(event.end, "Y-MM-DD");
          $.ajax({
              url: SITEURL + '/calendar-crud-ajax',
              data: {
                  title: event.event_name,
                  start: event_start,
                  end: event_end,
                  id: event.id,
                  type: 'edit'
              },
              type: "POST",
              success: function (response) {
                  displayMessage("Event updated");
              }
          });
      },
      eventClick: function (event) {
          var eventDelete = confirm("Are you sure?");
          if (eventDelete) {
              $.ajax({
                  type: "POST",
                  url: SITEURL + '/calendar-crud-ajax',
                  data: {
                      id: event.id,
                      type: 'delete'
                  },
                  success: function (response) {
                      calendar.fullCalendar('removeEvents', event.id);
                      displayMessage("Event removed");
                  }
              });
          }
      }
  });
});
function displayMessage(message) {
  toastr.success(message, 'Event');            
}