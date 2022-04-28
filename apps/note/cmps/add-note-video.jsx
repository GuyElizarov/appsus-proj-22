export class AddNoteVideo extends React.Component {

    state = {
        type: 'note-video',
        note: {
            url: '',
            title: ''
        }
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        if (field === 'url') {
            const urlId = value.split('v=')[1].substring(0, 11)
            const embeddedUrl = `https://www.youtube.com/embed/${urlId}`
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: embeddedUrl } }), () => {
            })

        } else {
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }), () => {
            })
        }
    }

    onSaveNote = (ev) => {
        ev.preventDefault()

        this.props.onGetNewNote(this.state)

    }

    render() {

        return <div>
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text-area">
                    <textarea placeholder="Enter video url" type="text" cols="30" rows="10" id="text-area" name="url" onChange={this.handleChange} />
                </label>
                <label htmlFor="title">
                    <input type="text" placeholder="Enter note title" name="title" id="title" onChange={this.handleChange}></input>
                </label>

                <button>Add Note</button>
            </form>
        </div>
    }
}