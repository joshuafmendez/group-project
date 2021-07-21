import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <section>
            <nav>
                <NavLink to="">Home</NavLink>
                <NavLink to="">Products</NavLink>
                <NavLink to="">New Products</NavLink>
            </nav>
        </section>
    )
}

export default NavBar



