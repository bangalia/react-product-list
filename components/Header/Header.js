import './Header.css'


function Header(props) {
  const {title, productCount, categoryCount} = props;

  return (
    <div className="Header">
      <h1>{title}</h1>
      <p>Product Count: {productCount}</p>
      <p>Category Count: {categoryCount}</p>
    </div>
  )
}

export default Header