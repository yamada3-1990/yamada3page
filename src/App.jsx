import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 各ページコンポーネントをインポート
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Links';

export default function App() {
  return (
    <Router basename="/yamada3page">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          {/* <li><Link to="/links">Links</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/links" element={<Contact />} /> */}
      </Routes>
    </Router>

  );
}



// テスト環境用

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

// // 各ページコンポーネントをインポート
// import Home from './pages/Home';
// import About from './pages/About';
// // import Contact from './pages/Links';

// export default function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About me</Link></li>
//           {/* <li><Link to="/links">Links</Link></li> */}
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/links" element={<Contact />} /> */}
//       </Routes>
//     </Router>

//   );
// }
