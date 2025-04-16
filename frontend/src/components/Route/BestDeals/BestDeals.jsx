
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/product"; 
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  
  // Use dispatch to trigger the action
  const dispatch = useDispatch();
  
  // Get allProducts from Redux state
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch the action to fetch all products when the component mounts
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    // When allProducts is updated, process the data
    if (allProducts && allProducts.length > 0) {
      const sortedData = [...allProducts].sort((a, b) => b.sold_out - a.sold_out);
      const firstFive = sortedData.slice(0, 5);
      setData(firstFive);
    }
  }, [allProducts]);
  

  // If the data is still loading
  if (isLoading || !allProducts) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data.length > 0 &&
            data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
