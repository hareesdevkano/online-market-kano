import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import firebase from 'firebase';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';

// Initialize Firebase
// Replace the configuration with your own Firebase project credentials
const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

function Home({ user }) {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Welcome to Kano Online Market</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user ? (
              <>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
                <li>
                  <Link to="/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home user={user} />
          </Route>
          <Route path="/products" exact>
            <ProductListing user={user} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/cart">
            <Cart user={user} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
