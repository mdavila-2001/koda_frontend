import { type InputHTMLAttributes, forwardRef, type ReactNode, useState } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    icon?: ReactNode;
    labelClassName?: string;
    inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = '', labelClassName = '', inputClassName = '', id, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const inputId = id || label.replaceAll(/\s+/g, '-').toLowerCase();
        
        const isPassword = type === 'password';
        let inputType = type;
        if (isPassword) {
            inputType = showPassword ? 'text' : 'password';
        }

        return (
            <div className={`${styles.container} ${className}`}>
                <label htmlFor={inputId} className={`${styles.label} ${labelClassName}`}>
                    {label}
                </label>
                <div className={styles.inputWrapper}>
                    {icon && <span className={styles.icon}>{icon}</span>}
                    <input
                        id={inputId}
                        ref={ref}
                        type={inputType}
                        className={`${styles.input} ${icon ? styles.hasIcon : ''} ${isPassword ? styles.hasAction : ''} ${error ? styles.inputError : ''} ${inputClassName}`}
                        {...props}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        >
                            <span className="material-symbols-outlined">
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </span>
                        </button>
                    )}
                </div>
                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';