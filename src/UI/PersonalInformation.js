import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const PersonalInformation = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        weightGoal: '',
        currentWeight: '',
        height: '',
        gender: '',
        birthdate: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        const splitDate=formData.birthdate.split('.');
        const date=`${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`
        e.preventDefault();
        axios.post('https://api.example.com/data', { ...formData,date })
            .then(response => {
                navigate('/home')
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
        <div className='blur-background-wrapper'></div>
        <div className="form-container">
            <h2>Kişisel Bilgiler</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">İsim:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="weightGoal">Hedef Kilo:</label>
                    <input
                        type="text"
                        id="weightGoal"
                        name="weightGoal"
                        value={formData.weightGoal}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="currentWeight">Güncel Kilo:</label>
                    <input
                        type="text"
                        id="currentWeight"
                        name="currentWeight"
                        value={formData.currentWeight}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="height">Boy:</label>
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Cinsiyet:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="birthdate">Doğum günü:</label>
                    <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Telefon Numarası:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Kaydet</button>
            </form>
        </div>
        </div>
    );
};

export default PersonalInformation;