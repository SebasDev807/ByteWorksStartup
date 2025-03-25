import { useEffect, useState } from "react";

export const useNavbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('Navbar toggle:', !isMenuOpen)
    }

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return { isMenuOpen, handleOpenNavbar }
}





