const Login = () => {
    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
        <div className="login">
            <div className="wrapper">
            <div className="left">
                <div className="loginButton facebook" onClick={facebook}>
                Facebook
                </div>
            </div>
            <div className="center">
                <div className="line" />
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder="Username" required />
                <input type="text" placeholder="Password" required />
                <button className="submit">Login</button>
            </div>
            </div>
        </div>
    )
}
export default Login
// import {useRef, useState, useEffect, useContext}  from 'react'
// import AuthContext from './context/AuthProvider';
// import axios from './api/axios';

// export default function Login() {
//     const {setAuth} = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user,pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), {
//                 headers: {'Content-Type': 'application/json'},
//                 withCredentials: true
//             });
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({user,pwd,roles,accessToken}); 
//             setUser('');
//             setPwd('');
//         } catch (err) {
//             if(!err?.response) {
//                 setErrMsg('No server response');
//             }
//             else if(err.response?.status === 404) {
//                 setErrMsg('Missing Username or Password');
//             }
//             else if(err.response?.status === 401) {
//                 setErrMsg('Unauthorised');
//             }
//             else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }
//     return (
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input 
//                     type="text" 
//                     id="username" 
//                     ref={userRef} 
//                     autoComplete='off' 
//                     onChange={(e) => setUser(e.target.value)} 
//                     value={user}
//                     required
//                 />
//                 <label htmlFor="password">Password:</label>
//                 <input 
//                     type="password" 
//                     id="password" 
//                     ref={userRef} 
//                     autoComplete='off' 
//                     onChange={(e) => setPwd(e.target.value)} 
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//                 <br />
//                 <a href="/auth/facebook"> Sign Up with Facebook</a>
//             </form>
//         </section>
//     )
// }
