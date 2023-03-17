//1. Import Area
import React from 'react'
import { Form, Button } from 'react-bootstrap'
//2. Definition Area
export default function Login() {
    //2.1 Hooks Area

    //2.2 Function Definition Area
    let mylogin = () => {
        alert('Okayokay');
        let payload = {
            "identifier": document.querySelector('input[type=email]').value,
            "password": document.querySelector('input[type=password]').value
        }
        console.log(payload);

        fetch(`http://localhost:1337/api/auth/local`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            if( data["jwt"] !== undefined){
                //Login Successful

                console.log('token--.>>>',data["jwt"]);
                alert('WelCome to login Page')

                // Store the token in LocalStorage
                
                window.localStorage.setItem('jwt_token',data["jwt"])
            }else{
                //Login Failed
                alert('You Are Not Enter Login Page')  
            }
        })
        .catch(err=>err)
       
    }


    //2.3 Return Statement
    return (
        <>
            <h1 className='text-center'>Login Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => { mylogin() }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area