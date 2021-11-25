import React from 'react'
import {Container,Col,InputGroup,FormControl} from 'react-bootstrap'

import '../App.css'
const ProductOverview = () => {
    return (
        <Container className="mt-4">
           <Col className="mt-5 " style={{borderBottom:'1px solid #dfe6e9'}}>
              <h4>ພາບລວມຂອງຜະລິດຕະພັນສີນຄ້າ</h4>

              <Col xs="auto" md={12} className="mt-5" style={{
                  display:'flex',
                  justifyContent:'space-between',
                  width:'800px'
                  }} >
                <h6 className="heading" style={{cursor:'pointer',fontSize:'17px'}} >ສີນຄ້າທັງໝົດ</h6>   
                <h6 className="heading"  style={{cursor:'pointer',fontSize:'17px'}}>ສີນຄ້າສຳລັບຜູ້ຍິງ</h6>   
                <h6  className="heading"  style={{cursor:'pointer',fontSize:'17px'}}>ສີນຄ້າສຳລັບຜູ້ຊາຍ</h6>     
                <h6  className="heading"  style={{cursor:'pointer',fontSize:'17px'}}>ສີນຄ້າປະເພດກະເປົາ</h6>     
                <h6  className="heading"  style={{cursor:'pointer',fontSize:'17px'}}>ສີນຄ້າປະເພດເກີບ</h6>     
              </Col>
            
           </Col> 
        </Container>
    )
}

export default ProductOverview
