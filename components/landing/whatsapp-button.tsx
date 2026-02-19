"use client"

import { useState } from "react"
import Link from "next/link"

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 30, height: 30, flexShrink: 0 }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.268 2 2 8.268 2 16c0 2.398.633 4.648 1.74 6.594L2 30l7.607-1.717A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
      fill="white"
      fillOpacity="0.15"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.84 18.39c-.31-.155-1.833-.904-2.117-1.008-.284-.103-.491-.155-.698.155-.207.31-.8 1.008-.98 1.215-.18.207-.362.233-.672.078-.31-.156-1.308-.482-2.491-1.537-.92-.822-1.542-1.836-1.722-2.146-.18-.31-.02-.477.136-.632.14-.138.31-.362.465-.543.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.698-1.681-.956-2.302-.251-.604-.508-.522-.698-.532-.18-.009-.388-.011-.595-.011-.207 0-.543.078-.827.388-.284.31-1.085 1.06-1.085 2.585s1.111 2.998 1.266 3.205c.155.207 2.187 3.34 5.3 4.68.74.32 1.318.51 1.768.653.742.237 1.418.203 1.952.123.596-.089 1.834-.75 2.093-1.474.258-.724.258-1.344.18-1.474-.077-.13-.284-.207-.594-.362zM16.02 27.5h-.013a11.45 11.45 0 01-5.833-1.598l-.418-.248-4.334.976.994-3.634-.272-.373A11.44 11.44 0 014.5 16.02C4.503 9.648 9.65 4.5 16.02 4.5c3.086.001 5.986 1.203 8.168 3.387A11.473 11.473 0 0127.54 16c-.003 6.372-5.15 11.5-11.52 11.5z"
      fill="white"
    />
  </svg>
)

export function WhatsAppButton() {
  const whatsappNumber  = "5511946780757"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções de pagamento da Millionspay."
  const whatsappLink    = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        @keyframes wa-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(2);   opacity: 0; }
        }
        @keyframes wa-ring-2 {
          0%   { transform: scale(1);   opacity: 0.3; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        @keyframes wa-shine {
          0%   { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(220%)  rotate(25deg); }
        }
      `}</style>

      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        {/* Pulse rings — sit behind everything */}
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          background: "rgba(37,211,102,0.45)",
          animation: "wa-ring 2.2s ease-out infinite",
          pointerEvents: "none",
        }} />
        <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          background: "rgba(37,211,102,0.28)",
          animation: "wa-ring-2 2.2s ease-out 0.6s infinite",
          pointerEvents: "none",
        }} />

        {/* Label pill — slides out to the left on hover */}
        <div style={{
          position: "absolute",
          right: "calc(100% + 12px)",
          top: "50%",
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
          borderRadius: "9999px",
          padding: "6px 14px",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          background: "linear-gradient(135deg, #25d366 0%, #1aa34a 100%)",
          boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
          opacity: hovered ? 1 : 0,
          transform: hovered
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: "none",
          userSelect: "none",
        }}>
          Fale conosco!
        </div>

        {/* Main button circle */}
        <div style={{
          position: "relative",
          width: 58,
          height: 58,
          borderRadius: "9999px",
          background: "linear-gradient(145deg, #2de070 0%, #25d366 50%, #1aa34a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: hovered
            ? "0 0 0 5px rgba(37,211,102,0.18), 0 10px 30px rgba(37,211,102,0.55)"
            : "0 4px 18px rgba(37,211,102,0.45)",
          transform: hovered ? "scale(1.12) translateY(-2px)" : "scale(1) translateY(0)",
          transition: "box-shadow 0.35s ease, transform 0.35s ease",
        }}>
          {/* Shine sweep on hover */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            animation: hovered ? "wa-shine 0.55s ease forwards" : "none",
            pointerEvents: "none",
          }} />

          <WhatsAppIcon />
        </div>
      </Link>
    </>
  )
}