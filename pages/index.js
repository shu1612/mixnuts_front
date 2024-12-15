"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from "next/link";

export default function HomePage() {
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
            <h1 style={{ fontSize: "2.5rem" }}>ログインまたは新規登録</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <Link href="/register">
                    <button
                        style={{
                            padding: "1rem 2rem",
                            background: "green",
                            color: "white",
                            border: "none",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            borderRadius: "8px",
                        }}
                    >
                        新規登録
                    </button>
                </Link>
                <Link href="/login">
                    <button
                        style={{
                            padding: "1rem 2rem",
                            background: "blue",
                            color: "white",
                            border: "none",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            borderRadius: "8px",
                        }}
                    >
                        ログイン
                    </button>
                </Link>
            </div>
        </div>
    );
}
