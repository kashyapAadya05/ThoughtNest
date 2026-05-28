const doc = document

const title = doc.getElementById("title")
const date = doc.getElementById("date")
const mood = doc.getElementById("mood")
const content = doc.getElementById("content")
const tags = doc.getElementById("tags")

date.value = new Date().toISOString().split('T')[0]

console.log(new Date().toDateString())

// journal colors
const colors = {
    "happy": { "bg": "#FFB30022", "text": "#FFD54F", "border": "#FFB30055" },
    "sad": { "bg": "#0091EA22", "text": "#40C4FF", "border": "#0091EA55" },
    "angry": { "bg": "#D5000022", "text": "#FF5252", "border": "#D5000055" },
    "calm": { "bg": "#00C85322", "text": "#69F0AE", "border": "#00C85355" },
    "anxious": { "bg": "#7C4DFF22", "text": "#B388FF", "border": "#7C4DFF55" },
    "excited": { "bg": "#FF572222", "text": "#FF8A65", "border": "#FF572255" },
    "motivated": { "bg": "#FF408122", "text": "#FF80AB", "border": "#FF408155" },
    "tired": { "bg": "#607D8B22", "text": "#90A4AE", "border": "#607D8B55" },
    "focused": { "bg": "#00E5FF22", "text": "#18FFFF", "border": "#00E5FF55" },
    "lonely": { "bg": "#6D4C4122", "text": "#BCAAA4", "border": "#6D4C4155" },
    "grateful": { "bg": "#AEEA0022", "text": "#CCFF90", "border": "#AEEA0055" },
    "confused": { "bg": "#F5005722", "text": "#FF80AB", "border": "#F5005755" },
    "other": { "bg": "#BDBDBD22", "text": "#E0E0E0", "border": "#BDBDBD55" }
}


// this function will return the color for the journals in the left side based on the mood of the journal, if the mood is not found in the colors object, it will return the default color (white background, black text and gray border)
const colorForJournal = (mood = "other") => {
    return colors[(mood || "other").toLowerCase()] || colors.other
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
    "Your future is built by today's habits.",
    "Hard things become easy after repetition.",
    "Focus on direction, not speed.",
    "You don't need permission to improve.",
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
    "Deep work creates deep skill.",
    "You improve faster when you stop chasing shortcuts.",
    "Every expert was once embarrassingly bad.",
    "Energy follows action.",
    "The version of you you want already exists in your routines.",
    "You don't rise to goals, you fall to systems.",
    "Effort matters even when results are delayed."
];

const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)]
const thoughtEl = doc.getElementById("thought")  // add this element in the footer of HTML

if (thoughtEl) {
    thoughtEl.textContent = randomThought
}

// emojis for moods
const moodEmojis = {
    happy: '😁',
    sad: '😢',
    angry: '😡',
    calm: '😌',
    anxious: '😰',
    excited: '🤩',
    motivated: '💪',
    tired: '😴',
    focused: '🎯',
    lonely: '😔',
    grateful: '🙏',
    confused: '🤔',
    other: '📝'
}


// delete journal by id
const deleteJournalById = (id) => {
    const journals = JSON.parse(localStorage.getItem("journals")) || []
    const filtered = journals.filter(entry => entry.id !== id)
    localStorage.setItem("journals", JSON.stringify(filtered))
}


// Saving the journal in local storage
const saveJournal = () => {

    if (!title.value || !mood.value || !content.value) return;

    const journals = JSON.parse(localStorage.getItem("journals")) || []

    journals.push({
        id: Math.random().toString(36),
        title: title.value,
        date: date.value,
        mood: mood.value || "other",
        content: content.value,
        tags: tags.value
            .split(",")
            .map((tag) => tag.trim())
            .filter(tag => tag !== "")
    })

    localStorage.setItem("journals", JSON.stringify(journals))
}

const save = doc.getElementById("save")
console.log(save)

if (save) {
    save.addEventListener("click", (e) => {
        e.preventDefault()
        saveJournal();
        clearForm();
        renderJournals();
    })
} else {
    console.warn('Save button not found')
}



const renderJournals = () => {
    const journals = JSON.parse(localStorage.getItem("journals")) || [];
    const journalList = doc.querySelector(".entries-list")

    if (!journalList) {
        return
    }

    if (journals.length === 0) {
        journalList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-badge">Start here</div>
                <h2>No entries yet</h2>
                <p>Write your first thought.</p>
            </div>
        `
        return
    }

    journalList.innerHTML = journals.map(journal => {
        const color = colorForJournal(journal.mood) || colors["other"]
        const tags = Array.isArray(journal.tags) ? journal.tags : []

        return `
<li class="journal-entry" style="background-color: ${color.bg}; color: ${color.text}; border: 2px solid ${color.border};">
    <div class="journal-header">
        <h3 class="card-title">${journal.title}</h3>
        <button class="btn-icon" data-id="${journal.id}" title="Delete">
            <span class="material-symbols-outlined" style="pointer-events: none;">delete</span>
        </button>
    </div>
    
    <div class="journal-meta">
        <span class="journal-date">📅 ${journal.date}</span>
        <span class="journal-mood" style="background-color: ${color.bg}; color: ${color.text}; border-color: ${color.border};">
            ${moodEmojis[journal.mood] || moodEmojis.other} ${journal.mood}
        </span>
    </div>

    <div class="card-excerpt">
        ${journal.content}
    </div>

    ${tags.length > 0 ? `
    <div class="journal-tags">
        ${tags.map((tag) => `<span class="tag" style="background-color: ${color.border}; color: ${color.text};">#${tag}</span>`).join("")}
    </div>
    ` : ''}
</li>
`;
    }).join("")

    journalList.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id
            if (!id) return
            deleteJournalById(id)
            renderJournals()
        })
    })
}

// clear the form
const clearForm = () => {
    if (title) title.value = ""
    if (date) date.value = new Date().toISOString().split('T')[0]
    if (mood) mood.value = ""
    if (tags) tags.value = ""
    if (content) content.value = ""
    if (title) title.focus()
}

const cancel = doc.getElementById("cancel")
console.log(cancel)
if (cancel) {
    cancel.addEventListener("click", (e) => {
        clearForm();
    })
} else {
    console.warn('Cancel button not found')
}



// Displaying the journals in the left side
renderJournals()