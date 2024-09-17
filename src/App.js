import React from 'react';
import './App.css';  
import Header from './components/Header'; 
import ArticleList from './components/ArticleList';  
import Footer from './components/Footer';  

function App() {
  return (
    <div className="App">
      <Header />  {/* Header component */}
      <ArticleList />  {/* List of articles */}
      <Footer />  {/* Footer component */}
    </div>
  );
}

export default App;

