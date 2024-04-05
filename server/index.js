const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res)=>{
	const url="mongodb://0.0.0.0:27017";
	MongoClient.connect(url, (err, database)=>{
		if(err) {
			console.log(err);
		} else {
		const dbo=database.db("emp_intern");
		const doc={"_id":req.body.empno, "name":req.body.name, "birth":req.body.birth};
		dbo.collection("employee").insertOne(doc, (err, result)=> {
				if (err) res.send(err);
				else res.send(result);
			})
		}	
	})
})

app.get("/read", (req, res)=> {
	const url="mongodb://0.0.0.0:27017";
	MongoClient.connect(url, (err, database)=> {
		if(err) {
			console.log(err);
		} else {
		const dbo=database.db("emp_intern");
		dbo.collection("employee").find({}).toArray((err, result)=> {
				if (err ) res.send(err);
				else res.send(result);
			})
		}
	})
})

app.delete("/remove", (req, res)=> {
	const url="mongodb://0.0.0.0:27017";
	MongoClient.connect(url, (err, database)=> {
		if(err) {
			console.log(err);
		} else {
		const dbo=database.db("emp_intern");
		const doc={"_id":req.body.empno};
		dbo.collection("employee").deleteOne(doc, (err, result)=> {
				if (err ) res.send(err);
				else res.send(result);
			})
		}
	})
})