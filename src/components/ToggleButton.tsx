 import "../styles/ToggleButton.css"


interface ToggleButtonProps {

    openNavbar: () => void;
    isOpen: boolean;
    
}


export default function ToggleButton({ openNavbar, isOpen }: ToggleButtonProps) {

    return (
        <button className="toggle-button" onClick={openNavbar}>
            <div className={`line line-1 ${isOpen ? 'rotate45' : ''}`}></div>
            <div className={`line line-2 ${isOpen ? 'opacity-none' : ''}`}></div>
            <div className={`line line-3 ${isOpen ? 'rotate-45' : ''}`}></div>
        </button>
    )
}
