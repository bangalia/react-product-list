import './App.css';
import data, { uniqueCategories } from './data';
import ProductList from './components/ProductList/ProductList';
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header'
import Inventory from './components/Inventory';
import { useState } from 'react';


function App() {
  const [ category, setCategory ] = useState('Toys');

  return (
    <div className="App">
      
      <Header 
        title = "Chip's Cheap Bits"
        productCount = {data.length} 
        categoryCount={uniqueCategories.length}
      />

      <CategoryList 
        category={category}
        onClick={ newCategory => setCategory(newCategory) }
      />

      <ProductList 
        category={category}
      />

      <Inventory />

    </div>
  );
}

export default App;
