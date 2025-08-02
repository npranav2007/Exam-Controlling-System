import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <SignIn />
          </div>
        } />
        <Route path="/signup" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <SignUp />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;