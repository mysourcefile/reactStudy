import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Route, useParams } from 'react-router-dom';
import { Context1 } from './../App.js'
import { useDispatch } from 'react-redux';
import { addItem } from './../store.js';

function Detail(props) {
    let [count, setCount] = useState(0);
    let [alret, setAlret] = useState(true);
    let { id } = useParams();
    let [input, setInput] = useState('');
    let findProduct = props.shoes.find(function (x) {
        return x.id == id
    });
    let [tab, setTab] = useState();
    let dispatch = useDispatch();

    useEffect(() => {
        let a = setTimeout(() => { setAlret(false); }, 2000,)
        return () => {
            clearTimeout(a)
        }
    }, []);
    useEffect(() => {
        if (isNaN(input) == true) {
            alert('다시')
        }
    }, [input]);
    return (
        <Container>
            {
                alret == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
            }
            {count}
            <button onClick={() => {
                setCount(count + 1);
            }}>버튼</button>
            <Row>
                <Col sm={6}>
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="1" width="100%" />
                </Col>
                <Col sm={6}>
                    수량입력 : <input type="text" onChange={(e) => {
                        if (isNaN(e.target.value) == true) {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            setInput(e.target.value)
                            alert('다시')
                        }
                        else {
                            setInput(e.target.value)
                        }
                    }}></input>
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: findProduct.id, name: findProduct.title, count: 1 }))
                    }}>주문하기</button>
                </Col>
            </Row>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabConTent tab={tab} shoes={props.shoes}></TabConTent>
        </Container>

    );
}
function TabConTent({ tab, shoes }) {
    let [fade, setFade] = useState('');
    let { jeego } = useContext(Context1);

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)
        return () => {
            setFade('')
        }
    }, [tab])
    return (<div className={'start' + fade}>
        {[<div>{jeego}</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>)

}
export default Detail;