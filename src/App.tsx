import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import IssueStock from './Todo/IssueStock';
import AllStock from './Todo/AllStock';
import GoodsReceive from './Todo/GoodsReceive';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/goods-receive'/>}></Route>
        <Route path='/warehouse_client' element={<GoodsReceive/>}/>
        <Route path='/goods-receive' element={<GoodsReceive/>}/>
        <Route path='/issue-stock' element={<IssueStock/>}/>
        <Route path='/all-stock' element={<AllStock/>}/>
      </Routes>
    </>
  );
}

export default App;