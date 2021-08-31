import React, { Component } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../css/content.module.css";
import { Link } from "react-router-dom";

function Content({ book }) {
  console.log(book);
  return (
    <Link
      to={{
        pathname: "/BookDetail",
        state: {
          book: book,
        },
      }}
    >
      <li className={styles.li}>
        <div className={styles.book_Img}>
          <img src={book.img}></img>
        </div>
        <div className={styles.book_Info}>
          <div className={styles.book_Info_title}>{book.title}</div>
          <div className={styles.book_Info_publisherwriter}>
            <div className={styles.book_Info_writer}>{book.writer} 저 ㅣ</div>
            <div className={styles.book_Info_publisher}>{book.publisher}</div>
          </div>
          <div className={styles.book_Info_category}>{book.category}</div>
          <div className={styles.book_Info_price}>
            {book.price}
            <span>원</span>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Content;
