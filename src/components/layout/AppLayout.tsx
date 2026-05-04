import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../ui/Modal/Modal';
import { Button } from '../ui/Button/Button';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
    const { logout } = useAuth();
    const { projectId } = useParams<{ projectId: string }>();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    return (
        <div className={styles.layoutContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <div className={styles.logoIcon}>
                        <img src="/koda.png" alt="Koda Logo" className={styles.logoImage} />
                    </div>
                    <div>
                        <div className={styles.logoText}>KODA</div>
                    </div>
                </div>
                <nav className={styles.navMenu}>
                    <NavLink 
                        className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : styles.navItemInactive}`} 
                        to="/"
                        end
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>dashboard</span>
                        <span>Panel de Proyectos</span>
                    </NavLink>
                    {projectId && (
                        <>
                            <NavLink 
                                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : styles.navItemInactive}`} 
                                to={`/projects/${projectId}/board`}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>view_kanban</span>
                                <span>Tablero</span>
                            </NavLink>
                            <NavLink 
                                className={({ isActive }) => `${styles.navItem} ${isActive ? styles.navItemActive : styles.navItemInactive}`} 
                                to={`/projects/${projectId}/team`}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>groups</span>
                                <span>Equipo</span>
                            </NavLink>
                        </>
                    )}
                </nav>
                <div className={styles.footerMenu}>
                    <button onClick={() => setIsLogoutModalOpen(true)} className={`${styles.navItem} ${styles.navItemDanger}`}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {children}

            <Modal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                title="Cerrar Sesión"
            >
                <div className={styles.modalContent}>
                    <p className={styles.modalText}>
                        ¿Estás seguro de que deseas cerrar tu sesión? Tendrás que volver a ingresar tus credenciales para acceder.
                    </p>
                    <div className={styles.modalActions}>
                        <Button variant="secondary" onClick={() => setIsLogoutModalOpen(false)}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={logout}>
                            Cerrar Sesión
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
