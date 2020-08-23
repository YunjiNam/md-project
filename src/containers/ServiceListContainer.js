import React from 'react';
import { connect } from 'react-redux';
import ServiceList from '../components/ServiceList';
import { getList } from '../modules/lists';

const ServiceListContainer = ({ lists, getList }) => {
    return <ServiceList lists={lists} getList={getList} />;
};

export default connect(
    state => ({
        lists: state.lists.lists,
    }),
    {
        getList
    },
)(ServiceListContainer);

