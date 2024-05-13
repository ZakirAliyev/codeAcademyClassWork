import Navbar from "../../components/Navbar/index.jsx";
import MyTable from "../../components/MyTable/index.jsx";

function AdminPage() {

    return (
        <div>
            <Navbar/>
            <div className="container" style={{marginTop: "30px"}}>
                <MyTable />
            </div>
        </div>
    );
}

export default AdminPage;