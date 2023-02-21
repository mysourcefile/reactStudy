import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, incress_btn } from './../store.js';
function Cart() {


    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();
    return (
        <div>
            <h6>{state.user.name}의 장바구니 {state.user.age}의 나이</h6>
            <button onClick={() => dispatch(changeAge(100))}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                        console.log(state);
                                        dispatch(incress_btn(state.cart[i].id))
                                    }}>+</button>

                                </td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart