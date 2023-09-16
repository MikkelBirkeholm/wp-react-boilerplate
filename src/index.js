// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { About } from './pages/About/About.jsx'
import { NotFound } from './components/NotFound/NotFound.jsx'
import './styles/global.scss'
import { Header } from './components/Header/Header.jsx'
import Post from './pages/Post/Post.jsx'
const container = document.getElementById('app')
const root = createRoot(container)

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/post/:slug"
          element={<Post />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  )
}

root.render(<App />)
