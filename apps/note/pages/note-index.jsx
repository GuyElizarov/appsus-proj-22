import { NoteService } from '../services/note-service.js'

import { NotesPreview } from '../cmps/notes-preview.jsx'
import { AddNote } from '../cmps/add-note.jsx'
export class NoteApp extends React.Component {

    state = {
        notes: []

    }

    componentDidMount() {
        NoteService.query().then(res => this.setState({ notes: res }, () => console.log(this.state)))



    }

    render() {
        return <section className="note-app">
            <h1>i AM The note app</h1>
            <AddNote />
            <NotesPreview />
        </section>
    }
}