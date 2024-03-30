import getCurrentUser from '@/resources/actions/getCurrentUser'
import NavbarDropdown from './navbar-dropdown';
import { Navbar } from './Navbar';

export default async function NavbarProfile() {
    const currentUser = await getCurrentUser();
    return (
        <Navbar currentUser={currentUser} />
    )
}