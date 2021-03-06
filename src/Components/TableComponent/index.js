import { Table } from 'antd';
import s from './TableComponent.module.css';

const TableComponent = ({dataSource, columns}) => {
  return (
   <div className={s.table}>
     <Table 
     dataSource={dataSource} 
     columns={columns} 
     pagination={{ defaultPageSize: 8}}
     scroll={{
      x: 1300,
    }} />
   </div>
  )
}

export default TableComponent