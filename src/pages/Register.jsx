import React, { useState } from 'react';
import { Button, TextInput, Label, Card } from 'flowbite-react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import logo from '../assets/logo.png'; // Pastikan path logo sesuai
import { Link } from 'react-router-dom';

function Register() {
    document.title = "Register Page"
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        fullname: '',
        email: '',
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
                <h2 className="text-2xl font-extralight mb-4 text-center">Register</h2>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="fullname" value="Your Name" />
                        <TextInput
                            id="fullname"
                            type="text"
                            name="fullname"
                            value={formValues.fullname}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                        />
                    </div>
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
                    <div className="relative">
                        <Label htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 top-6 right-0 px-3 bg-cyan-500 text-white rounded-r-md flex items-center justify-center"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <HiEyeOff /> : <HiEye />}
                        </button>
                    </div>
                    <Link to="/dashboard">
                        <Button type="submit" className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600">
                            Sign Up
                        </Button>
                    </Link>
                    <p className="text-center text-gray-600 text-xs">I already have an account. <Link to="/login">Sign in</Link></p>
                </form>
            </Card>
        </div>
    );
}

export default Register;
