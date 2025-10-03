"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { LicenseGate } from "./license-gate"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  if (isLoginPage) {
    return <>{children}</>
  }

  return <LicenseGate>{children}</LicenseGate>
}