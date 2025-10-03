"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { agreeToLicense } = useAuth()

  const handleAgree = () => {
    setIsLoading(true)
    try {
      agreeToLicense()
      router.push("/")
    } catch (error) {
      console.error("Failed to agree to license", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Cloudflare Manager</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-center">Lisensi dan Hak Cipta KILLER VPN</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-bold">Hak Cipta © 2025 KILLER VPN. Seluruh Hak Dilindungi.</p>
              <p>
                KILLER VPN, termasuk perangkat lunak, dokumentasi, dan alat seperti Cloudflare Manager, dilindungi oleh
                undang-undang hak cipta internasional. KILLER VPN adalah merek dagang terdaftar dari KILLER VPN Inc.
              </p>
              <p className="font-bold mt-4">Lisensi Penggunaan</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Pengguna diizinkan menggunakan KILLER VPN untuk keperluan pribadi atau komersial terbatas sesuai
                  dokumentasi resmi.
                </li>
                <li>
                  Dilarang menyalin, memodifikasi, mendistribusikan ulang, atau merekayasa balik perangkat lunak tanpa
                  izin tertulis.
                </li>
                <li>Semua hak kepemilikan tetap dimiliki oleh KILLER VPN Inc.</li>
              </ul>
              <p className="font-bold mt-4">Penafian</p>
              <p>
                KILLER VPN disediakan &quot;SEBAGAIMANA ADANYA&quot; tanpa jaminan tersurat maupun tersirat. KILLER VPN
                Inc. tidak bertanggung jawab atas kerusakan yang timbul dari penggunaan perangkat lunak ini.
              </p>
              <p className="mt-4">
                Untuk informasi lebih lanjut, hubungi:{" "}
                <a href="https://t.me/Dark_System2x" className="text-primary hover:underline">
                  https://t.me/Dark_System2x
                </a>{" "}
                atau kunjungi{" "}
                <a href="http://www.nizwara.biz.id" className="text-primary hover:underline">
                  www.nizwara.biz.id
                </a>
                .
              </p>
            </div>
            <Button onClick={handleAgree} className="w-full" disabled={isLoading}>
              {isLoading ? "..." : "Saya Setuju"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
