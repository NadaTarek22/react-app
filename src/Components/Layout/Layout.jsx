import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

export function Layout(){

    return(

        <>
            <Navbar />

            <div>
                <Outlet />
            </div>

            <Footer />
        
        </>
    )
}