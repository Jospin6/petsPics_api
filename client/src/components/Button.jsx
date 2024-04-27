
export const Button = ({onclick, text, className}) => {
    return <button onClick={onclick} className={`py-[2px] px-[10px] 
    rounded-lg text-white text-[15px] ${className}`}>
        {text}
    </button>
}