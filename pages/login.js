import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // 擬態的に直接 /gastro へ遷移
        console.log('擬似ログイン: ', { username, password });
        router.push('/gastro');
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>ログイン</h1>
            <form
                onSubmit={handleLogin}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    width: "350px",
                }}
            >
                <input
                    type="text"
                    placeholder="ユーザー名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{
                        padding: "1rem",
                        fontSize: "1.25rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                    }}
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: "1rem",
                        fontSize: "1.25rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "1rem",
                        background: "blue",
                        color: "white",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        borderRadius: "8px",
                    }}
                >
                    Login
                </button>
            </form>
            <button
                onClick={() => router.push('/')}
                style={{
                    width: '150px',
                    margin: '20px auto 0',
                    padding: "1rem",
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: "1.5rem",
                    cursor: 'pointer',
                    display: 'block',
                }}
            >
                戻る
            </button>
        </div>
    );
}
