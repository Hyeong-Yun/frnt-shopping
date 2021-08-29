import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React, { useState } from "react";

let queryLS = localStorage.getItem("query");
let selectLS = localStorage.getItem("select");

let totalElements;
let totalPages;
let currentPage;

function App() {
  const [data, setData] = useState([]);

  let pageCount = 0;

  let pageNumber;
  const search = (select, query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (select !== "" && query !== "") {
      fetch(
        `http://13.125.22.103:8080/api/book/search?size=5&page=0&${select}=${query}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // result.totalpage
          totalPages = result.totalPages;
          totalElements = result.totalElements;

          if (result.content.length === 0) {
            alert("찾으시는 책이 없습니다.");
          }

          return result.content.map((item) => ({
            id: item.bookId,
            title: item.bookNm,
            category: item.categoryName,
            price: item.price,
            publisher: item.publisher,
            img: item.thumbnailUrl,
            writer: item.writer,
          }));
        })
        .then((items) => {
          setData(items);
        })
        .catch((error) => console.log("error", error));
    }
  };

  function handlePageChange(page) {
    // setData({ ...data, currentPage: page });

    let queryLS = localStorage.getItem("query");
    let selectLS = localStorage.getItem("select");
    let pageNum = page - 1;
    currentPage = pageNum + 1;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://13.125.22.103:8080/api/book/search?size=5&page=${pageNum}&${selectLS}=${queryLS}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        pageNumber = result.number;

        if (result.content.length === 0) {
          alert("찾으시는 책이 없습니다.");
        }

        return result.content.map((item) => ({
          id: item.bookId,
          title: item.bookNm,
          category: item.categoryName,
          price: item.price,
          publisher: item.publisher,
          img: item.thumbnailUrl,
          writer: item.writer,
        }));
      })
      .then((items) => {
        setData(items);
        console.log(items);
      })
      .catch((error) => console.log("error", error));
  }

  const handleValueSet = (select, inputValue) => {
    search(select, inputValue);

    localStorage.setItem("query", inputValue);
    localStorage.setItem("select", select);
  };

  return (
    <div className="App">
      <Route path="/" exact={true}>
        <Home
          totalPages={totalPages}
          books={data}
          onChange={handleValueSet}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/Signup" component={Signup}></Route>
    </div>
  );
}

export default App;
