interface Props {
    children: React.ReactNode
}


const Amaran: React.FC<Props> = ({children}) => {
    return <div className="bg-amaran text-amaran-tulisan px-4 py-2 rounded border border-amaran-tulisan">
        <p>{children}</p>
    </div>
} 

export default Amaran