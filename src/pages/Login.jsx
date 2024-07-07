import React, { useState } from 'react';
import { Button, TextInput, Label, Card } from 'flowbite-react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import logo from '../assets/logo.png'; // Pastikan path logo sesuai
import { Link } from 'react-router-dom';

function Login() {
    document.title = "Login Page"

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#D9D9D9]">
            <Card className="w-full max-w-md p-6 border border-black bg-white">
                <div className="flex justify-center mb-4">
                    <img src={logo} alt="logo" className="w-32 h-auto" />
                </div>
                <h2 className="text-2xl font-extralight mb-4 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="username" value="Username" />
                        <TextInput
                            id="username"
                            type="username"
                            name="username"
                            value={formValues.username}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="mr-2"
                        />
                        <Label htmlFor="rememberMe" value="Remember me" />
                    </div>
                    <Link to="/dashboard">
                        <Button type="submit" className=" mt-5 w-full bg-cyan-500 hover:bg-cyan-600">
                            Log In
                        </Button>
                    </Link>
                    <p className="text-center text-gray-600 text-xs">Forgot my password | <Link to="/register">Create an account</Link></p>
                </form>
            </Card>
        </div>
    );
}

export default Login;
