import Card from "./card"

const Cards = () => {
    const myStyle = {
        marginLeft: "5rem"
    }
    return(
        <>
            <p style={myStyle}>Discover our campuses</p>
            <div className="content">
                <Card
                    title={"Shangai"}
                    description={"Learn to code with us at Shangai"}
                    img={"https://www-img.lewagon.com/fQHMAJyW0nB5ynCTnGBj8byTxarU8HOchRk-i4L2iFI/rs:fill:152:152/plain/s3://wagon-www/vgpy35mxntchpkdrr1sxob0nr1yh"}
                />
                <Card
                    title={"London"}
                    description={"Learn to code with us at London"}
                    img={"https://www-img.lewagon.com/jdhezYI9Vg5XgiQTjALtm1x6ILKLWbU51YfF5t_sqjA/rs:fill:152:152/plain/s3://wagon-www/j383yrpjc4khbnn2urg1fnxarjsc"}
                />
                <Card
                    title={"Mauritius"}
                    description={"Learn to code with us at Mauritius"}
                    img={"https://www-img.lewagon.com/E13--9xxJ0G-D4g_UF4LvvES3mSihf3xkhMevBY-pKI/rs:fill:152:152/plain/s3://wagon-www/4lzmd4115swoeojlr01favcyszaf"}
                />
            </div>
            
        </>
    )
}

export default Cards