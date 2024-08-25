import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BACKEND_URL from '../utils/config';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${BACKEND_URL}/api/users`, {
                headers: { 'x-auth-token': localStorage.getItem('token') },
            });
            setUsers(res.data);
        };
        fetchUsers();
    }, []);

    const deleteUser = async userId => {
        try {
            await axios.delete(`${BACKEND_URL}/api/users/${userId}`, {
                headers: { 'x-auth-token': localStorage.getItem('token') },
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            alert('Error deleting user');
        }
    };

    const openEditModal = user => {
        setEditUser(user);
    };

    const handleEditSubmit = async () => {
        try {
            await axios.put(`${BACKEND_URL}/api/users/${editUser._id}`, editUser, {
                headers: { 'x-auth-token': localStorage.getItem('token') },
            });
            alert('User updated successfully');
            setUsers(users.map(u => (u._id === editUser._id ? editUser : u)));
            setEditUser(null);
        } catch (err) {
            alert('Error updating user');
        }
    };

    return (
        <>
            <h2 className="text-center mb-4">Registered Users</h2>
            <ul className="list-group">
    {users && users.length > 0 ? (
        users.map(user => (
            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{user.name} - {user.phone}</span>
                <div>
                    <button className="btn btn-warning me-2" onClick={() => openEditModal(user)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
            </li>
        ))
    ) : (
        <h3 className="list-group-item">
            No registered users to show
        </h3>
    )}
</ul>


            {editUser && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="btn-close" onClick={() => setEditUser(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" value={editUser.name} onChange={e => setEditUser({ ...editUser, name: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" value={editUser.phone} onChange={e => setEditUser({ ...editUser, phone: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setEditUser(null)}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={handleEditSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
