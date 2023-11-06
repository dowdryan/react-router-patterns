import './NewColorForm.css'
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewColorForm({addColor}) {
    const [form, updateForm] = useState({name: "", hex: "#ffffff"})
    const history = useHistory()
    // ================================================================================
    function handleChange(event) {
        event.persist()
        updateForm(f => ({...f, [event.target.name]: event.target.value}))
    }
    // ================================================================================
    function handleSubmit(event) {
        event.preventDefault();
        addColor({ [form.name]: form.hex })
        history.push("/colors")
    }
    const {hex, name} = form
    // ================================================================================
    return (
        <div className='NewColor'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Color Name</label>
                    <input
                        name='name'
                        id='name'
                        placeholder='Enter Name of Color'
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor='hex'>Color Value</label>
                    <input
                        type='color'
                        name='hex'
                        id='hex'
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input type='Submit' value="Add This Color" readOnly/>
            </form>
        </div>
    )
}

export default NewColorForm