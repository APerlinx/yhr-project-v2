import { useState } from 'react';
import UploadWidget from '../../utils/UploadWidget';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className=" flex min-h-screen flex-col items-center justify-center px-4"
      dir="rtl"
    >
      {!authed ? (
        <div className="space-x-4 space-y-4">
          <h2 className="text-2xl">עמוד מנהל</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" סיסמה"
            className="rounded bg-[#f3f3f3] p-2 text-black"
          />
          <button
            onClick={handleLogin}
            className="rounded bg-gray-600 p-2 duration-200 hover:bg-gray-800"
          >
            התחברות
          </button>
        </div>
      ) : (
        <UploadWidget />
      )}
    </div>
  );
}
