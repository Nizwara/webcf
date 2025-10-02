"use client";

import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LicensePage: NextPage = () => {
  const [agreed, setAgreed] = useState(false);

  // Use useEffect to check localStorage only on the client side
  useEffect(() => {
    const hasAgreed = localStorage.getItem('hasAgreedToTerms');
    if (hasAgreed === 'true') {
      setAgreed(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hasAgreedToTerms', 'true');
    setAgreed(true);
  };

  if (!agreed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <Card className="w-full max-w-2xl bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Ketentuan Layanan Cloudflare Manager</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <p className="text-center font-semibold">Hak Cipta © 2025 Cloudflare Manager. Seluruh Hak Dilindungi.</p>
            <p>Selamat datang di Cloudflare Manager. Aplikasi ini dirancang untuk membantu Anda mengelola beberapa akun Cloudflare dari satu dasbor terpusat. Sebelum melanjutkan, harap baca dan setujui ketentuan berikut.</p>
            <div>
              <h3 className="font-semibold text-white">Lisensi Penggunaan</h3>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Aplikasi ini disediakan untuk menyederhanakan pengelolaan akun Cloudflare Anda. Anda bertanggung jawab penuh atas semua tindakan yang dilakukan pada akun Anda melalui aplikasi ini.</li>
                <li>Dilarang keras menggunakan aplikasi ini untuk aktivitas yang melanggar hukum atau melanggar Ketentuan Layanan Cloudflare.</li>
                <li>Pengguna bertanggung jawab untuk menjaga keamanan kunci API dan kredensial mereka sendiri.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Penafian</h3>
              <p>Cloudflare Manager adalah proyek independen dan tidak berafiliasi, didukung, atau secara resmi terhubung dengan Cloudflare, Inc. Aplikasi ini disediakan "SEBAGAIMANA ADANYA" tanpa jaminan apa pun, baik tersurat maupun tersirat.</p>
            </div>
            <p className="text-sm text-center">Dengan melanjutkan, Anda mengonfirmasi bahwa Anda telah membaca, memahami, dan menyetujui ketentuan ini.</p>
            <div className="flex justify-center pt-4">
              <Button onClick={handleAgree} style={{ backgroundColor: '#f38020', color: 'white' }}>
                Saya Mengerti dan Setuju
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Selamat Datang di Cloudflare Manager</h1>
        <p className="mt-4 text-lg">Terima kasih telah menyetujui Ketentuan Layanan.</p>
      </div>
    </div>
  );
};

export default LicensePage;