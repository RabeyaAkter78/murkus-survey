import { Input, Table } from "antd";
import { act } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
    {
        key: '2 ',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
    {
        key: '3',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
];

const ProjectUsers = () => {
    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'key',
            key: 'key ',
        },
        {
            title: 'User',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => {
                return (
                    <div className="flex justify-start items-center gap-2  ">
                        <img className="w-10 h-10 rounded-md" src={record?.img} alt="" />
                        <p>{record?.name}</p>
                    </div>
                )
            }
        },
        {
            title: 'Company Name',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone ',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email ',
        },
        {
            title: 'Actions',
            dataIndex: 'key',
            key: 'key',
            render: (_, record) => {
                return (
                    <div className="flex justify-start items-center">
                        <button className="text-2xl">
                            <MdDelete />
                        </button>
                    </div>
                )
            }
        }
    ];

    return (
        <div>
            <div className='between-center px-3 my-2 pt-5 pb-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1}
                        className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
                    <p className='text-xl'>Project Details</p>
                </div>
                <div className='end-center gap-2'>
                    <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />}
                        placeholder="Search" />
                    <Link to={`/add-project`}
                        className='bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        Add New Project
                        <FaPlus />
                    </Link>
                </div>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default ProjectUsers
