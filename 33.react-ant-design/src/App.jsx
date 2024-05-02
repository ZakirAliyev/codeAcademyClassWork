import './App.css';
import {Table, Button, Tooltip, Popconfirm, Pagination, message} from 'antd';
import {useEffect, useState} from 'react';
import {deleteOne, getAll} from './requests/requests.js';
import * as PropTypes from "prop-types";

function QuestionCircleOutlined(props) {
    return null;
}

QuestionCircleOutlined.propTypes = {style: PropTypes.shape({color: PropTypes.string})};

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll('/products').then((res) => {
            setProducts(res.data);
            console.log(res.data);
            setLoading(false);
        });
    }, []);

    function handleDelete(id) {
        deleteOne('/products',id).then(r => {
            if(r.status === 200) {
                const filtered = [...products].filter(re => re.id !== id);
                setProducts(filtered);
            }
        })
    }

    function confirm(id) {
        handleDelete(id);
        message.success('Click on Yes');
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            sorter: (a, b) => a.id.localeCompare(b.id),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => <img src={image} alt={image} height={50} width={50}/>,
        },
        {
            title: 'Name',
            dataIndex: 'title',
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['ascend', 'descend'],
            render: (title) => <Tooltip title={title}>
                <span>{title.slice(0, 20)}...</span>
            </Tooltip>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (description) => <Tooltip title={description}>
                <span>{description.slice(0, 50)}...</span>
            </Tooltip>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Action',
            render: (elem, data) => (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    onConfirm={()=> confirm(data.id)}
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            ),
        },
        {
            title: 'Edit',
            render: () => (
                <Button type="primary">
                    Edit
                </Button>
            ),
        },
    ];

    return (
        <div className={"container"}>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={products}
                showSorterTooltip={{
                    target: 'sorter-icon',
                }}
                pagination={{pageSize: 5}}
            />
        </div>
    );
}

export default App;
