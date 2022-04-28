import { mailService } from "../services/mail-service.js"

export class MailDetails extends React.Component {

    state = {
        mail: {}
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then(mail => this.setState({ mail }))
    }

    returnToList = () => {
        this.props.history.push('/mail')
    }
 
    render() {
        const { mail } = this.state
        return <section className="mail-details">
            <h3>{mail.subject}</h3>
            <p>from: {mail.from}</p>
            <p>Name: {mail.name}</p>
            <p>to: {mail.to}</p>
            <p>Body: {mail.body}</p>

            <button onClick={this.returnToList}>↤</button>
        </section>
    }
}