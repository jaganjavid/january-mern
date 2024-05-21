import useTheme from "../custom-hook/theme"


const Header = () => {

    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">My Shop</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Cart</a></li>
                    <li>
                        <details>
                            <summary>
                                Jagan
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Profile</a></li>
                                <li onClick={toggleTheme}><a>
                                    {
                                        theme === "light" ? "Light" : "Dark"
                                    }</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header