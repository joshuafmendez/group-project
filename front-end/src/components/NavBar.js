import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <section>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/products/new">New Products</NavLink>
            </nav>
        </section>
    )
}

export default NavBar



