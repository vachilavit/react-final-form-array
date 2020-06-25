import React from 'react'

function UserView({ data }) {
    if (data && Object.keys(data).length > 0) {
        return (
            <>
                <div>
                    <label>ชื่อจริง: </label>
                    {data.firstName}
                </div>

                <div>
                    <label>นามสกุลจริง: </label>
                    {data.lastName}
                </div>

                <div style={{ marginTop: 8 }}>
                    {data.workingExperiences &&
                        data.workingExperiences.map((item, index) => (
                            <React.Fragment key={index}>
                                <div>
                                    <label>ชื่อบริษัท: </label>
                                    {item.companyName}
                                </div>

                                <div>
                                    <label>ประสบการณ์ (ปี): </label>
                                    {item.experienceYears}
                                </div>
                            </React.Fragment>
                        ))}
                </div>
            </>
        )
    }
    return null
}

export default UserView
