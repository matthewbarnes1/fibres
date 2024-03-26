import Link from 'next/link'

export default function Head(){
    return <>
    <div className="Logo / title">
    <h1>
    <Link href="/">Flourishing Fibers</Link>
    </h1>
    </div>
    
    <nav>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/solutions">Solutions</Link>
        </li>
        <li>
        <Link href="/philosophy">Philosophy</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
    </nav>
    </>
}
