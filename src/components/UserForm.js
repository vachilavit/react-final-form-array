import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

function UserForm({ onSubmit: onSubmitParent }) {
    const onSubmit = (values) => {
        if (onSubmitParent) {
            onSubmitParent(values)
        }
    }

    return (
        <Form
            onSubmit={onSubmit}
            mutators={{
                ...arrayMutators,
            }}
            subscription={{}}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>ชื่อจริง</label>
                        <Field name='firstName' component='input' />
                    </div>
                    <div>
                        <label>นามสกุลจริง</label>
                        <Field name='lastName' component='input' />
                    </div>
                    <FieldArray name='workingExperiences'>
                        {({ fields }) => (
                            <div style={{ marginTop: 8 }}>
                                {fields.map((name, index) => (
                                    <div key={name}>
                                        <div>
                                            <label>ชื่อบริษัท</label>
                                            <Field name={`${name}.companyName`} component='input' />
                                        </div>
                                        <div>
                                            <label>ประสบการณ์ (ปี)</label>
                                            <Field
                                                name={`${name}.experienceYears`}
                                                render={({ input }) => <input type='number' {...input} />}
                                            />
                                        </div>
                                        <button type='button' onClick={() => fields.remove(index)}>
                                            ลบประวัติการทำงาน
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type='button'
                                    onClick={() => fields.push({ companyName: undefined, experienceYears: undefined })}
                                >
                                    เพิ่มประวัติการทำงาน
                                </button>
                            </div>
                        )}
                    </FieldArray>

                    <button type='submit'>บันทึก</button>
                </form>
            )}
        />
    )
}

export default UserForm
