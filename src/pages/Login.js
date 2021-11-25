import React from 'react'
import {Container,Row,Col,FormControl,Button,FormCheck, InputGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Logo from '../image/logoProduct.png'
import Facecbook from '../image/facebook.png'
import Google from '../image/google.png'
import Instagram from '../image/instagram.png'
const Login = () => {
  const navigate = useNavigate();

  const registerPage = () => {
    navigate('/Register')
  }
    return (
      <Container className=" mt-4" style={{width:'900px'}}>
       <Row className="mt-5">
        <Col xs="auto" md={6} className="p-2 text-center" style={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
          <img src={Logo} style={{width:'80px', height:'80px',borderRadius:'100px'}} alt="logo"/>
         <h5 className="mt-3">ເຂົ້າສູ່ລະບົບ</h5><br/>
         <FormControl className="mb-4" type="email" placeholder="ອີເມວ"/>
         <FormControl  type="password" placeholder="ລະຫັດຜ່ານ"/>
            <FormCheck style={{ width:'160px'}} className="mt-2" type="checkbox" label="ຈື່ຈຳການເຂົ້າສູ່ລະບົບ" />
            <p className="mt-2 text-right" style={{cursor:'pointer'}}>ລືມລະຫັດຜ່ານ</p>
         <Button style={{width:'200px'}} className="mt-2 mb-4" variant="danger">ເຂົ້າສູ່ລະບົບ</Button>
        </Col>  
        <Col className="text-center" xs="auto"  md={6} style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 4px', margin:'0 auto'}}>
        <h5 className="mt-3">ເຂົ້າສູ່ລະບົບດ້ວຍ</h5><br/>  
      <InputGroup className="mb-4" style={{margin:'0px 0px 0px 80px'}}>
        <InputGroup.Text>
        <img style={{width:'40px',height:'40px',borderRadius:'50px'}} src={Facecbook}/>
        </InputGroup.Text>
      <Button variant="default" style={{border:'1px solid gray'}}>ເຂົ້າສູ່ລະບົບດ້ວຍ facebook</Button>
      </InputGroup>

      <InputGroup className="mb-4"  style={{margin:'0px 0px 0px 80px'}}>
        <InputGroup.Text>
        <img style={{width:'40px'}} src={Google}/>
        </InputGroup.Text>
      <Button variant="default" style={{border:'1px solid gray',width:'190px'}}>ເຂົ້າສູ່ລະບົບດ້ວຍ Google</Button>
      </InputGroup>

      <InputGroup className="mb-4"  style={{margin:'0px 0px 0px 80px'}}>
        <InputGroup.Text>
        <img style={{width:'40px'}} src={Instagram}/>
        </InputGroup.Text>
      <Button variant="default" style={{border:'1px solid gray'}}>ເຂົ້າສູ່ລະບົບດ້ວຍ Instagram</Button>
      </InputGroup>

       <h6>ຫຼື</h6>

        <Button className="mt-3" style={{width:'190px'}}  variant="primary" onClick={() => registerPage()}>ລົງທະບຽນ</Button>
        </Col> 
        </Row>   
      </Container>  
    )
}

export default Login
