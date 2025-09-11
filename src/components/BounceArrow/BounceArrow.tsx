"use client"

import React from "react"

interface BounceArrowIconProps {
  text?: string
  className?: string
}

export function BounceArrowIcon({ text = "Continuer", className = "" }: BounceArrowIconProps) {
  return (
    <div
      className={`d-flex flex-column align-items-center gap-2 bounce-arrow-wrapper ${className}`}
    >
  
      <div className="position-relative bounce-stack">
        {/* Première flèche - noire */}
        <i className="bi bi-chevron-down fs-4 bounce d-inline-block arrow-dark"></i>
        {/* Deuxième flèche - gris moyen */}
        <i className="bi bi-chevron-down fs-4 bounce position-absolute top-50 start-0 d-inline-block arrow-gray"></i>
        {/* Troisième flèche - gris clair */}
        <i className="bi bi-chevron-down fs-4 bounce position-absolute top-100 start-0 d-inline-block arrow-light"></i>
      </div>
    </div>
  )
}
