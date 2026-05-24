const doc = document

// journal colors
const colors = {
    "happy": {
        "bgColor": "#FFF9C4",
        "textColor": "#F57F17",
        "borderColor": "#FBC02D"
    },
    "sad": {
        "bgColor": "#BBDEFB",
        "textColor": "#0D47A1",
        "borderColor": "#1976D2"
    },
    "angry": {
        "bgColor": "#FFCDD2",
        "textColor": "#B71C1C",
        "borderColor": "#D32F2F"
    },
    "calm": {
        "bgColor": "#C8E6C9",
        "textColor": "#1B5E20",
        "borderColor": "#388E3C"
    },
    "anxious": {
        "bgColor": "#E1BEE7",
        "textColor": "#4A148C",
        "borderColor": "#8E24AA"
    },
    "excited": {
        "bgColor": "#FFE0B2",
        "textColor": "#E65100",
        "borderColor": "#FB8C00"
    },
    "motivated": {
        "bgColor": "#D1C4E9",
        "textColor": "#311B92",
        "borderColor": "#5E35B1"
    },
    "tired": {
        "bgColor": "#CFD8DC",
        "textColor": "#37474F",
        "borderColor": "#607D8B"
    },
    "focused": {
        "bgColor": "#B2DFDB",
        "textColor": "#004D40",
        "borderColor": "#00796B"
    },
    "lonely": {
        "bgColor": "#D7CCC8",
        "textColor": "#4E342E",
        "borderColor": "#6D4C41"
    },
    "grateful": {
        "bgColor": "#DCEDC8",
        "textColor": "#33691E",
        "borderColor": "#689F38"
    },
    "confused": {
        "bgColor": "#F8BBD0",
        "textColor": "#880E4F",
        "borderColor": "#C2185B"
    }
}


// this function will return the color for the journals in the left side based on the mood of the journal, if the mood is not found in the colors object, it will return the default color (white background, black text and gray border)
const colorForJournal = (mood) => {
    return colors[mood.toLowerCase()] || {
        "bgColor": "#FFFFFF",
        "textColor": "#000000",
        "borderColor": "#CCCCCC"
    } 
}


// generation of random good thoughts (in footer)
const thoughts = [
    "You are doing great!",
    "Keep up the good work!",
    "Every step counts!",
    "Believe in yourself!",
    "You are capable of amazing things!",
    "Small progress is still progress.",
    "Discipline beats motivation.",
    "Consistency compounds quietly.",
    "Done is better than perfect.",
    "Your future is built by today’s habits.",
    "Hard things become easy after repetition.",
    "Focus on direction, not speed.",
    "You don’t need permission to improve.",
    "Growth feels uncomfortable before it feels rewarding.",
    "One focused hour beats ten distracted ones.",
    "Confidence comes from evidence, not wishing.",
    "Nobody starts sharp.",
    "Skill is built, not gifted.",
    "Keep showing up, especially on bad days.",
    "The work you avoid usually matters most.",
    "A year from now, today will matter.",
    "Momentum starts with one action.",
    "Your habits are writing your future.",
    "Learning slowly is still learning.",
    "Mastery is hidden inside repetition.",
    "Protect your focus like an asset.",
    "Results come after boring consistency.",
    "The best developers debug patiently.",
    "Deep work creates deep skill.",
    "You improve faster when you stop chasing shortcuts.",
    "Every expert was once embarrassingly bad.",
    "Energy follows action.",
    "The version of you you want already exists in your routines.",
    "You don’t rise to goals, you fall to systems.",
    "Effort matters even when results are delayed."
];

const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)]
const thoughtEl = doc.getElementById("thought")  // add this element in the footer of HTML

if (thoughtEl) {
    thoughtEl.textContent = randomThought
}


// Saving the journal in local storage
const saveJournal = () => {
    const title = doc.getElementById("title")
    // const date = doc.getElementById("date")  //TODO: uncomment it later
    const mood = doc.getElementById("tags")
    const content = doc.getElementById("content")

    console.log(title.value)
    console.log(mood.value)
    console.log(content.value)

    const journals = JSON.parse(localStorage.getItem("journals")) || []

    journals.push({
        id: journals.length,
        title: title.value,
        // date: date.value,  //TODO: uncomment it later
        mood: mood.value,
        content: content.value
    })

    localStorage.setItem("journals", JSON.stringify(journals))
}

const save = document.getElementById("save")
console.log(save)

if (save) {
    save.addEventListener("click", (e) => {
        saveJournal();
    })
} else {
    console.warn('Save button not found')
}


