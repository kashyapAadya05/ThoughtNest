const doc = document


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

if(thoughtEl) {
    thoughtEl.textContent = randomThought
}


// Saving the journal in local storage

const saveJournal = () => {
    const journalEl = doc.getElementById("title")
    const tagsEl = doc.getElementById("tags")
    const contentEl = doc.getElementById("content")

    const journal = journalEl ? journalEl.value : null
    const tags = tagsEl ? tagsEl.value : null
    const content = contentEl ? contentEl.value : null

    console.log(journal)
    console.log(tags)
    console.log(content)

    const journals = JSON.parse(localStorage.getItem("journals")) || []

    journals.push({
        id: journals.length,
        journal: journal,
        tags: tags,
        content: content
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


