import React from "react";
import data from "../../../../datas/data";
import { Link, useParams} from "react-router-dom";
import './ProductScreen.css'
import Rating from "./Rating";
// import axios from "axios";



function ProductScreen  ({match}) {
  const {id} = useParams();
  const product = data.find(product => product._id === id);
  const {image, name} = product


    // const [product, setProduct] = useState([])
  
    // useEffect(() => {
    //   async function fetchProduct() {
    //     const { data } =  await axios.get(`/api/products/${match.params.id}`)
    //     setProduct(data)
    //   }
    //   fetchProduct()
    // },[])

  return (
    <div>
    
      
      <div className="product-screen-container">
      <Link to='/'>
      Go back
      </Link>
      <h3>{product.name}</h3>
      <div className="image-container">

      <img className="sigle-priduct" src={image} alt={name} />
      </div>
      <h3>{product.price}</h3>
      <Rating value={product.rating}/>
      </div>
      
    </div>
  );
}

export default ProductScreen
