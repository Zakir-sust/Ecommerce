import React from 'react'
import img from '../images/laptop.jpeg'
import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard'
import Navigation from './Navigation'
export default function Products(props) {
  console.log('props',props)
  const navigate = useNavigate()
  const handleClick = (b,e)=>{
    e.preventDefault()
    console.log('state at product',b)
    navigate('/product',{state:b});
  }
  const elem = 
    props.obj.map(item=>
     <MyCard obj={item} key = {item.name}/>
    )
  return (
    <div  
      style={{padding:20,margin:20}}
    >
      
      <h3>Products</h3>
      <div style={{display:'inline-flex',flexWrap:'wrap',margin:10}}>
        {elem}
      </div>
    </div>
  )
}
