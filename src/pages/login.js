"use client"
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import "../app/globals.css"
import * as Components from '../components/components';
import { HiMiniIdentification } from 'react-icons/hi2';

function LoginReg() {
    const [signIn, toggle] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const route= useRouter()
    useEffect(() => {
        const token = localStorage.getItem('token');
    }, []);

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const loginRes = await axios.post('/api/login', {
                email: email,
                password: password
            });
            const data = loginRes.data;
            if (data.error) {
                console.log(data.error);
            }
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data));
            await route.push("/Templates", { scroll: false })
            setLoading(false);
        } catch (error) {
            console.error('Error logging in:', error);
        } 
    };

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);
      
        try {
          const loginRes = await axios.post('/api/signup', {
            username: name,
            company: company,
            phone: phone,
            email: email,
            password: password
          });
          const data = loginRes.data;
          if (data.error) {
            console.log(data.error); 
          }
      console.log(data)
          // Assuming the registration was successful, store user data in localStorage
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('user', JSON.stringify(data));
      
          // Assuming route is a valid navigation function (like react-router's history object)
          route.push("/partner/busnessSignup", { scroll: false });
          console.log("hii")
        } catch (error) {
          console.error('Error registering:', error); // Log the error for debugging purposes
          // You might want to provide feedback to the user about the registration failure
        } finally {
          setLoading(false); // Make sure to set loading state to false regardless of success or failure
        }
      };

    return (
        
        <div className="flex flex-col items-center  h-[100vh] w-[100%] justify-center">
            <Components.Container>
                <Components.SignUpContainer $signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Input type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <Components.Input type='text' placeholder='Referral' value={company} onChange={(e) => setCompany(e.target.value)} />
                        {loading ? (
                            <Components.Button>
                                Loading ...
                            </Components.Button>
                        ) : (
                            <Components.Button onClick={register}>
                                Register
                            </Components.Button>
                        )}
                        <Components.Button className="sm:hidden" onClick={() => toggle(true)}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer $signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {loading ? (
                            <Components.Button>
                                Loading ...
                            </Components.Button>
                        ) : (
                            <Components.Button onClick={login}>
                                Sign In
                            </Components.Button>
                        )}
                        <Components.Button className="sm:hidden" onClick={() => toggle(false)}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer $signinIn={signIn}>
                    <Components.Overlay $signinIn={signIn}>

                        <Components.LeftOverlayPanel $signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel $signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}

export default LoginReg;
