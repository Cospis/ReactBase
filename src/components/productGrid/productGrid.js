import React, { useMemo, useState } from "react";
import { Card, Pagination } from "react-bootstrap";
import PaginationComponent from "react-bootstrap-pagination";
const ProductGrid = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const itemsPerPage = 3;
  const data = useMemo(() => {
    let filtered = Array(100).fill(null);
    filtered = filtered.map((x, index) => {
      return {
        ...x,
        id: index + 1,
        sn: index + 1,
        name: "Tomato",
        category: Math.random() > 0.3 ? "Spices" : "Vegetables",
        unitprice: Math.random() > 0.5 ? "50" : "100",
        unitofmeasure: "Paint Bucket",
        availability: Math.random() > 0.3 ? "True" : "False",
        updatedAt: Date.now(),
      };
    });

    return filtered.filter((product) => {
      return product.name.toLowerCase().includes(search?.toLowerCase());
    });
  }, [search]);

  const getData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div className="row">
        {getData().map((item) => (
          <div className="col-md-6 mb-4" key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.category}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (page, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default ProductGrid;
