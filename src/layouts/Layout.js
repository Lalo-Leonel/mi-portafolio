import { Navbar } from "../components/Navbar"

export const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <div className="fixed w-full">
                <Navbar/>
            </div>
            {children}
        </div>
    )
}