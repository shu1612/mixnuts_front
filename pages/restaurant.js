import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [seatsInfo, setSeatsInfo] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchSeats() {
      const res = await fetch('http://localhost:5000/restaurant');
      const data = await res.json();
      setSeatsInfo(data);
    }
    fetchSeats();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Georgia, serif', backgroundColor: '#000', color: '#fff' }}>
      <button
        onClick={() => router.push('http://localhost:3000/')}
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

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3rem', color: '#d4af37' }}>もりぃの寿司</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>贅沢なひとときをお届けします。</p>
      </header>

      <section style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#d4af37' }}>店舗情報</h2>
        <p><strong>住所:</strong> 福岡県福岡市博多区博多駅近くの西日本鉄道本社ビル内</p>
        <p><strong>電話番号:</strong> 092-123-5678</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#d4af37', textAlign: 'center' }}>空席カレンダー</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '10px',
          backgroundColor: '#111',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(255, 215, 0, 0.5)',
        }}>
          {seatsInfo.map((day, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #d4af37',
                borderRadius: '5px',
                padding: '10px',
                textAlign: 'center',
                backgroundColor: day.status === '〇' ? '#006400' : day.status === '△' ? '#ff8c00' : '#8b0000',
                color: '#fff',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>{day.date}</p>
              <p>{day.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#d4af37', textAlign: 'center' }}>店舗紹介動画</h2>
        <button
          onClick={() => document.getElementById('introVideo').play()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#d4af37',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '10px',
            display: 'block',
            margin: '0 auto',
          }}
        >
          動画を見る
        </button>
        <video id="introVideo" controls width="300" style={{ display: 'block', margin: '20px auto', borderRadius: '10px' }}>
          <source src="/intro.mp4" type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#d4af37', textAlign: 'center' }}>お客様の感想動画</h2>
        <button
          onClick={() => document.getElementById('reviewVideo').play()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#d4af37',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '10px',
            display: 'block',
            margin: '0 auto',
          }}
        >
          感想動画を見る
        </button>
        <video id="reviewVideo" controls width="400" style={{ display: 'block', margin: '20px auto', borderRadius: '10px' }}>
          <source src="/review.mp4" type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      </section>
        
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => router.push('/courses')}
          style={{
            display: 'inline-block', // ボタンをインラインブロックに設定
            padding: '10px 20px',
            backgroundColor: '#d4af37',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          コースメニューを確認する
        </button>
      </div>

      <button
        onClick={() => router.push('/result')}
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

      <footer style={{ textAlign: 'center', marginTop: '30px', padding: '10px 0', backgroundColor: '#111', color: '#d4af37' }}>
        <p>© 2023 ハセの寿司. All Rights Reserved.</p>
      </footer>
    </div>
  );
}