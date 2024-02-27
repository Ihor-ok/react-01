import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home pages</NavLink>
                    <NavLink to="/dogs">Collection</NavLink>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>Footer</footer>
            
        </div>

    )
};

export default Layout;