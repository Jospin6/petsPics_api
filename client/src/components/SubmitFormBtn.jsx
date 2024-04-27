
export const SubmitFormBtn = ({text, className}) => {
    return <button 
        type="submit" 
        className={`py-[5px] bg-blue-500 mt-4 
        rounded-md text-white ${className}`}>
        { text }
    </button>
}