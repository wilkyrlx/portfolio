import { FC } from "react";

const BounceButton: FC = () => {
    return (
        <div className="scroll-down-button" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default BounceButton;