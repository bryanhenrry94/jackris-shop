import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem key={product.id} product={product}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;