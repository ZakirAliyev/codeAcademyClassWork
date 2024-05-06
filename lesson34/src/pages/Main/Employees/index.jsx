import {useState, useEffect} from "react";
import {getAll} from "../../../api/requests.js";
import EmployeeCard from "./EmployeeCard/index.jsx";

function Employee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAll('/employees')
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className={"row"}>
                {employees && employees.map((employee) => {
                    return <EmployeeCard key={employee.id} employee={employee}/>;
                })}
            </div>
        </>
    );
}

export default Employee;
