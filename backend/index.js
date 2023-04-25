const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
	//getting the required data from the request
    if (req.body.language === "python") {
		language="py"
	}

	
	let config = {
		method: 'post',
		url: 'https://online-code-compiler.p.rapidapi.com/v1/',
		headers: {
			'content-type': 'application/json',
            'X-RapidAPI-Key': 'b23341fda1msh53de7629c7bce58p15ddf7jsn958ef634e128',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
		},
		data: {
            language: 'python3',
            code: req.body.code,
            version: 'latest',
            input: req.body.input
          }
	};
	//calling the code compilation API
	Axios(config)
		.then((response)=>{
			res.send(response.data)
			console.log(response.data)
		}).catch((error)=>{
			console.log(error);
		});
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
