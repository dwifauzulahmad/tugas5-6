export default function Electronic(props){
    return(
        <>
        <div className="card">
            <div>{props.id}</div>
            <div>{props.nama}</div>
            <div>{props.harga}</div>
        </div>
        </>
    )
}