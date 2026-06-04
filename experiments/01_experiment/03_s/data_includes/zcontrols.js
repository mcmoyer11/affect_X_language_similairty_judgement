Template(GetTable("control_similar.csv"),
    
    row => newTrial("control_Similar",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);

Template(GetTable("control_dissimilar.csv"),
    
    row => newTrial("control_Dissimilar",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);


Template(GetTable("s_MaxMismatch.csv"),
    
    row => newTrial("control_MaxMismatch",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);

Template(GetTable("s_MaxMatch_Negative_Noun.csv"),
    
    row => newTrial("control_MaxMatch_Negative_Noun",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);

Template(GetTable("s_MaxMatch_Positive_Noun.csv"),
    
    row => newTrial("control_MaxMatch_Positive_Noun",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);

Template(GetTable("s_MaxMatch_Negative_Verb.csv"),
    
    row => newTrial("control_MaxMatch_Negative_Verb",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);

Template(GetTable("s_MaxMatch_Positive_Verb.csv"),
    
    row => newTrial("control_MaxMatch_Positive_Verb",

        // newVar("Word1").set(row.Word1).log(),
        // newVar("Word2").set(row.Word2).log(),

        newText("Word1", row.Word1)
            .center()
            .css("font-size", "24px")
            .css("color", "red")
            .print()
        ,
        newText("Word2", row.Word2)
            .center()
            .css("font-size", "24px")
            .css("color", "green")
            .print()
        ,
        newText("spacer1", "<br><br>").print()
        ,
        newText("question", "How similar is the word in red to the word in green?")
            .center()
            .css("font-size", "20px")
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(newText("left", "completely&nbsp;<br> dissimilar&nbsp;").css("margin-right", "20px"))
            .after(newText("right", "&nbsp;completely <br>&nbsp;similar").css("margin-left", "20px"))
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    .log("FeatureMatch", row.FeatureMatch)
    .log("Word1", row.Word1)
    .log("Word2", row.Word2)
    .log("Valence", row.Valence)
    .log("Conceptual", row.Conceptual)
);
