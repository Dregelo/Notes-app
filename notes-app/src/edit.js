import { initEditPage } from "./views"
import { updateNote, removeNote } from "./notes"
import moment from "moment"

const noteTitle = document.querySelector("#note-title");
const noteBody = document.querySelector("#note-body");
const noteId = location.hash.substring(1);

initEditPage(noteId)

noteTitle.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    note.updatedAt = moment().valueOf(); 
})

noteBody.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    note.updatedAt = moment().valueOf();    
})

document.querySelector("#remove").addEventListener("click", () => {
    removeNote(noteId)
    location.assign("/index.html")
})

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        initEditPage(noteId)
    }
})

