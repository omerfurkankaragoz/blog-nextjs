import Link from 'next/link'

export default function Header(){
    return (
        <header className=" site-container py-6 ">
            <nav className="space-x-4">
               <div className="header-end">
                   <Link href="mailto:omerfurkankaragozz@gmail.com">
                       <a>İletişim</a>
                   </Link>
               </div>
            </nav>
        </header>
    )
}