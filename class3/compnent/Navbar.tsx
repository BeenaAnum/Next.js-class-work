import Link from "next/link";
//2nd class
// export default function Navbar(){
//     return(
//        <ul className="navbar flex justify-center items-center gbp-4">
//             <li><Link href="/"  className="nav-link bg-black-400"> 
//             Home
//            </Link></li>
//             <li><Link href="/about" > 
//             About
//            </Link></li>
          
//             <li><Link href="/contact" >
//             Contact
//            </Link></li>
          
//             <li><Link href="/feedback"> 
//             Feedback
//            </Link></li>
          
//             <li><Link href="/country"> 
//             Country
//            </Link></li>
//           </ul>
//     )

// }
//3rd class
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