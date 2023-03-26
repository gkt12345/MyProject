import React, { useEffect, useState } from "react";
import "./Pagination.css";

export default function Pagination() {
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    // console.log(data.products);
    if (data && data.products) {
      setProduct(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSelectHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length/10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="product_single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span 
          className={page > 1 ? "" : "pagination_disabled"}
          onClick={() => onSelectHandler(page - 1)}>◀</span>
          {[...Array(products.length / 10)].map((v, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination_selected" : ""}
                onClick={() => onSelectHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span 
          className={page >= products.length/10 ? "pagination_disabled" : ""}           
          onClick={() => onSelectHandler(page + 1)}>▶</span>
        </div>
      )}
    </div>
  );
}
