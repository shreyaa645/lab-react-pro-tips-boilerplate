import './Register.css'
import { useState } from 'react';

function Contact() {
    
        const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const [alerts, setAlerts] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const [focusState, setFocusState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFocus = (name) => {
        setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAlerts = {};

        if (formData.firstName === "") {
            newAlerts.firstName = "Please Enter your first name.";
        } else {
            newAlerts.firstName = "";
        }

        if (formData.lastName === "") {
            newAlerts.lastName = "Please Enter your last name.";
        } else {
            newAlerts.lastName = "";
        }

        if (formData.email === "") {
            newAlerts.email = "Please Enter your email.";
        } else {
            newAlerts.email = "";
        }

        if (formData.phoneNumber === "") {
            newAlerts.phoneNumber = "Please Enter your phone Number.";
        } else {
            newAlerts.phoneNumber = "";
        }

        setAlerts(newAlerts);

        if (
            newAlerts.firstName === "" &&
            newAlerts.lastName === "" &&
            newAlerts.email === "" &&
            newAlerts.phoneNumber === ""
        ) {
            setRegistrationSuccess(true);
        }
    };

    return (
        <>
            <div className='App'>
                {registrationSuccess && (
                    <div className='success' style={{
                        backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px', borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        Registration Successful!
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            onFocus={() => handleFocus('firstName')}
                            style={{ borderColor: focusState.firstName ? 'navy' : '#ccc' }}
                        />
                        <div className='alert'>{alerts.firstName}</div>
                    </label>
                    <br />
                    <label>
                        <input
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            onFocus={() => handleFocus('lastName')}
                            style={{ borderColor: focusState.lastName ? 'navy' : '#ccc' }}
                        />
                        <div className='alert'>{alerts.lastName}</div>
                    </label>
                    <br />

                    <label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            onFocus={() => handleFocus('email')}
                            style={{ borderColor: focusState.email ? 'navy' : '#ccc' }}
                        />
                        <div className='alert'>{alerts.email}</div>
                    </label>
                    <br />
                    <label>
                        <input
                            type='tel'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone Number"
                            onFocus={() => handleFocus('phoneNumber')}
                            style={{ borderColor: focusState.phoneNumber ? 'navy' : '#ccc' }}
                        />
                        <div className='alert'>{alerts.phoneNumber}</div>
                    </label>
                    <br />

                    <button
                        type='submit'
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    );
        
    
}

export default Contact