import React from "react";

const ListStudents = (props)=>{
    const {students}=props
    return(
        <div className="container my-1">
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sıra No</th>
      <th scope="col">Öğrenci No</th>
      <th scope="col">Ad</th>
      <th scope="col">Soyadı</th>
      <th scope="col">sınıfı</th>
      <th scope="col">okulu</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student,index)=>(
    <tr key={student.id}>
      <th scope="row">{index+1}</th>
      <td>{student.studentno}</td>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.studentclass}</td>
      <td>{student.schoolname}</td>
    </tr>
    ))}
  </tbody>
</table>
</div>
    )

}

export default ListStudents