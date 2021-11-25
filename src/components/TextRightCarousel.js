import React from 'react'
import {Col} from 'react-bootstrap'
import ReactTypingEffect from  'react-typing-effect'
const TextRightCarousel = () => {
    return (
        <Col xs="auto" md={6} style={{background:"#ff7675"}} className="text-center">
           <h5 className="mt-5 text-white">ການຂາຍສິນຄ້າອອນລາຍເປັນອິກຊ່ອງທາງໜຶ່ງທີ່ສະດວກ</h5>
           <h5 className="mt-3 mb-5 text-white">ສຳລັບລູກຄ້າທຸກຄົນ</h5>
            <h5 className="text-white">
            <ReactTypingEffect  text="ຂອບໃຈລູກຄ້າທຸກຄົນທີ່ມາບໍລິການ" speed={100} eraseSpeed={50} typingDelay={50}/>
            </h5>           
        </Col>
    )
}

export default TextRightCarousel
