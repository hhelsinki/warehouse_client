import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import IssueStock from './Todo/IssueStock';
import AllStock from './Todo/AllStock';
import GoodsReceive from './Todo/GoodsReceive';
import History from './component/History';
import HistoryResultGR from './component/HistoryResultGR';
import HistoryResultIS from './component/HistoryResultIS';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/goods-receive'/>}></Route>
        <Route path='/warehouse_client' element={<GoodsReceive/>}/>
        <Route path='/goods-receive' element={<GoodsReceive/>}/>
        <Route path='/issue-stock' element={<IssueStock/>}/>
        <Route path='/all-stock' element={<AllStock/>}/>
        <Route path='/history/:typeId' element={<History/>}/>
        <Route path='/history/history-gr/:queryId' element={<HistoryResultGR/>}/>
        <Route path='/history/history-is/:queryId' element={<HistoryResultIS/>}/>
      </Routes>
    </>
  );
}

export default App;
