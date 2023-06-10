'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './generate.Module.scss';

export default function AddButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.refresh(); // revalidate the Client Cache and trigger a server request
      }}
    >
      Generate
    </button>
  );
}
