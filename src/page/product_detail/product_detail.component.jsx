import React from 'react';
import ProductInfor from '../../reuse_component/product_detail/product_info/product_info.component';
import ProductReview from '../../reuse_component/product_detail/product_review/product_review.component';
import ProductSlide from '../../reuse_component/product_detail/product_slide/product_slide.component';
import './product_detail.styles.scss';

const ProductDetail = () => {
    return <div className='container-fluid product_detail'>
        <ProductInfor/>
        <ProductSlide/>
        <ProductReview/>
    </div>
}

export default ProductDetail;