import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {

	const nav=useNavigate();
	const [info, setInfo]=useState([]);
	
	useEffect( ()=> {
		let urladd="http://localhost:9000/read";
		axios.get(urladd)
		.then(res=> setInfo(res.data))
		.catch(err=>console.log("Issue" +err));
	} , [] )

	const delEmp=(empno)=> {
		let urladd="http://localhost:9000/remove";	
		let data={data: {empno}}
		axios.delete(urladd, data)
		.then(res=> {
			alert("Record Deleted Successfully");
			window.location.reload();
		})
		.catch(err=> alert("issue" + err));
	}
	
	const updateEmp=(i, n, m, a, b) => {
		nav("/update", { state: {i: i, n: n, m: m, a:a, b:b } } );
	}
	
	return(
	<>
	<center>
	<h1> Home Page </h1>
	<table border="6" style={{"width":"60%"}}>
		<tr>
		<th> Empno </th>
		<th> Name </th>
		<th> DOB </th>
		<th> Phone </th>	
		<th> DOJ </th>
		<th> Marriage </th>
		<th> Delete </th>
		<th> Update </th>
		</tr>
	{
		info.map( (e) => (
		<tr style={{"text-align":"center"}}>
		<td> {e._empno} </td>	
		<td> {e.name} </td>
		<td> {e.birth} </td>
		<td> {e.phone} </td>
		<td> {e.joindate} </td>
		<td> {e.rad} </td>

	<td> <button onClick= { ()=> {
		if (window.confirm("Sure?"))delEmp(e._empno) }}> Delete </button> </td>
		<td> <button onClick= { ()=> { updateEmp(e._empno, e.name, e.birth); }} >Update </button> </td>
		</tr>
		))
	}
	</table>
	</center>
	</>
	);
}