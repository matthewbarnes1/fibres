import Head from './components/header'
import Foot from './components/footer'
export default function Page(){
    return <>
        <Head></Head>
        <h1>This is the home page</h1>
        <div className="section">
            {/* The first thing the user sees when visiting the site - needs to be good */}
            {/* Include some fancy visual / capturing title here with slogan */}
        </div>

        <div className="section2">
            {/* Include some 'trusted by the best' slide */}
        </div>

        <div className="section3">
            {/* Banner-module that includes our 3 services */}
        </div>

        <Foot></Foot>

    </>

}