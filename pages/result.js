import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Result() {
  const router = useRouter();
  const [shopList, setShopList] = useState([]);

  // クエリパラメータからデータを取得
  useEffect(() => {
    if (router.query.shopList) {
      try {
        const parsedShopList = JSON.parse(router.query.shopList);
        setShopList(parsedShopList);
      } catch (error) {
        console.error('データのパースに失敗しました:', error);
      }
    }
  }, [router.query.shopList]);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
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

      <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>検索結果</h1>

      {/* 地図エリア */}
      <div style={{ width: '100%', height: '80%', position: 'relative' }}>
        {/* 地図のベース画像 */}
        <img
          src="/map_image.png" // 地図画像を `public` フォルダに配置する
          alt="地図"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'relative',
          }}
        />

        {/* 店舗データを地図上に配置 */}
        {shopList.map((shop, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: `${40 + index * 12}%`, // 配置を間隔を広げる
              left: `${50 + (index % 2) * 10}%`, // 交互に分散配置
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
          >
            <a
              href={`/restaurant?name=${encodeURIComponent(shop.name)}`} // 店舗の詳細ページリンク
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* 店舗画像 */}
              <img
                src={shop.photo_url} // 店舗写真URL
                alt={shop.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%' }} // 大きさを調整
              />
              {/* 店舗名 */}
              <p
                style={{
                  backgroundColor: 'white',
                  padding: '10px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontSize: '14px',
                  margin: '10px 0 0',
                }}
              >
                {shop.name}
              </p>
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push('/gastro')}
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
