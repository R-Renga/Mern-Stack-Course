const Products = ({ items }) => {
    const { thumbnail, title } = items;
  
    return (
      <div className="product-card">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
      </div>
    );
  };
  
  export default Products;