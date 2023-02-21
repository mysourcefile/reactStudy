import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail';
import axios from 'axios';
import Cart from './routes/Cart.js'

export let Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let [jeego] = useState([10, 11, 12])
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NEW SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<>
          <div className='main-bg'></div>
          <Container>
            <Row>
              {
                shoes.map(function (a, i) {
                  return (
                    <ProductList now={i} shoes={shoes} />
                  )
                })
              }
            </Row>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((res) => {
                  let copy = [...shoes, ...res.data];
                  setShoes(copy);

                }).catch(() => {
                  console.log('실패함');
                })

            }}>버튼</button>
          </Container></>} />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ jeego }}>
            <Detail shoes={shoes}></Detail>
          </Context1.Provider>
        } />

        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>} >
          <Route path="/event/one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="/event/two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}>

        </Route>
      </Routes>


    </div >
  );
}
function ProductList(props) {
  return (
    <Col sm={4}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.now + 1) + '.jpg'} alt='1' width="80%"></img>
      <h4>{props.shoes[props.now].title}</h4>
      <p>{props.shoes[props.now].price}</p>
    </Col>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
