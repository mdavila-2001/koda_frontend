import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { useTeamMembers } from '../../hooks/useTeamMembers';
import styles from './TeamSettings.module.css';

export const TeamSettings: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { members, isLoading: isLoadingMembers, inviteMember } = useTeamMembers(projectId);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!email) return;

        setIsLoading(true);
        try {
            await inviteMember(email);
            setSuccess('¡Miembro invitado exitosamente!');
            setEmail('');
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Error al invitar al miembro';
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    const renderMembersList = () => {
        if (isLoadingMembers) {
            return (
                <div className={styles.memberRow}>
                    <div className={styles.memberInfo}>
                        <p className={styles.memberEmail}>Cargando miembros...</p>
                    </div>
                </div>
            );
        }

        if (members.length === 0) {
            return (
                <div className={styles.memberRow}>
                    <div className={styles.memberInfo}>
                        <p className={styles.memberEmail}>Sin miembros aún. Invita a alguien arriba.</p>
                    </div>
                </div>
            );
        }

        return members.map(member => (
            <div key={member.id} className={styles.memberRow}>
                <div className={styles.memberInfo}>
                    <div className={styles.memberAvatarPlaceholder}>
                        {member.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <p className={styles.memberName}>{member.name}</p>
                        <p className={styles.memberEmail}>{member.email}</p>
                    </div>
                </div>
                <div className={styles.memberActions}>
                    <span className={styles.statusBadgeActive}>
                        <span className={styles.statusBadgeDot}></span>
                        {' '}Activo
                    </span>
                </div>
            </div>
        ));
    };

    return (
        <AppLayout>
            <div className={styles.pageContainer}>
                <main className={styles.card}>
                    
                    {/* Header Section */}
                    <header className={styles.headerSection}>
                        <h1 className={styles.headerTitle}>Gestión del Equipo</h1>
                        <p className={styles.headerSubtitle}>Administra los miembros de tu equipo y sus permisos aquí.</p>
                    </header>

                    {/* Invite Section */}
                    <section className={styles.inviteSection}>
                        <h2 className={styles.sectionTitle}>Invitar Miembros</h2>
                        <p className={styles.sectionSubtitle}>Los miembros invitados tendrán permisos estándar de lectura y escritura inicialmente.</p>
                        
                        {error && <div className={styles.errorAlert}>{error}</div>}
                        {success && <div className={styles.successAlert}>{success}</div>}
                        
                        <form onSubmit={handleInvite} className={styles.inviteForm}>
                            <div className={styles.inputWrapper}>
                                <span aria-hidden="true" className={`material-symbols-outlined ${styles.inputIcon}`}>mail</span>
                                <input
                                    className={styles.emailInput}
                                    placeholder="Correo electrónico"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    required
                                />
                            </div>
                            <button
                                className={styles.inviteButton}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Invitando...' : 'Invitar Miembro'}
                            </button>
                        </form>
                    </section>

                    {/* Members List Section */}
                    <section className={styles.membersSection}>
                        <h2 className={styles.sectionTitle}>Miembros del Proyecto</h2>
                        <div className={styles.membersList}>
                            {renderMembersList()}
                        </div>
                    </section>
                </main>
            </div>
        </AppLayout>
    );
};
