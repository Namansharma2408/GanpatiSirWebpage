import React from 'react'

const GlassEffectBg = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-2"
      style={{
        background: "rgba(255,255,255,0.65)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(2px) saturate(180%)",
        WebkitBackdropFilter: "blur(2px) saturate(180%)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    ></div>
  )
}

export default GlassEffectBg