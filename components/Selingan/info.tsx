interface Props {
    children: React.ReactNode;
    tajuk?: string
}


const Info: React.FC<Props> = ({children, tajuk}) => {
    return <div className="bg-info text-info-tulisan px-4 py-2 rounded border border-info-tulisan my-3">
        { tajuk && <strong>{tajuk}</strong> }
        <p>{children}</p>
    </div>
} 

export default Info