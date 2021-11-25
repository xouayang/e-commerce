import React from 'react'
import {Container,Col,Card,Button,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart } from "@fortawesome/free-solid-svg-icons";
import Picture from '../image/card.png'
import Picture1 from '../image/card1.png'
const MainProduct = () => {
    return (
        <Container className="mt-5 mb-4">
          <Row xs="auto" md={3} style={{display:'flex',justifyContent:'space-between'}}>
            <Card style={{width:'18rem'}} className="p-2">
               <Card.Img src={Picture} alt="Carimage"/>
               <Card.Body>
                   <Card.Title>ເບຣນ: ອາຊາອາດ</Card.Title>
                   <Card.Text>
                   ເບຣນອາຊາອາດ ເເມ່ນເບຣນທີ່ໄດ້ຮັບຄວາມນິຍົມຫຼາຍໃນປັດຈຸບັນ 
                   </Card.Text>
                   
               </Card.Body>
                 <Col style={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
                 <Button variant="primary" style={{borderRadius:'100px',width:'50px',height:'50px',fontSize:'20px'}}>
                 <FontAwesomeIcon icon={faCartPlus}/>
                 </Button>
                 </Col>
            </Card>


            <Card style={{width:'18rem'}} className="p-2">
               <Card.Img src={Picture1} alt="Carimage"/>
               <Card.Body>
                   <Card.Title>ເບຣນ: ອາຊາອາດ</Card.Title>
                   <Card.Text>
                   ເບຣນອາຊາອາດ ເເມ່ນເບຣນທີ່ໄດ້ຮັບຄວາມນິຍົມຫຼາຍໃນປັດຈຸບັນ 
                   </Card.Text>
                   
               </Card.Body>
                 <Col style={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
                 <Button variant="primary" style={{borderRadius:'100px',width:'50px',height:'50px',fontSize:'20px'}}>
                 <FontAwesomeIcon icon={faCartPlus}/>
                 </Button>
                 </Col>
            </Card>

            <Card style={{width:'18rem'}} className="p-2">
               <Card.Img src={Picture1} alt="Carimage"/>
               <Card.Body>
                   <Card.Title>ເບຣນ: ອາຊາອາດ</Card.Title>
                   <Card.Text>
                   ເບຣນອາຊາອາດ ເເມ່ນເບຣນທີ່ໄດ້ຮັບຄວາມນິຍົມຫຼາຍໃນປັດຈຸບັນ 
                   </Card.Text>
                   
               </Card.Body>
                 <Col style={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
                 <Button variant="primary" style={{borderRadius:'100px',width:'50px',height:'50px',fontSize:'20px'}}>
                 <FontAwesomeIcon icon={faCartPlus}/>
                 </Button>
                 </Col>
            </Card>

            <Card style={{width:'18rem'}} className="p-2">
               <Card.Img src={Picture} alt="Carimage"/>
               <Card.Body>
                   <Card.Title>ເບຣນ: ອາຊາອາດ</Card.Title>
                   <Card.Text>
                   ເບຣນອາຊາອາດ ເເມ່ນເບຣນທີ່ໄດ້ຮັບຄວາມນິຍົມຫຼາຍໃນປັດຈຸບັນ 
                   </Card.Text>
                   
               </Card.Body>
                 <Col style={{display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
                 <Button variant="primary" style={{borderRadius:'100px',width:'50px',height:'50px',fontSize:'20px'}}>
                 <FontAwesomeIcon icon={faCartPlus}/>
                 </Button>
                 </Col>
            </Card>
          </Row>   
        </Container>
    )
}

export default MainProduct
