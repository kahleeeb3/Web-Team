$(document).ready(function () {

    var utc = new Date().toJSON().slice(0, 10);

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: utc,
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Thanksgiving Recess',
                start: '2021-11-22',
                end: '2021-11-29'
            },
            {
                title: 'Classes Resume',
                start: '2021-11-29',
            },
            {
                title: 'Discord Bot Workshop',
                start: '2021-11-30',
            },
            {
                title: 'Discord Bot Workshop',
                start: '2021-12-02'
            },
            {
                title: 'Discord Bot Workshop',
                start: '2021-12-07'
            },
            {
                title: 'Discord Bot Workshop',
                start: '2021-12-09'
            }
        ]
        /*
        events: [{
            title: 'All Day Event',
            start: '2016-12-01'
        },
        {
            title: 'Long Event',
            start: '2016-12-07',
            end: '2016-12-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2016-12-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2016-12-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2016-12-11',
            end: '2016-12-13'
        },
        {
            title: 'Meeting',
            start: '2016-12-12T10:30:00',
            end: '2016-12-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2016-12-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2016-12-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2016-12-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2016-12-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2016-12-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'https://google.com/',
            start: '2016-12-28'
        }
        ]
        */
    });

});