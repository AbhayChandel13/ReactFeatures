import React,{useState,useEffect} from 'react';
const Aboutus =()=>{
	const [getdata,setData] = useState([]);
	
	const getuser= async()=>{
		try{
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
	    const data = await res.json();
		 setData(data);
		 console.log(data);
		 }
		catch(err){
			console.log(err);
		}
		
	};
	
	useEffect(()=>{
		getuser();
	},[]);
	return(
		<>
		
		<h1>About Us</h1>	
		
		<table>		
		<thead>
                 <tr>
				     <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>                     
                 </tr>
        </thead>
		{getdata.map((data) =>(
			<tbody key={data.id}>
			<tr>
			<td>{data.id} </td>
			<td>{data.name} </td>
			<td>{data.email} </td>
			</tr>
			</tbody>
		))}
		
		</table>
		
		</>
	
	);
}


export default Aboutus;