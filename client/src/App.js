import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Sidebar';
import LandingPage from './pages/LandingPage/landing';
import Sidebar from './components/Navbar/Sidebar';
import Signup from './pages/LogPages/Signup';
import Signin from './pages/LogPages/Signin';
import ForgetPassword from './pages/LogPages/ForgetPassword';
import Profile from './pages/BlogPages/Profile';
import JobTalk from './pages/BlogPages/JobTalk';


const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <ApolloProvider client={client}>
        <div className='App' id='outer-container'>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id='page-wrap'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/password' element={<ForgetPassword />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/jobs' element={<JobTalk />} />
            </Routes>   
        </div>
        </div>
        </ApolloProvider>
        
    );
    }

export default App;