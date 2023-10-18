const Card = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.img} alt="Avatar" style={{width: '100%'}}/>
                <div className="container">
                    <h4><b>{props.title}</b></h4> 
                    <p>{props.description}</p> 
                </div>
            </div>
        </>
    )

}

export default Card