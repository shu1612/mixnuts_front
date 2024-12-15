import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [genre, setGenre] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlegenreRequest = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const url = genre
        ? `https://tech0-gen-8-step3-app-py-3.azurewebsites.net/api/hotpepper/${genre}?query=${encodeURIComponent(query)}`
        : `https://tech0-gen-8-step3-app-py-3.azurewebsites.net/api/hotpepper?query=${encodeURIComponent(query)}`;

      const res = await fetch(url, { method: 'GET' });

      if (!res.ok) {
        throw new Error('APIリクエストに失敗しました');
      }

      const data = await res.json();
      console.log('APIレスポンス:', data);

      router.push({
        pathname: '/result',
        query: { shopList: JSON.stringify(data || []) },
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <button
        onClick={() => router.push('http://localhost:3000/')}
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          padding: '12px 24px',
          backgroundColor: '#FF5733',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.25rem',
          cursor: 'pointer',
        }}
      >
        ログアウト
      </button>

      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>飲食店を探す</h1>

      <form onSubmit={handlegenreRequest} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="検索希望エリア"
          style={{
            width: '100%',
            padding: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '1.25rem',
          }}
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '1.25rem',
            backgroundColor: '#fff',
          }}
        >
          <option value="">未選択</option>
          <option value="G001">居酒屋: カジュアルな和風の飲食店</option>
          <option value="G002">ダイニングバー: カジュアルなバーでタパスやドリンクを提供</option>
          <option value="G003">創作料理: 独自の食材を使った革新的な料理</option>
          <option value="G004">和食: 季節感のある伝統的な料理</option>
          <option value="G005">洋食: ヨーロッパ風の肉料理など</option>
          <option value="G013">ラーメン: 風味豊かなスープの麺料理</option>
          <option value="G008">焼肉: グリルスタイルの肉料理</option>
          <option value="G016">お好み焼き・もんじゃ: 日本の鉄板焼き料理</option>
          <option value="G014">カフェ/スイーツ: コーヒー、紅茶、甘いお菓子</option>
          <option value="G006">イタリアン/フレンチ</option>
          <option value="G007">中華料理</option>
          <option value="G009">アジア/エスニック</option>
          <option value="G010">インターナショナル: 世界各国の料理</option>
          <option value="G012">バー/カクテル</option>
          <option value="G017">韓国料理</option>
        </select>
        <input
          type="date"
          style={{
            width: '100%',
            padding: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '1.25rem',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          検索
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '20px', fontSize: '1.25rem' }}>{error}</p>}
    </div>
  );
}
