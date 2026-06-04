PennController.ResetPrefix(null); // For shorter commands
DebugOff();

Sequence(
    "consent", 
    "ask_ID", 
    "instructions1", 
    "instructions2",
    "practice_intro",
    rshuffle("practice"),
    "end_instructions",
    
    rshuffle(
        pick("test_ConceptualMatch_Animate", 5),
        pick("test_ConceptualMatch_Inanimate", 5),
        pick("test_ValenceMatch_Positive", 5),
        pick("test_ValenceMatch_Negative", 5),
        
        "control_Dissimilar",
        "control_Similar",
        
        pick("control_MaxMismatch", 5),
        
        pick("control_MaxMatch_Negative_Animate", 5),
        pick("control_MaxMatch_Negative_Inanimate", 5),
        pick("control_MaxMatch_Positive_Animate", 5),
        pick("control_MaxMatch_Positive_Inanimate", 5),
        
        pick("filler_SelfPair", 5)
    ),
    
    
   "demo", "send", "end")
   
   
function pick(predicate, amount) {
    return {
        args: [predicate],
        run(arrays) {
            let array = arrays[0]
            let indices = Array.from(array.keys())
            fisherYates(indices)
            indices = indices.slice(0, amount).sort()
            return indices.map(i => array[i])
        }
    }
}
    
    
    
// This is run at the beginning of each trial
Header(
    // Declare a global Var element "ID" in which we will store the participant's ID
    newVar("ID").global()    
)
.log( "ID" , getVar("ID") ) // Add the ID to all trials' results lines


newTrial( "welcome" ,
    newImage("labs_long.png")
        .size( 500,100 )      
        .center()
        .print()
    ,
    newText("<b>WELCOME</b>")
        .settings.css("font-size","30")
        .center()
        .print()
    ,
    newText("<p>The following experiment is conducted by a collaboration between the Sorbonne University, the École Normale Superieur, and the Centre National de la Recherche Scientifique.</p>")
        .settings.css("font-size","15")
        .center()
        .print()
    ,
    
    newText("<p>Before continuing, please make sure that you are in a calm and quiet environment. The task will require your full attention and concentration. Please remove any potential source of distraction and turn off any sound system around you (please mute speakers, put phone on silence mode, turn the TV off, etc).</p>")
        .settings.css("font-size","15")
        .center()
        .print()
    ,
    newButton("next", "Continue")
        .center()
        .print()
        .wait()
    );


// End screen
PennController("end",
    newText("Thank you for your participation!<br><br>")
        .center()
        .print()
        ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=CHFTNE6M">Click here if you do not automatically redirect.</a><br><br>')
        .center()
        .print()
    ,
    newText("Or, enter this completion code: CHFTNE6M")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");