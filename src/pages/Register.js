import React from 'react'
import {Container,Col,Row,FormControl,FormLabel,Button} from 'react-bootstrap'
import Picture from '../image/logoProduct.png'
const Register = () => {
    return (
        <Container>
          <Row style={{margin:'0 auto'}} className="mt-2">
           <Col lg={4} md={4} sm={12} className="p-4 m-auto shadow-lg rounded">
                  <Col className="text-center mb-2">
                  <img style={{
                  width:'80px', 
                  height:'80px',
                  borderRadius:'100px',
                   
                }} 
                  src={Picture} alt="logoRegister"/>
                  </Col>
               <h6 className="text-center">ລົງທະບຽນ</h6>
           <FormLabel>ຊື່</FormLabel>
            <FormControl className="mb-2" type="text" placeholder="ຊື່"/>
            <FormLabel>ນາມສະກຸນ</FormLabel>
            <FormControl className="mb-2" type="text" placeholder="ນາມສະກຸນ"/>  

            <FormLabel>ອີເມວ</FormLabel>
            <FormControl className="mb-2" type="email" placeholder="ອີເມວ"/>
            <FormLabel>ລະຫັດຜ່ານ</FormLabel>
            <FormControl className="mb-2" type="password" placeholder="ລະຫັດຜ່ານ"/>
            <FormLabel>ຢືນຢັນລະຫັດຜ່ານ</FormLabel>
            <FormControl className="mb-2" type="password" placeholder="ຢືນຢັນລະຫັດຜ່ານ"/>
             <Col className="text-center mt-4">
             <Button style={{width:'200px'}} variant="primary">ລົງທະບຽນ</Button>
             </Col>
           </Col>
          
          </Row>   
        </Container>
    )
}

export default Register
