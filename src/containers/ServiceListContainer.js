import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ServiceList from '../components/ServiceList';
import { getList } from '../modules/lists';


const ServiceListContainer = ({ getList, post }) => {

    const [page, setPage] = useState(1);

    const pageHandler = (dir) => {
        dir === 'next' ?  setPage(page + 1) : setPage(page - 1)
    }

    useEffect(() => {
        getList(page)
    },[getList, page]);

    return (
        <ServiceList lists={post} pageHandler={(dir) => pageHandler(dir)} />
    );
};

export default connect(
    ({ lists }) => ({
        post: lists.post,
    }),
    {
        getList
    }
)(ServiceListContainer);

