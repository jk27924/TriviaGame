// <<PSEUDO CODING FIRST>>

// SHOW vs. HIDE
    // * Start Button vs. Timer
    // * Questions vs. Results
    // * Submit Button vs. Restart Button

//------------------------------------------------------------------//

// 1. Click Start Button to start the Game
    // Hide Start Button / Show Timer

// 2. Set the Timer at 60 seconds, and count down by 1 second
    // It decrements, and stops at 0

// 3 - a. 
// When timer is Stopped,
    // Evaluate the Answers
    // Hide Timer
    // Hide Questions / Show Results
    // Hide Submit Button / Show Restart Button

// 3 - b. 
// When quiz is done before timer stops,
    // Click Submit Button
        // Evaluate the Answers
        // Hide Timer
        // Hide Questions / Show Results
        // Hide Submit Button / Show Restart Button

// 4. Click Restart button,
    // Hide Timer / Show Start Button
    // Hide Results / Show Questions
    // Hide Restart Button / Show Submit Button


    $(document).ready(function () {

        $("#startBtn").on("click", start);
    
        var number;
        var counter = 0;
        var correct = 0;
        var wrong = 0;
    
        function start() {
            number = 10;
            counter;
            $(".start").hide();
            $("#show-number").show();
            $('#show-number').append(decrement);
        }
    
        function run() {
            counter = setInterval(decrement, 1000);
        }
    
        function decrement() {
            number--;
            $('#show-number').html('<h2>' + number + " Seconds Left" + '</h2>');
    
            if (number == 0) {
                stop ();
            } else if (number !==0) {
                $("#submitBtn").on("click", stop);
            }
        }
    
        function stop() {
            clearInterval(counter);
        }
    
        run();

        function submit () {
            for (var i = 0; i <= 5; i++) {
                var selected = $("input[name=q" +i+ "]:checked").val();

                if (selected == 'correct') {
                    correct++;
                } else {
                    wrong++;
                }
            }
        }
    
    });