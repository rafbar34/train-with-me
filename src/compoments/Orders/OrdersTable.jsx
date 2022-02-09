import React, { useState } from "react";
import MaterialTable from 'material-table'
import "../Orders/Orders.css"


const columns = [
  { field: 'id', title: 'ID', width: 90, editable:false },
  {
    field: 'orderdetails',
    title: 'order-details',
    width: 150,
    validate:rowData=>rowData.orderdetails.length>7
   
    
  }
 
];


const orderList = [
    {"id": 123, "orderdetails": "coca-cola *2"}, 
    {"id": 123, "orderdetails": "pepsi *2"} 


 
 
];


const Order =() => {
  const [tableData,setTableData] = useState(orderList)
  const [selectedRows,setselectedRows]=useState([])
const handleBulkDelete=()=>{
  const update= tableData.filter(row=>!selectedRows.includes(row))
  setTableData(update);
}

   
        return(
          <div className="layout" style={{ height: 400, width: '100%' }}>
          <MaterialTable
          
             data={tableData}
             onSelectionChange={(rows)=>!setselectedRows(rows)}
          columns={columns}
          
          options ={{
            selection:true,
            actionsColumnIndex: -1,addRowPosition:"first"
          }}
          actions ={[{
            icon:'delete',
            tooltip:"Delete all selected rows",
            onClick:() =>handleBulkDelete()
          }]}
         
          editable={{
            onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
              const updateRows =[...tableData,{id:Math.floor(Math.random()*100),...newRow}]
             setTimeout(()=>{ setTableData(updateRows)
              resolve()},2000)
             
             
            }
            ),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{

              const index = oldRow.tableData.id;
              const updatedRows =[...tableData]
              updatedRows[index] = updatedRow
              setTimeout(()=>{ setTableData(updatedRows)
                resolve()},2000)
            })
          }}
         
         
          />
          
      
      
        </div>
        )
  

          
    
}




export default Order