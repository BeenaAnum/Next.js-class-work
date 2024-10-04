import Link from "next/link";
//4th class
export default function Page(){
    return(
        <>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/about">About</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contact">Contact</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/feedback">Feedback</Link>
        </>
    )
}
