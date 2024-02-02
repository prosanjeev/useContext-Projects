
import { AuthProvider } from './components/AuthContext';
import { LoginComponent } from './components/LoginComponent';

function App() {
  return (
    <AuthProvider>
    <LoginComponent />
  </AuthProvider>
  );
}

export default App;
