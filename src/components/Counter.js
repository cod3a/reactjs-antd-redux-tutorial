import React, { useCallback } from 'react';

import { Row, Col, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actionTypes } from '../redux';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // const increment = () => dispatch({type: actionTypes.INCREMENT})
    // const decrement = () => dispatch({type: actionTypes.DECREMENT})

    const increment = useCallback(
        () => dispatch({ type: actionTypes.INCREMENT }),
        [dispatch]
    )
    const decrement = useCallback(
        () => dispatch({ type: actionTypes.DECREMENT }),
        [dispatch]
    )
    console.log('test')
    return (
        <React.Fragment>
            <Card title="Counter Master-Blaster:" bordered={false}>
                <Row>
                    <Col md={9} />
                    <Col md={2}>
                        <Button size="large" icon="minus" shape="circle" onClick={decrement} />
                    </Col>
                    <Col md={2}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{counter}</span>
                    </Col>
                    <Col md={2}>
                        <Button size="large" icon="plus" shape="circle" onClick={increment} />
                    </Col>
                    <Col md={9} />
                </Row>
            </Card>
        </React.Fragment>
    )
}

export default Counter;