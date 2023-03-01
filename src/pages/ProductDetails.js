import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  return (
    <>
      <h1>My Product Details Page</h1>
      <p>Product {params.id}</p>
    </>
  );
};

export default ProductDetailsPage;
