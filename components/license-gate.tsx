"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface LicenseGateProps {
  children: React.ReactNode
}

export function LicenseGate({ children }: LicenseGateProps) {
  const router = useRouter()
  const [isAgreed, setIsAgreed] = useState(false)

  useEffect(() => {
    try {
      const agreed = localStorage.getItem("license_agreed")
      if (agreed === "true") {
        setIsAgreed(true)
      } else {
        router.push("/login")
      }
    } catch (error) {
      console.error("Failed to read license agreement from localStorage", error)
      router.push("/login")
    }
  }, [router])

  if (!isAgreed) {
    // You can render a loading spinner here while checking the license
    return null
  }

  return <>{children}</>
}