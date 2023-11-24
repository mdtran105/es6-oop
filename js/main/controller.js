export function displayTable(type, list) {
  let contentHTML = "";
  if (type === 'student') {
    for (let data of list) {
      let trString = `<tr>
                      <td>${data.id}</td>                
                      <td>${data.name}</td>                
                      <td>${data.email}</td>      
                      <td>${data.address}</td>
                      <td>${data.math}</td>      
                      <td>${data.physic}</td>      
                      <td>${data.chemistry}</td>      
                      <td>${data.calculateAvg().toFixed(2)}</td>
                      <td>
                          <button onclick="deletePerson('student','${data.id}')" 
                            class='btn btn-danger'>Xóa</button>
                          <button onclick="editPerson('student','${data.id}')"
                            data-toggle="modal" data-target="#myModal"
                            class='btn btn-warning'>Sửa</button>
                      </td>                
                        </tr>`;
      contentHTML += trString;
    }
  } else if(type === 'employee'){
    for (let data of list) {
      let trString = `<tr>
                      <td>${data.id}</td>                
                      <td>${data.name}</td>                
                      <td>${data.email}</td>      
                      <td>${data.address}</td>
                      <td>${data.workingDays}</td>         
                      <td>${data.calculateSalary()}</td>
                      <td>
                          <button onclick="deletePerson('employee','${data.id}')" 
                            class='btn btn-danger'>Xóa</button>
                          <button onclick="editPerson('employee','${data.id}')"
                            data-toggle="modal" data-target="#myModal"
                            class='btn btn-warning'>Sửa</button>
                      </td>                
                        </tr>`;
      contentHTML += trString;
    }
  } else {
    for (let data of list) {
      let trString = `<tr>
                      <td>${data.id}</td>                
                      <td>${data.company}</td>                
                      <td>${data.email}</td>      
                      <td>${data.address}</td>
                      <td>${data.invoiceValue}</td>         
                      <td>${data.rating}</td>
                      <td>
                          <button onclick="deletePerson('customer','${data.id}')" 
                            class='btn btn-danger'>Xóa</button>
                          <button onclick="editPerson('customer','${data.id}')"
                            data-toggle="modal" data-target="#myModal"
                            class='btn btn-warning'>Sửa</button>
                      </td>                
                        </tr>`;
      contentHTML += trString;
    }
  }
  document.getElementById('tableDanhSach').innerHTML = contentHTML;
}