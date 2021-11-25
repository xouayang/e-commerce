import React from 'react'
import {Container,Col,Row,Button} from 'react-bootstrap'
import Picture from '../image/me.jpg'
const About = () => {
    return (
        <Container className="mt-5">
           <Row className="mt-3">
           <Col xs="auto" md={6} className="text-center">
                 <h5>ພວກເຮົາບໍລິການຂາຍສີນຄ້າອອນລາຍ</h5>
              </Col>
              <Col xs="auto" md={6} className="text-center" style={{width:'570px'}}>
                  <h6>ການຊື້ເຄື່ອງອອນໄລນ໌ແມ່ນຮູບແບບຂອງການຄ້າເອເລັກໂຕຣນິກທີ່ຜູ້ບໍລິໂພກສາມາດຊື້ສິນຄ້າໂດຍກົງຫຼືຈາກການບໍລິການຂອງຜູ້ຄ້າຜ່ານຕົວທ່ອງເວັບ.
                  ຜູ້ບໍລິໂພກຈະຊອກຫາຜະລິດຕະພັນທີ່ຫນ້າສົນໃຈໂດຍການໄປຢ້ຽມຢາມເວັບໄຊທ໌ຂອງຮ້ານໂດຍກົງຫຼືຊອກຫາຜູ້ຂາຍທີ່ແຕກຕ່າງກັນໂດຍຜ່ານເຄື່ອງຈັກຊອກຫາການຄ້າ.
                  ໃນ​ປີ 2016, ຜູ້​ບໍ​ລິ​ໂພກ​ສາ​ມາດ​ຊື້​ເຄື່ອງ​ອອນ​ໄລ​ນ​໌​ຈາກ​ຄອມ​ພິວ​ເຕີ​ຫຼື​ອຸ​ປະ​ກອນ​ທີ່​ຫຼາກ​ຫຼາຍ​ເຊັ່ນ​: ຄອມ​ພິວ​ເຕີ​ຕັ້ງ​ໂຕະ​, ແລັບ​ທັອບ​, ແທັບ​ເລັດ​ຄອມ​ພິວ​ເຕີ​ແລະ​ໂທລະ​ສັບ​ສະ​ຫຼາດ​.
                  </h6>
              </Col>
           </Row>

           <Row className="mt-5">
               <Col xs="auto" md={6} className="text-center" >
                <img style={{width:'300px',borderRadius:'20px'}} src={Picture} alt="me"/>
               </Col>
               <Col xs="auto" md={6} className="text-center mt-5" >
                  <h5 className="mt-5">ເເອດມີນເຮົາສາມາດໃຫ້ຄຳປຶກສາ</h5>

                  <Button className="mt-5" style={{width:'200px',height:'45px',borderRadius:'50px'}} variant="danger">ຕີດຕໍ່</Button>
               </Col>
           </Row>
        </Container>
    )
}

export default About
