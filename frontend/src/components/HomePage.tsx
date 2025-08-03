import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface User {
  name: string;
  email: string;
}

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch('http://localhost:3000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setError('Failed to fetch user profile');
        }
      } catch (err) {
        setError('An error occurred while fetching user profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header isAuthenticated={true} />
      
      <main className="flex-grow pt-24 pb-10 px-4">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">{error}</div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {user?.name || 'User'}!</h1>
                <p className="text-gray-600">Manage your exams and assessments from this dashboard.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Exams</h2>
                  <p className="text-gray-600 mb-4">You have no upcoming exams scheduled.</p>
                  <Link to="/exams/create" className="text-blue-500 hover:underline">Schedule an exam</Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Results</h2>
                  <p className="text-gray-600 mb-4">No recent exam results available.</p>
                  <Link to="/results" className="text-blue-500 hover:underline">View all results</Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <Link to="/exams/create" className="block text-blue-500 hover:underline">Create Exam</Link>
                    <Link to="/questions/create" className="block text-blue-500 hover:underline">Add Questions</Link>
                    <Link to="/students" className="block text-blue-500 hover:underline">Manage Students</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;