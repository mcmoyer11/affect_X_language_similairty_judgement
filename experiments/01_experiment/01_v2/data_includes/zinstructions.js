newTrial("instructions1",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("In this experiment, your job is to evaluate how similar words are to each other. You will be shown two words, one in <span color='red'>red</span> and the other in <span color='green'>green</span>, and rate them on similarity.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("At one end of the scale (completely dissimilar), you rate words whose meanings are opposite, contradictory, or totally unalike. ")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("At the other end of the scale (completely similar), you rate words whose meanings are the same, equivalent, or totally alike.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions2",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Some words may not be straightforwardly similar or dissimilar to each other. If you feel this is the case, you can put the slider towards the middle of the scale.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Other words may be ambiguous, so that on one interpretation the words are similar but on the other they are dissimilar. If you feel this is the case, you can again put the slider in the middle range.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    

newTrial("practice_intro",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Lets practice before we begin.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar to continue.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("end_instructions",

    newText("Great! Now you're ready for the experiment.")
        .settings.css("font-size","25")
        .center()
        .print()
    ,  
    newText("<br>")
        .center()
        .print()
    ,
    newText("Make sure you're in a quiet room with no distractions.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Once you start the experiment, do not stop until the end.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the button when you're ready to start.")
        .center()
        .print()
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
// .setOption("countsForProgressBar", false);