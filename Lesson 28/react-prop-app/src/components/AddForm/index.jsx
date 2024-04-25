import React from 'react'
import './index.scss'
import {nanoid}

const Form = () => {

    const handleSubmit = ((e) => {
        e.preventDefault();

        let newCourse = {
            id: nanoid();
        }
    });

    return (
        <div className="container mt-5">
            <form className="gap-4">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Image URL" aria-label="Image URL" aria-describedby="basic-addon1" />
                </div>
            </form>
        </div>
    )
}

export default Form