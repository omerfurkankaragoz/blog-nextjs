import Link from 'next/link'

export default function Footer(){
    return (

            <footer className="mt-40 ">
                <nav className="space-x-4">
                    <div className="header-end">
                        <div className="">
                           <div>
                               <Link href="https://www.linkedin.com/in/omerfurkankaragoz/" className="icon-radius fab fa-twitter">
                                   <a></a>
                               </Link>
                           </div>
                        </div>
                    </div>
                </nav>
            </footer>

    )
}