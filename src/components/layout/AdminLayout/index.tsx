import AdminSidebar from '../AdminSidebar/';
import React from 'react';
import styles from './AL.module.css';

type AdminLayoutProps = {
    children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className={styles.adminLayout}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <AdminSidebar />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;