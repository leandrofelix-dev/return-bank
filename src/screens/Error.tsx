import { Navigate } from 'react-router-dom';

export function Error() {
  return (
    <div className="error">
      <Navigate to="/login"/>
    </div>
  )
}
