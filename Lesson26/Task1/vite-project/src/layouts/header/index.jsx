import React from 'react'

const Header = ({fullName}) => {
    return (
        <div>
            <h1>Header</h1>
            <h4>Full Name: {fullName}</h4>
        </div>
    )
}

export default Header