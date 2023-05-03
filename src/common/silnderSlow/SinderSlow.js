import anh8 from '../../components/anh8.jpg'
import anh9 from '../../components/anh9.jpg'
import anh10 from '../../components/anh10.jpg'
import './Slow.css'


import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={anh8}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Chào mừng bạn đến với blog của mình</h2>
          <p>nơi đây có một số thông tin có thể có ích cho bạn</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={anh9}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>blog vể sức khỏe và một số vấn đề khác nhé</h2>
          <p>sức khỏe là vốn quý rất quan trọng các bạn hãy chú ý giữ gìn</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={anh10}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Khám phá một số thông tin quan trọng</h2>
          <p>
            hãy bình tĩnh và khám phá một số thông tin trong blog của mình
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;