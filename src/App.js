import { Route, Routes } from "react-router";
import Header from "./components/header";
import Listing from "./pages/listing";
import Details from "./pages/details";
import ErrorPage from "./pages/error";


function App() {
  return (
    <div className="app">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
