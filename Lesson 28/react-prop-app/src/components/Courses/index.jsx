import React from 'react';

const Courses = ({ data }) => {
    return (
        <div className="row justify-content-center gap-4 mt-3 jus">
            {data && data.map((element) => {
                return (
                    <div className="card col-4 p-3" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={element.img} alt="Course" />
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.price} $</p>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Courses;
