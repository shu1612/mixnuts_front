"use client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const { course } = router.query;
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = () => {
    if (cardNumber === "123412341234" && pin === "tech0") {
      setMessage(`${course} の予約が完了しました！`);
    } else {
      setMessage("カード番号または暗証番号が間違っています。");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", position: "relative" }}>
      <button
        onClick={() => router.push("http://localhost:3000/")}
        style={{
          position: "absolute",
          top: "15px",
          right: "20px",
          padding: "8px 16px",
          backgroundColor: "#FF5733",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        ログアウト
      </button>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>決済ページ</h1>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{course}</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          クレジットカード番号:
          <span style={{ display: "block", color: "#555", fontSize: "10px", marginBottom: "5px" }}>
            （テストコード）カード番号は「123412341234」と入力してください。
          </span>
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          暗証番号:
          <span style={{ display: "block", color: "#555", fontSize: "10px", marginBottom: "5px" }}>
            （テストコード）暗証番号は「tech0」と入力してください。
          </span>
        </label>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </div>

      <button
        onClick={handlePayment}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        決済する
      </button>

      {message && (
        <p style={{ marginTop: "20px", color: message.includes("完了") ? "green" : "red", textAlign: "center" }}>{message}</p>
      )}

      <button
        onClick={() => router.push("/courses")}
        style={{
          width: "150px",
          margin: "20px auto 0",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          display: "block",
        }}
      >
        戻る
      </button>
    </div>
  );
}
