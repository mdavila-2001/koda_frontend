import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { httpClient } from '../../api/httpClient';
import type { User } from '../../types';
import styles from './TeamSettings.module.css';

export const TeamSettings: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [members, setMembers] = useState<User[]>([]);
    const [isLoadingMembers, setIsLoadingMembers] = useState(true);

    const fetchMembers = useCallback(async () => {
        if (!projectId) return;
        setIsLoadingMembers(true);
        try {
            const data = await httpClient<User[]>(`/projects/${projectId}/members`);
            setMembers(data);
        } catch (err) {
            console.error('Failed to fetch members', err);
        } finally {
            setIsLoadingMembers(false);
        }
    }, [projectId]);

    useEffect(() => {
        fetchMembers();
    }, [fetchMembers]);

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!email) return;

        setIsLoading(true);
        try {
            await httpClient(`/projects/${projectId}/members`, {
                method: 'POST',
                body: JSON.stringify({ email }),
            });
            setSuccess('Member invited successfully!');
            setEmail('');
            fetchMembers();
        } catch (err: any) {
            setError(err.message || 'Failed to invite member');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AppLayout>
            <div className={styles.pageContainer}>
                <main className={styles.card}>
                    
                    {/* Header Section */}
                    <header className={styles.headerSection}>
                        <h1 className={styles.headerTitle}>Team Settings</h1>
                        <p className={styles.headerSubtitle}>Manage your team members and their account permissions here.</p>
                    </header>

                    {/* Invite Section */}
                    <section className={styles.inviteSection}>
                        <h2 className={styles.sectionTitle}>Invite Members</h2>
                        <p className={styles.sectionSubtitle}>All invited members will have standard read and write permissions initially.</p>
                        
                        {error && <div className={styles.errorAlert}>{error}</div>}
                        {success && <div className={styles.successAlert}>{success}</div>}
                        
                        <form onSubmit={handleInvite} className={styles.inviteForm}>
                            <div className={styles.inputWrapper}>
                                <span aria-hidden="true" className={`material-symbols-outlined ${styles.inputIcon}`}>mail</span>
                                <input
                                    className={styles.emailInput}
                                    placeholder="Email address"
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
                                {isLoading ? 'Inviting...' : 'Invite Member'}
                            </button>
                        </form>
                    </section>

                    {/* Members List Section */}
                    <section className={styles.membersSection}>
                        <h2 className={styles.sectionTitle}>Project Members</h2>
                        <div className={styles.membersList}>
                            {isLoadingMembers ? (
                                <div className={styles.memberRow}>
                                    <div className={styles.memberInfo}>
                                        <p className={styles.memberEmail}>Loading members...</p>
                                    </div>
                                </div>
                            ) : members.length === 0 ? (
                                <div className={styles.memberRow}>
                                    <div className={styles.memberInfo}>
                                        <p className={styles.memberEmail}>No members found. Invite someone above.</p>
                                    </div>
                                </div>
                            ) : (
                                members.map(member => (
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
                                                <span className={styles.statusBadgeDot}></span> Active
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </AppLayout>
    );
};
