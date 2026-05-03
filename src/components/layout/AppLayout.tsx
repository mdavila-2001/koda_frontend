import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { logout } = useAuth();
    const { projectId } = useParams<{ projectId: string }>();
    return (
        <div className={styles.layoutContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <div className={styles.logoIcon}>
                        <span className="material-symbols-outlined">dns</span>
                    </div>
                    <div>
                        <div className={styles.logoText}>KODA</div>
                        <div className={styles.logoSubtitle}>Technical workspace</div>
                    </div>
                </div>
                <nav className={styles.navMenu}>
                    <Link className={`${styles.navItem} ${styles.navItemActive}`} to="/">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>dashboard</span>
                        <span>Dashboard</span>
                    </Link>
                    {projectId && (
                        <>
                            <Link className={`${styles.navItem} ${styles.navItemInactive}`} to={`/projects/${projectId}/board`}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>view_kanban</span>
                                <span>Board</span>
                            </Link>
                            <Link className={`${styles.navItem} ${styles.navItemInactive}`} to={`/projects/${projectId}/team`}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>groups</span>
                                <span>Team</span>
                            </Link>
                        </>
                    )}
                </nav>
                <div className={styles.footerMenu}>
                    <button onClick={logout} className={`${styles.navItem} ${styles.navItemDanger}`}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            {children}
        </div>
    );
};
