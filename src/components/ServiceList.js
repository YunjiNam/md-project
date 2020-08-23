import React, { useState, useEffect } from 'react';
import styles from './ServiceList.scss';
import classNames from 'classnames/bind';
import * as config from '../config';

const cx = classNames.bind(styles);

const levelCheck = {
    'S': '고객평가 상위 10%',
    'A': '고객평가 상위 38%',
    'B': '평균 수준',
    'N': '평균 수준'
};

const ServiceList = ({ lists, getList }) => {
    
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${config.DATA_URL}/?page=1&size=10`)
            .then((res) => res.json())
            .then((res)=>setList(res.data));
    },[])

    return (
        <div className={cx('serviceList')}>
            {list &&
                list.map((list) => (
                    <div className={cx('serviceListWrap')} key={list.id}>
                        <section className={cx('infoWrap')}>
                            <div className={cx('imgWrap')}>
                                <div className={cx('imgBox')}>
                                    <svg xmlns={config.IMG_URL} width="37" height="37">
                                        <path d={config.IMG_SVG} fill="#FFF"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={cx('textWrap')}>
                                <div className={cx('levelTitle')}>
                                    {list.level}등급
                                    <span>({levelCheck[list.level]})</span>
                                    {list.is_full && 
                                        list.is_full 
                                        ? <span className={cx('isFull')}>마감</span> 
                                        : null
                                    }
                                </div>
                                <div className={cx('review')}>{list.company}</div>
                                <div className={cx('description')}>{list.title}</div>
                                <div className={cx('moreBtnWrap')}>
                                    <p>자세히 보기</p>
                                </div>
                            </div>
                        </section>
                    </div>
                ))
            }
        </div>
    )
}

export default ServiceList;