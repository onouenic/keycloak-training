import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li className="my-1"><Link className="hover:bg-gray-500" href="/">Home</Link></li>
      <li className="my-1"><Link className="hover:bg-gray-500" href="/">Products</Link></li>
      <li className="my-1"><Link className="hover:bg-gray-500" href="/">Create Products</Link></li>
    </ul>
  )
}