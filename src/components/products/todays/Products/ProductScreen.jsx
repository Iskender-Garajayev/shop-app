import React from "react";
import data from "../../../../datas/data";
import { useParams} from "react-router-dom";


function ProductScreen  ({match}) {
  const { id } = useParams();
  const product = data.find((p) => String(p._id) === id);


  return (
    <div>
      {product.name}
      {product.image}
    </div>
  );
}

export default ProductScreen
