import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Blog() {
  const [items, setItems] = useState([]);
  const [search,setSearch] = useState("");
  const [filtereddata,setFiltereddata] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 20;

  useEffect(() => {
    const getComments = async () => { 
      const res = await fetch(
        //`http://localhost:3004/comments?_page=1&_limit=${limit}`
        `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);      
      setFiltereddata(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      //`http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
       `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    console.log(data);
    setFiltereddata(data);
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  useEffect(()=>{
   const results = items.filter((field)=>{
      return field.title.toLowerCase().match(search.toLowerCase());
   });

   setFiltereddata(results);
},[search]);

  const columns= [
   {
     name: "ID",
     selector: (row)=>row.id,
   },
   {
     name: "Title",
     selector: (row)=>row.title,
   },
   {
     name: "Url",
     selector: (row)=>row.url,
   },  
 ]
  return (
    <div className="container">
      {/* <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                   
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <DataTable 
	  title ="Employee Data"
	  columns={columns} 
	  data={filtereddata}     
	// pagination 
	  fixedHeader
	  fixedHeaderScrollHeight="450px"
	  selectableRows
	  selectableRowsHighlight
	  subHeader
	  subHeaderComponent={
		<input type="text" placeholder="Search here" className="w-25 form-control" value={search} onChange={(e)=>setSearch(e.target.value)} />
	  }			  

	/>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Blog;
