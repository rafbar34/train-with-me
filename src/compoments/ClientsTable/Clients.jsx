import React, { useState } from "react";
import MaterialTable from 'material-table'
import "./Clients.css"
import {userSchema} from "../Validations/UserValidetion"
import { number } from "yup";
import { string } from "yup/lib/locale";
import "../ClientsTable/Clients.css"

const columns = [
  { field: 'id', title: 'ID', width: 90, editable:false },
  {
    field: 'firstName',
    title: 'First name',
    width: 150, 
  validate:rowData=>{if(rowData.firstName.length<4){
return"more letters"
  }},
    
    
  },
  {
    field: 'lastName',
    title: 'Last name',
    width: 150,
    validate:rowData=>{if(rowData.lastName.length==0){
      return"empty"
  }else if(rowData.lastName.length<6){
    return"you need min 6 characters"}}
  },
  {
    field: 'age',
    title: 'Age',
    width: 110,
    type: 'numeric', validate: rowData => rowData.age > 10 && rowData.age < 100
  },
  {
    field: 'email',
    title: 'Email',
    type: 'email',
   
    width: 110,
    validate:rowData=>{if(rowData.email==""){
      return"more letters"
  }else if(!rowData.email.includes("@" && ".")){
    return"required email"}}
  
  }

];


const clientsList = [
  { id: 1, lastName: 'Jochemczyk', firstName: 'Adam', age: 35, email:'mymail@gmail.com' },


 
 
];


const Clients =() => {
  const [tableData,setTableData] = useState(clientsList)
  const [selectedRows,setselectedRows]=useState([])
const handleBulkDelete=()=>{
  const update= tableData.filter(row=>!selectedRows.includes(row))
  setTableData(update);
}/*const createUser = (event) =>{
 
    let formData = {
      firstName: event.target[1].value,
      lastName: event.target[2].value,
      age: event.target[3].value
    };
    console.log(formData);
  
}*/

   
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
             { /*createUser()*/} 
             
            }
            ),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
             /* createUser() funkcja do walidacji z biblioteki yui do sprawdzenia bo nie dziala*/
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




export default Clients