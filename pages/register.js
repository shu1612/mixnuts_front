import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "", // バックエンドのフィールド名に合わせて修正
        password: "", // パスワードフィールドを追加
    });
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("tech0-gen-8-step3-app-py-3.azurewebsites.net/register", formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "登録に失敗しました");
        }
    };

    const handleBack = () => {
        router.push("/"); // ホーム画面に戻る
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
            <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>新規ユーザー登録</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    width: "350px",
                }}
            >
                <input
                    type="text"
                    name="username"
                    placeholder="ユーザー名"
                    value={formData.username}
                    onChange={handleChange}
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
                    name="password"
                    placeholder="パスワード"
                    value={formData.password}
                    onChange={handleChange}
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
                        background: "green",
                        color: "white",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        borderRadius: "8px",
                    }}
                >
                    登録
                </button>
            </form>
            {message && <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>{message}</p>}
            <button
                onClick={handleBack}
                style={{
                    marginTop: "1.5rem",
                    padding: "1rem",
                    background: "gray",
                    color: "white",
                    border: "none",
                    fontSize: "1.25rem",
                    cursor: "pointer",
                    borderRadius: "8px",
                }}
            >
                戻る
            </button>
        </div>
    );
}
