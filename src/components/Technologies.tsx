import '../styles/Technologies.css';


const technologies = [
    {
        id: 'flutter',
        src: '/icons/technologies/flutter-icon.svg',
        alt: 'flutter-icon',
        url: 'https://flutter.dev/'
    },
    {
        id: 'react',
        src: '/icons/technologies/react-icon.svg',
        alt: 'react-icon',
        url: 'https://react.dev/'
    },
    {
        id: 'nodejs',
        src: '/icons/technologies/nodejs-icon.svg',
        alt: 'nodejs-icon',
        url: 'https://nodejs.org/en'
    },
    {
        id: 'angular',
        src: '/icons/technologies/angular-icon.svg',
        alt: 'angular-icon',
        url: 'https://angular.dev/'
    },
    {
        id: 'nestjs',
        src: '/icons/technologies/nestjs-icon.svg',
        alt: 'angular-icon',
        url: 'https://nestjs.com/'
    },


]


export default function Technologies() {
    return (
        <div className='technologies'>
            <h3>Technologies we use</h3>
            <ul className="technologies-row">
                {technologies.map(tech =>
                    
                    <li key={tech.id}>
                        <a href={tech.url} target='_blank'>
                            <img src={tech.src} alt={tech.alt} className='tech-icon' />
                        </a>
                    </li>

                )}


            </ul>


        </div>
    )
}
