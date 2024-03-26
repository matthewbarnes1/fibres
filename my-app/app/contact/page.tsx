import Head from '../components/header'
import './contact.css'

export default function Page(){
    return <>
    <Head></Head>
    <div className="wrap">
         {/* Two options, book directly through calendly, or contact using static # and email */}
        <div className="book">
            <h2>Schedule a meeting</h2>
            <p>Let's talk about your goals, and plan a strategic approach to reaching your full potential!</p>
        {/* This will link to calendly page (or use api to embed directly into site both works) */}
        </div>

        <div className="contact">
            <h2>Contact us directly!</h2>
            <p>Call: 647-000-0000</p>
            <a href="mailto:team@flourishingfibers.ca">Email: team@flourishingfibers.ca</a>
        </div>
    </div>
    </>
}