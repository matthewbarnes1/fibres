import Head from '../components/header'
import './contact.css'

export default function Page(){
    return <>
    <Head></Head>
    <h1>This is the contact page</h1>

    <div className="card">
         {/* Two options, book directly through calendly, or contact using static # and email */}
        <div className="book">
            <h2>Book a free consultation!</h2>
            <p>Let's review your goals, and plan a strategic approach to reaching your full potential!</p>
        </div>

        <div className="contact">
            <h2>Contact us directly!</h2>
            <p>Call: 647-999-9287</p>
            <p>Email: team@flourishingfibers.ca</p>
        </div>
    </div>
    </>
}