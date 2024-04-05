import { useState, useRef } from "react";
import axios from "axios";

export default function Create() {
	const rEmpno=useRef();

	const [name, setName]=useState("");
	const [birth, setBirth]=useState("");
	const [phone, setPhone]=useState("");
	const [joindate, setJoindate]=useState("");
	const [empno, setEmpno]=useState("");
	const [rad, setRad]=useState("");

	const hEmpno=(event)=> { setEmpno(event.target.value); }
	const hName=(event)=>{ setName(event.target.value); }
	const hBirth=(event)=>{ setBirth(event.target.value); }
	const hPhone=(event)=>{ setPhone(event.target.value); }
	const hJoindate=(event)=>{ setJoindate(event.target.value); }
	const hRad=(event)=>{ setRad(event.target.value); }

	const save=(event)=>{
		event.preventDefault();
		let data={empno, name, birth, joindate, rad};
		let urladd="http://localhost:9000/save";
		axios.post(urladd, data)
		.then(res=> {
			if(res.data.insertedId==empno)
			{
				alert("Record Created Succesfully");
				setEmpno("");
				setName("");
				setBirth("");
				rEmpno.current.focus();
			}
			else
			{
				alert(empno + "already exists");
				setEmpno("");
				setName("");
				setBirth("");
				rEmpno.current.focus();
			}
		})
		.catch(err=> console.log(err));
	}
	return(
	<>			
	<center>
	<h1> Create Employee Page </h1>
	<form onSubmit={save}>
	<input type="number" placeholder="Enter Employee ID"
	onChange={hEmpno} value={empno} ref={rEmpno} />
	<br/><br/>
	<input type="text" placeholder="Enter Name"
	onChange={hName} value={name} />
	<br/><br/>
	<input type="text" placeholder="Enter Date of Birth"
	onChange={hBirth} value={birth} />
	<br/><br/>
	<input type="number" placeholder="Enter Phone"
	onChange={hPhone} value={phone} />
	<br/><br/>
	<input type="number" placeholder="Enter Date of Joining"
	onChange={hJoindate} value={joindate} />
	<br/><br/>
	<label> Marital Status:   </label>
	<input type="radio" name="f" value="married"
            	onChange={hRad} checked={rad=="arried"} />Married
	<input type="radio" name="f" value="unmarried"
            	onChange={hRad} checked={rad=="unmarried"} />Unmarried
	<br/><br/>
	<label> Select Employee's Department:       </label>
	<select>
	<option value="hr">HR</option>
	<option value="marketing">Marketing</option>
	<option value="it">IT</option>
	<option value="staff">Staff</option>
	<option value="clerk">Clerk</option>
     	</select>
	<br/><br/>
	<input type="submit" value="Save"/>
	<br/><br/>
	</form>
	</center>
	</>
	);
}