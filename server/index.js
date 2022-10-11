const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api", (req, res) =>{
	res.json({
		message: "Hello world this is the backend",
	});
});

app.listen(PORT, ()=>{
	console.log(`Server is listening in on ${PORT}`);
});
