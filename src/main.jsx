import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globalStyles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/movie-page/MoviePage'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/movies/:movieid' element={<MoviePage />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
