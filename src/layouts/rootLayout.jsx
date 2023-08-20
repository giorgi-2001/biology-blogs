import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header className="header">
                <nav className="header__nav">
                    <h1>Biology Blogs</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="create">Create</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RootLayout;