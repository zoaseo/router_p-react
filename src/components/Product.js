import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = () => {
    const { productId, productName } = useParams();
    const location = useLocation();
    console.log(useParams());
    console.log('haha');
    return (
        <div>
            { productId } 상품페이지입니다.
            <div>{productName}페이지입니다.</div>
            <ul>
                {/* <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>key : {location.key}</li> */}
            </ul>
        </div>
    );
};

export default Product;