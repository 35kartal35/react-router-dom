import React, {useState} from "react";
import Header from "../components/Header";



const AddStudent = () => {
    const [studentNo,setStudentNo]=useState("")
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [studentClass,setStudentClass]=useState("")
    const [schoolName,setSchoolName]=useState("")
    return (
        <div>
            <Header />
            
            <div className="container my-5">
                <form >
                <div class="mb-3">
                    <label htmlfor="Studentno"
                        className="form-label">Öğreni Numarası</label>
                    <input
                        type="number"
                        className="form-control"
                        id="studentno"
                        placeholder="orn:100"
                        value={studentNo}
                        onChange={(event)=>setStudentNo(event.target.value)} />
                </div>
                <div className="container my-5">
                    <div class="mb-3">
                        <label htmlfor="name"
                            className="form-label">Öğreni adı</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="orn:ahmet"
                            value={name}
                        onChange={(event)=>setName(event.target.value)}
                             />
                    </div>
                </div>
                <div className="container my-5">
                    <div class="mb-3">
                        <label htmlfor="name"
                            className="form-label">Öğreni Soyadı</label>
                        <input
                            type="text"
                            className="form-control"
                            id="surname"
                            placeholder="orn:kılıç"
                            value={surname}
                        onChange={(event)=>setSurname(event.target.value)} />
                    </div>
                </div>
                <div className="container my-5">
                    <div class="mb-3">
                        <label htmlfor="name"
                            className="form-label">Sınıfı</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentclass"
                            placeholder="orn:9/V"
                            value={studentClass}
                        onChange={(event)=>setStudentClass(event.target.value)}
                            />
                    </div>
                </div>
                <div className="container my-5">
                    <div class="mb-3">
                        <label htmlfor="name"
                            className="form-label">Okulu</label>
                        <input
                            type="text"
                            className="form-control"
                            id="schoolname"
                            placeholder="orn:Hoca Ahmet Yesevi Lisesi"
                            value={schoolName}
                        onChange={(event)=>setSchoolName(event.target.value)}
                            />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                    <button type="submit" className="btn btn-outline-primary w-50">Kaydet</button>

                    </div>
                </div>
                </form>
            </div>
            
            </div>

            )
}

            export default AddStudent
