"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';

export default function CoursesPage() {
  // コース情報を保持するステート
  const router = useRouter();
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "「The Classic Sushi Experience」 10,000円",
      description: "「寿司の基本を楽しみたい方に。新鮮な魚と職人の技術が光る、伝統的な握り寿司のセット。大トロ、サーモン、エビなど、定番ネタを心ゆくまで堪能してください。」",
      imageUrl: "/1.jpg", // 適切な画像パスに変更してください
    },
    {
      id: 2,
      name: "「Luxury Sushi Selection」 15,000円",
      description: "「特別な夜にふさわしい、贅沢な寿司コース。大トロやウニ、イクラなど、高級食材を使用した一流の寿司をお楽しみいただけます。美しい盛り付けとともに、日本の真髄をご体験ください。」",
      imageUrl: "/2.jpg", // 適切な画像パスに変更してください
    },
    {
      id: 3,
      name: "「Seasonal Chefs Choice」 20,000円",
      description: "「その日一番新鮮な旬のネタを厳選した、板前おすすめの特別セット。季節ごとの日本の味を楽しみながら、新しいお気に入りを見つける旅へ。」",
      imageUrl: "/3.jpg", // 適切な画像パスに変更してください
    },
  ]);

  // コース予約ボタンのハンドラー
  const handleReserve = (courseName) => {
    router.push({
      pathname: "/payment",
      query: { course: courseName },
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>

<button
        onClick={() => router.push('/')}
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          padding: '8px 16px',
          backgroundColor: '#FF5733',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        ログアウト
      </button>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>コース一覧</h1>
      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{course.name}</h2>
          <Image
            src={course.imageUrl}
            alt={course.name}
            width={300}
            height={200}
            style={{ borderRadius: "10px" }}
          />
          <p>{course.description}</p>
          <button
            onClick={() => handleReserve(course.name)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            予約する
          </button>
        </div>
      ))}

<button
        onClick={() => router.push('/restaurant')}
        style={{
          width: '150px',
          margin: '20px auto 0',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          display: 'block',
        }}
      >
        戻る
      </button>

    </div>
  );
}
