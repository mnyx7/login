const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function cleartext() {
	document.getElementById(GoogleSearch).text = "";
}

//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', sendLoginFormData);

function sendLoginFormData(e) {
	e.preventDefault();
	const email = document.querySelector('#login-email').value;
	const password = document.querySelector('#login-password').value;

	const formData = {
		"username": email,
		"password": password
	};

	const data = JSON.stringify(formData);

	fetch('http://95.86.128.14:26488/api/auth/signin', {
		//./auth/sign-in
		method: 'POST', //'POST'
		body: data,
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((response) => {
			if (response.status == 401) {
				alert("Oops, incorrect mail or password");
			}
			else {
				alert("You are successfully Loged In!");
			};
			//console.log(response);
			const token = response.token;
			localStorage.setItem('token', token);
		})
		.catch((err) => console.log(err));
}



/*
Url: http:// 95.86.128.14:26488/api/auth/signin

request:
{
    "username":"username",
    "password":"pass"
}*/