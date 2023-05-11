import React from 'react'
import allDatas from '../../../datas/allDatas'
import { useParams } from 'react-router-dom';

const ProductCategory = () => {
  const { categori } = useParams();
  const product = allDatas.find((product) => product.category === categori);
  return (

    <div>
      {product.name}
    </div>
  )
}

export default ProductCategory
