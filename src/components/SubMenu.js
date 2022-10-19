export const SubMenu = ({description}) => {
    return(
        <div className="flex flex-row justify-start items-center pt-20">
        <div className="bg-sky-500 h-1 w-40 mr-4"></div>
        <h4 className="text-white text-lg font-sans">{description}</h4>
      </div>
    )
}