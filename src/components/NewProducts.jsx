import React from "react";

function NewProducts() {
  return (
    <div className="new-products-container ml-10">
      <div className=" ml-9">
        <div className="img-container mb-[70px] xl:mr-16">
          <img
            src="src\assets\newproducts\05bfdd1b6ae331742092475142c70843 1.png"
            alt="new product"
            width={200}
            height={250}
          />
        </div>
        <p className="new-product-p">Tiramisu</p>
        <p>
          Fresh eggs, yolk, sugar, mascarpone,
          <br /> ready-made Savoiardi cookies, espresso,
          <br /> cognac, cocoa, salt
        </p>
        <p className="new-product-p mb-10">cost: 5$</p>
        <button className="new-product-btn">add to cart</button>
      </div>
      <div>
        <div className="img-container mb-[90px]">
          <img
            src="src\assets\newproducts\Панна-Кота 1.png"
            alt="new product"
            width={250}
            height={250}
          />
        </div>
        <p className="new-product-p">Panna Cotta</p>
        <p>
          Fresh eggs, yolk, sugar, mascarpone,
          <br /> ready-made Savoiardi cookies, espresso,
          <br /> cognac, cocoa, salt
        </p>
        <p className="new-product-p mb-10">cost: 10$ </p>
        <button className="new-product-btn">add to cart</button>
      </div>
      <div>
        <div className="img-container mb-[90px]">
          <img
            src="src\assets\newproducts\Яблочный-тарт 1.png"
            alt="new product"
            width={250}
            height={250}
          />
        </div>
        <p className="new-product-p">Apple Tart</p>
        <p>
          Fresh eggs, yolk, sugar, mascarpone,
          <br /> ready-made Savoiardi cookies, espresso,
          <br /> cognac, cocoa, salt
        </p>
        <p className="new-product-p mb-10">cost: 8$</p>
        <button className="new-product-btn">add to cart</button>
      </div>
    </div>
  );
}

export default NewProducts;
