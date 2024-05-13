import {Table, Tooltip} from 'antd';
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import {useGetAllProductsQuery} from "../../services/products.js";
import {useDeleteProductByIdMutation} from "../../services/products.js";

const MyTable = () => {
    const {data, refetch} = useGetAllProductsQuery();
    const [deleteProductById] = useDeleteProductByIdMutation();
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text, record) => (
                <Tooltip placement="leftBottom" title={text}>
                    <span>{record.title.slice(0, 40)}...</span>
                </Tooltip>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text, record) => (
                <span>{record.price} $</span>
            )
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (text, record) => (
                <Tooltip placement="leftBottom" title={text}>
                    <span>{record.description.slice(0, 40)}...</span>
                </Tooltip>
            )
        },
        {
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, record) => (
                <img src={record.image} alt={text} height={50}/>
            )
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <Button variant="contained" color="error" onClick={() => {
                    handleDelete(record.id)
                }}>Delete</Button>
            )
        },
    ];

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProductById(id);
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{pageSize: 8}}
            rowKey="id"
        />
    )
};


export default MyTable;
