import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBBtn,
  } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { passingProducts } from './Main';
import Navbar from './Navbar'

const ShowProducts = () => {
    const {products,userData}=useContext(passingProducts)
    const {Id}=useParams()
    const Showitems=products.find((x)=>x.Id === parseInt(Id))
   const nav=useNavigate()
    const cartshowing=()=>{              
      let dataUser=userData.cart.find((item)=>item.Id ===Showitems.Id)
      if(!dataUser){
        userData.cart.push(Showitems)
        toast.success('Add to cart')  
      
      }else{
        toast.success('Quantity+1')  
        dataUser.Qty +=1  
      }
           }
           
  return (
   <>
   <Navbar/>
    <br/><br/>    
    <div style={{width:'100%', height:'700px',overflow:'auto'}}>
            <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={Showitems.Image} fluid alt={Showitems.ProductName}   style={{ width: '15rem', height:'20rem'}}></MDBCardImage>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{Showitems.ProductName}</MDBCardTitle>
              <MDBCardText> 
             
   <span style={{color:'red'}}>-15%</span>  ₹<b>{Showitems.Price}</b>(inclusive of all taxes)<br/>
M.R.P.: ₹<span className="text-decoration-line-through">{Showitems.OldPrice}</span>


    <br/>    <strong> Proudect detiles</strong>
    <br/>    <strong> {Showitems.Animal} Food</strong><br/>
       <per><strong>Brand:</strong>{Showitems.ProductName}</per> <br/>
          <per><strong>Stock:</strong>{Showitems.Stock}</per><br/>            
       <per><strong>It is a very healthy and 100% natural food</strong></per><br/>            
       <per><strong style={{color:'yellowGreen'}}>Powerd by :Suhaib.com</strong></per><br/>            
              </MDBCardText>  
                <MDBBtn onClick={()=>userData?cartshowing():nav('/login')}>Add to cart</MDBBtn>                          
            </MDBCardBody>
          </MDBCard>
          </div>
          <ToastContainer/>
          </>
  )
}

export default ShowProducts
