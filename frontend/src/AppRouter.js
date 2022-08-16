import { AuthProvider, AuthContext } from './context/AuthContext';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';

const AppRouter = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={user ? <Home/> : <Login />}/>
                    <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
                    <Route path="/profile/:username" element={!user ? <Navigate to="/" /> : <Profile />}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRouter;