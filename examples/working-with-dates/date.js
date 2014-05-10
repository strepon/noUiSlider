$("#daterange-slider").noUiSlider({
// Create two timestamps to define a range.
    range: {
        min: timestamp('2010'),
        max: timestamp('2016')
    },
	
// Steps of one week
    step: 7 * 24 * 60 * 60 * 1000,
	
// Two more timestamps indicate the handle starting positions.
    start: [ timestamp('2011'), timestamp('2015') ],
	
// The setDate function will display the current values.
    serialization: {
        lower: [
            $.Link({
                target: $("#event-start"),
                method: setDate
            })
        ],
		upper: [
            $.Link({
                target: $("#event-end"),
                method: setDate
            })
        ],
        format: {
            decimals: 0   
        }
    }
});
