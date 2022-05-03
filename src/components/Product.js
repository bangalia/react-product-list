

function Product(props) {
    const { name, description, price, category, rating} = props
  
    return (
      <div className="Product">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <small>Category: {category} | Rating: {rating}</small>
      </div>
    )
  }
  
export default Product