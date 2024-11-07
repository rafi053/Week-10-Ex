import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import NewsPage from "./pages/NewsPage";
import SportPage from "./pages/SportPage";
import Users from "./pages/Users";
import { useState } from "react";
import PrivateRoute from "./auth/PrivateRoute";
// import { useSelector,useDispatch } from 'react-redux'
// import { RootState } from './store'
// import { increment,decrement } from './features/counter/counterSlice'
// import { useState } from 'react'

function App() {
  // const count = useSelector((state: RootState) => state.counter.count);
  // const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {/* <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
     {count} */}
      <MenuButton />
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route
          path="/sport"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <SportPage />
            </PrivateRoute>
          }
        />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
