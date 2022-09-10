# react-router-dom6
la ruta para crear rutas con react router dom 6



1. npm install react-router-dom@6

2. import { BrowserRouter } from "react-router-dom";

3. <pre><code><React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</code></pre>

  

  4. in routes document : 
  import { Routes, Route, Link } from "react-router-dom";


   
   <pre><code> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes></code></pre>
     
