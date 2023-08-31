import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div >
      <h1 >Choose a gallery</h1>
      <div >
        <Link href="/portfolio/illustrations" >
          <span>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" >
          <span>Websites</span>
        </Link>
        <Link href="/portfolio/application" >
          <span>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
