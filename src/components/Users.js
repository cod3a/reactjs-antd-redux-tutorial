import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

import getColumnSettings from '../features/users/components/columnsSettings';
import {
    actionCreators as usersActions,
    selector as usersSelector,
  } from '../features/users';

const Users = () => {
    const { users } = useSelector((state) => usersSelector(state));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(usersActions.list())
    }, [dispatch])

    return (
        <Table
            columns={getColumnSettings()}
            dataSource={users.dataList}
            loading={users.isLoading}
            rowKey={'id'}
        />);
}

export default Users;