import React, { useState, useEffect } from "react";

const Loadmorepage = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setpage] = useState(1);
  const getapi = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await res.json();
    setItems([...items, ...data]);
    // console.log(data);
    if (data.length === 0) {
      // console.log("None")
      document.getElementsByClassName("loadmore")[0].style.display = "none";
    }
  };

  useEffect(() => {
    getapi();
  }, [page]);

  const loadmore = () => {
    let newpage = page + 1;
    //console.log(newpage);
    setpage(newpage);
  };

  return (
    <div>
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h2 className="card-title text-center ">Id :{item.id} </h2>
                  <h6 className="card-title text-center">
                    title :{item.title}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="loadmore col-12 p-3 text-center">
          <button className="btn btn-dark w-50 text-center" onClick={loadmore}>
            Load More ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loadmorepage;
