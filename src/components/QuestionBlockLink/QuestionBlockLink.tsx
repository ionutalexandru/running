
import Link from 'next/link';
import React from 'react';
import styles from './QuestionBlockLink.module.css';


type BaseProps = {
  label: string;
  className?: string;
  disabled?: boolean;
};

type LinkProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof BaseProps> & {
    href?: string;
  };

type ButtonProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof BaseProps> & {
    href?: never;
  };

type QuestionBlockLinkProps = LinkProps | ButtonProps;


const QuestionBlockLink: React.FC<QuestionBlockLinkProps> = ({
  label,
  className,
  disabled=false,
  ...props
}) => {
  const componentClassName = `${styles.container} ${disabled ? styles.disabled : ''} ${className || ''}`;

  const content = (
    <>
      <div className={styles.questionBlock}>
        <div className={styles.rivet1}></div>
        <div className={styles.rivet2}></div>
        <div className={styles.rivet3}></div>
        <div className={styles.rivet4}></div>
        <span className={styles.questionMark}>?</span>
      </div>
      <div className={styles.brickPlatform}>
        <span className={styles.label}>{label}</span>
      </div>
    </>
  );

  if (props.href) {
    return (
      <Link
        className={componentClassName}
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
        aria-disabled={disabled}
        {...(props as Omit<LinkProps, 'label' | 'diabled'>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={componentClassName}
      disabled={disabled}
      {...(props as Omit<ButtonProps, 'label' | 'disabled'>)}
    >
      {content}
    </button>
  );
};

export default QuestionBlockLink;