import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return(
        <nav className='navbar'>
            <Link href='/' className={router.pathname === '/' ? 'active' : ''}>
                Home
            </Link> 
        </nav>
    )
}

export default Navbar;