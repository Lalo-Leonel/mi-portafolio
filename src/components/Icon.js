
export const Icon = ({children, url}) => {
    return(
        <div className="text-white text-3xl">
            <a href={url} target="_blank" rel="noreferrer">
                {children}
            </a>
        </div>
    )
}