import React, { useState } from 'react'

const MAJORS=['yüzme','pilates','basketbol','fitness','tenis','voleybol']
const TIMES=['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00']
const Home = (props) => {

    const [educationMajor,setEducationMajor]= useState(MAJORS[0]);
    const [educationTime,setEducationTime]= useState(TIMES[0]);
    const [courtMajor,setCourtMajor]= useState(MAJORS[0]);
    const [courtTime,setCourtTime]= useState(TIMES[0]);

    const createExerciseProgram=()=>{
    //Backende egzersiz oluşturma isteği atar.Bakcend oluşturduğu egzersizin id'sini döner.Dönülen id ile
    //kullanıcı /ezercise/:id route'una yönlendirilir.
    }
    const onClickGetClass=()=>{
    //Backende ders alma isteği atılır.İsteğin içinde seçilen branş ve saat gönderilir.Eğer bu branş ve bu saate
        //kontenjanı boş olan eğitmen varsa kullanıcı eğitmene atanır ve success cevabı döner.Eğer yoksa hata mesajı döner
    }
    const onClickChooseCourt=()=>{
    //Drçilrn saatte o courtta kontenjan varsa randevu atar ve success mesajı döner.Yoksa hata döner.
    }
    return (
        <div>
            <div className='blur-background-wrapper'></div>
    <div className="exercise-container">
        <button className="create-program-btn"  onClick={createExerciseProgram}>Egzersiz Programı Oluştur</button>
        <div className="selection-container">
            <select className="select-input" onChange={e => setEducationMajor(e.target.value)}>
                {MAJORS.map(major => <option value={major}>{major}</option>)}
            </select>
            <select className="select-input" onChange={e => setEducationTime(e.target.value)}>
                {TIMES.map(time => <option value={time}>{time}</option>)}
            </select>
            <button className="get-education-btn">Eğitim Al</button>
        </div>
        <div className="selection-container">
            <select className="select-input" onChange={e => setCourtMajor(e.target.value)}>
                {MAJORS.map(major => <option value={major}>{major}</option>)}
            </select>
            <select className="select-input" onChange={e => setCourtTime(e.target.value)}>
                {TIMES.map(time => <option value={time}>{time}</option>)}
            </select>
            <button className="get-education-btn">Spor salonu seç</button>
        </div>
    </div>
        </div>

)
}

export default Home