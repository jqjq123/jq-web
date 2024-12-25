import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/antd/dist/reset.css'; // 引入 antd 样式
import Login from './Login';
import Register from './Register';
import Home from './Home';

ReactDOM.render(
  <Router>
    <Routes> {/* 使用 Routes 包裹 Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);