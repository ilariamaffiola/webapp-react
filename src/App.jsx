import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import { LoaderProvider } from "./contexts/LoaderContext";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <LoaderProvider>
        <Loader />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />}></Route>
              <Route path="/movies/:id" element={<MoviePage />}></Route>
              <Route
                path="/movies/:id/review"
                element={<CreateReviewPage />}
              ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}

export default App;
