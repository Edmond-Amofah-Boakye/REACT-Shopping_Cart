import React, { useContext } from 'react'
import { AppContext } from '../store/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import '../styles/Home.css'

const Home = () => {

  const {state: {Products}, filterProd: { byStock, byFastDeliver, sort, searchQuery }} = useContext(AppContext)

  const transforProducts = ()=>{
    let sortedProducts = Products;

    if(sort){
      sortedProducts = sortedProducts.sort((a, b)=>
      sort === "lowTohigh" ? a.price - b.price : b.price - a.price)
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod)=> prod.inStock)
    }

    if(byFastDeliver){
      sortedProducts = sortedProducts.filter((prod)=> prod.byFastDeliver)
    }


    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=> prod.name.includes(searchQuery))
    }


    

    return sortedProducts;
  }

  return (
    <div className='Home'>
      <div className="filter">
        <Filter />
      </div>
      <div className="singleproduct">
        {transforProducts().map((allProducts)=>{
          return <SingleProduct allProducts={allProducts} key={allProducts.id}/>
        })}
      </div>
    </div>
  )
}

export default Home