import React, { useContext } from 'react'
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { passingProducts } from '../Components/Main';
import Navbar from '../Components/Navbar'

const Cat = () => {
    const {products}=useContext(passingProducts)
    const nav=useNavigate()
    const filteredData=products.filter((item) => item.Animal === "Cat");
  return (<>
  <Navbar/>
  <br /><br /><br />
  <div className="d-flex align-items-center justify-content-center flex-wrap " style={{width:'100%',height:700 ,overflow:'auto'}}>
   {filteredData.map((datas)=>(      
  
<Card 
    className="shadow m-2 bg-body-tertiary rounded"
style={{ width: '11rem', height:'20rem', alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between" }}>
<Card.Img style={{height:"9rem", width:'6rem'}} variant="top" src={datas.Image} />
<Card.Body>
<Card.Title style={{fontSize:'small'}}>{datas.ProductName}</Card.Title>
<Card.Text>
    <per className="text-decoration-line-through">₹{datas.OldPrice}</per>   <br/>       
    ₹{datas.Price}
</Card.Text>
<Button variant="primary" onClick={()=>nav(`/show/${datas.Id}`)}>Shopnow</Button>
</Card.Body>
</Card>
))}
   </div>
  </> )
}

export default Cat
