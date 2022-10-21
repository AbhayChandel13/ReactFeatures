import React, {useEffect,useState} from "react";
import DataTable from "react-data-table-component";
import Rzorpay from "./Rzorpay";
function Service(){
	const [getData,setData] = useState([]);
	const [search,setSearch] = useState("");
	const [filtereddata,setFiltereddata] = useState([]);
	const getuser= async()=>{
		try{
			// https://jsonplaceholder.typicode.com/photos
			// http://localhost:3000/getdata.php (// "proxy":"http://localhost:3000/getdata.php",)
			// http://universities.hipolabs.com/search?country=United+States
		const res = await fetch("https://jsonplaceholder.typicode.com/photos");
	    const data = await res.json();
		 setData(data);
		 setFiltereddata(data);
		 //console.log("data",data);
		 }
		catch(err){
			console.log(err);
		}
	};
	
	useEffect(()=>{
		getuser();
	},[]);

	useEffect(()=>{
		const results = getData.filter((field)=>{
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


	const loadScript = (src) => {
		return new Promise((resolve) => {
		  const script = document.createElement("script");
		  script.src = src;
		  script.onload = () => {
			resolve(true);
		  };
		  script.onerror = () => {
			resolve(false);
		  };
		 document.body.appendChild(script);
	   });
	};
	
	useEffect(() => {
		loadScript("https://checkout.razorpay.com/v1/checkout.js");
	});

	
	// const paymentObject = new window.Razorpay();
    //  paymentObject.open();

return(
 <>
    <h1>Hi From the Service Page  </h1>

	<section className="card-list">
	{/* <div style={{height:"250px",width:"300px"}}> */}
      <Rzorpay
        courseName="Complete React Native 
        Mobile App developer - Build 10 apps"
        courseThumbnail=""
        courseDetails="2 Free + 92 Paid"
        coursePrice="2,999"
        courseDiscountedPrice="199"
        courseDiscount="93"
		
      />
	  {/* </div> */}
    </section>
	<DataTable 
	  title ="Employee Data"
	  columns={columns} 
	  data={filtereddata}
	  pagination 
	  fixedHeader
	  fixedHeaderScrollHeight="450px"
	  selectableRows
	  selectableRowsHighlight
	  subHeader
	  subHeaderComponent={
		<input type="text" placeholder="Search here" className="w-25 form-control" value={search} onChange={(e)=>setSearch(e.target.value)} />
	  }			  

	/>


	  
 </>

);
}
export default Service ;