import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';

/**
 * Route-level error UI. Wired as the router's `errorElement`, so any error a
 * route throws (render or loader) lands here instead of React Router's default
 * developer screen.
 */
export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  let code = 'Error';
  let message = 'Something went wrong on this page.';
  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <main className={styles.page}>
      <p className={styles.code}>{code}</p>
      <h1 className={styles.title}>Well, that wasn’t supposed to happen.</h1>
      <p className={styles.subtitle}>{message}</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => navigate('/')}>← Back to home</button>
        <button className={styles.buttonGhost} onClick={() => window.location.reload()}>Reload</button>
      </div>
    </main>
  );
}
