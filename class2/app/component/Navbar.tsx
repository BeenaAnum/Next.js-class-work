import Link from "next/link"

function Navbar() {
return(
  <ul className="flex justify-center items-center gap-4 my-4 bg-black" >

       <li><Link href="/" className="bg-blue-900" >
          Home </Link>
        </li>
       
        <li><Link href="/about" className="bg-green-600" >
           About </Link>
        </li>

        <li><Link href="/contact" className="bg-yellow-700" >
           Contact </Link>
        </li>

        <li>
        <Link href="/feedback" className="bg-red-800" >
           Feedback </Link>
        </li>
    </ul>
);
}

export default Navbar