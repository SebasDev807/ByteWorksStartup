import { useEffect, useState } from "react";

export const useNavbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
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





interface Person {
    name:string;
    age:number;
    born:Date;
    sex: 'WOMAN' | 'MAN';
    talk: () => void;
}

const person:Person = {
    name:'Jhon doe',
    age:31,
    born: new Date('1994-01-01'),
    sex:'MAN',
    talk:function(){
        console.log(`Hi i'm ${this.name}`)
    }
}

person;