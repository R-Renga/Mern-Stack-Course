const Productcard = ({title,img}) => {
    return (
        <div className="product-card">
        <img src={img} alt="img" className="product-img" />
        <h1>{title}</h1>
      </div>
    )
}


export default Productcard;