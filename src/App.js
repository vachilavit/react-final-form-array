import React, { useState } from 'react'
import UserForm from './components/UserForm'
import UserView from './components/UserView'

function App() {
    const [formValues, setFormValues] = useState({})
    const onSubmit = (values) => {
        setFormValues(values)
    }

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <UserForm {...{ onSubmit }} />
            </div>

            <div>
                <UserView data={formValues} />
            </div>
        </div>
    )
}

export default App
