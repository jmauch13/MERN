import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Sidebar';
import LandingPage from './components/LandingPage/landing';
import Sidebar from './components/Navbar/Sidebar';
import Signup from './components/LogPages/Signup';
import Signin from './components/LogPages/Signin';
import ForgetPassword from './components/LogPages/ForgetPassword';
import Education from './components/BlogPages/Education';
import Intern from './components/BlogPages/Intern';
import JobTalk from './components/BlogPages/JobTalk';

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
                <Route path='/education' element={<Education />} />
                <Route path='/intern' element={<Intern />} />
                <Route path='/jobs' element={<JobTalk />} />
            </Routes>   
        </div>
        </div>
        </ApolloProvider>
        
    );
    }

export default App;