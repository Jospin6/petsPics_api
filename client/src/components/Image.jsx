export const Image = (props) => {
    const {src, alt, style} = props
    return <img src={src} alt={alt} className={style} />
}