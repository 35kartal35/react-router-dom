import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListStudents = (props) => {
  const { students,setStudents } = props;
  const handleDelete=(student)=>{
    
    axios.delete(`http://localhost:3004/students/${student.id}`)
    .then(res=>{
      const filteredStudents=students.filter(item=>item.id !== student.id)
      setStudents(filteredStudents)
    })
    .catch(err=>{
      console.log(err);
      alert("Silme esnasında bir sıkıntı oldu")
    })
  }
  return (
    <div className="container my-1">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sıra No</th>
            <th scope="col">Öğr. No</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Sınıfı</th>
            <th scope="col">Okulu</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,index) => (
            <tr key={student.id}>
              <th scope="row">{index+1}</th>
              <td>{student.studentNo}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.studentClass}</td>
              <td>{student.schoolName}</td>
              <td>
                <div>
                <button onClick={()=>handleDelete(student)} type="button" class="btn btn-danger btn-sm">SIL</button>
                <Link to={`/edit-student/${student.id}`} type="button" class="btn btn-primary btn-sm">DUZENLE</Link>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudents;