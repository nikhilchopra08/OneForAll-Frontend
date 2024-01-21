import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ medicines }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
    {medicines.map((medicine) => (
      <div key={medicine._id} className="col mb-3">
        <div className="card" style={{ width: '14rem' }}>
          <img src={medicine.Image} alt={medicine.name} className="card-img-top img-fluid" />
          <div className="card-body p-2">
            <h6 className="card-title m-0 p-0">{medicine.name}</h6>
          </div>
          <div className="card-footer p-2">
            <small className="text-muted">Price: Rs.{medicine.desc}</small>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Product = () => {
  const [medicines, setMedicines] = useState([]);

  const dataArray = ["https://images.thedermaco.com/catalog/product/1/0/1000_mg_vitamin_c_effervescent_tablets.jpg?auto=format&fit=contain&width=720&auto=compress",
   "https://5.imimg.com/data5/SELLER/Default/2023/12/372136352/UI/FJ/QD/8369217/allopathic-liver-tonic.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2020/12/PB/QV/BG/8396705/hydroquinone-topical.jpg",
    "https://m.media-amazon.com/images/I/81IQIyorctL.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/3/ME/AQ/SK/123282792/anabolic-monster-equi-250-boldenone-steroid-injection.jpeg",
];

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/medicines');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMedicines(data.medicines);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    // Fetch medicines on component mount
    fetchMedicines();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
        {dataArray.map((item, index) => (
          <div key={index} className="col mb-3">
            <div className="card" style={{ width: '14rem' }}>
              <img src={item} alt={`Medicine ${index}`} className="card-img-top img-fluid" />
            </div>
          </div>
        ))}
      </div>
      <h2 className="mb-3">Medicine List</h2>
      <ProductList medicines={medicines} />
      <ProductList medicines={medicines} />
    </div>
  );
};

export default Product;
