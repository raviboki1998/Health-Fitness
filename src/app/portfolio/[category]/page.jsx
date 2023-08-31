import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1>{params.category}</h1>

      {data.map((item) => (
        <div key={item.id}>
          <div>
            <h1 >{item.title}</h1>
            <p>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div>
            <Image
              
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
