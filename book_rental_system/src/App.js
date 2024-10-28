import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import CardSection from './components/CardSection';
import Navbar0 from './components/Navbar0';
import TopRatedSection from './components/TopRatedSection';
import IntegratedSection from './components/IntegratedSection';
import './styles.css';
import NewArrivalBooks from './components/NewArrivalBooks';
import AuthorSection from './components/AuthorSection';
import Footer from './components/Footer';
import FAQs from './components/FAQs';
import BookPage from './CategPages/BookPage';
import GenresPage from './CategPages/GenresPage';
import Register from './components/Register';
import SignIn from './components/Signin';
import CartPage from './components/CartPage';
import TrendingSection from './components/Trending';
import BookDetailPage from './CategPages/BookDetailPage';
import NewArrivalFullpage from './components/NewArrivalFullpage';
import NewBooks from './components/NewBooks';
import SearchComponents from './components/SearchComponents';
import MainAdmin from './AdminFol/MainAdmin';
import WishlistPage from './components/WishlistPage';
// import Navbar01 from './components/Navbar01';
import GenreComp from './components/GenreComp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar0 className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300" />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
              {/* <Navbar01/> */}
                <GenreComp />
                <IntegratedSection />
                <CardSection />
                <TopRatedSection />
                <NewArrivalBooks />
                <TrendingSection />
                <AuthorSection />
                <FAQs />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/wishlistpage" element={<WishlistPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/category/:id" element={<GenresPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/newarrivalfullpage" element={<NewArrivalFullpage />} />
          <Route path="/AdminFol/MainAdmin" element={<MainAdmin />} />
          <Route path="/search" element={<SearchComponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;