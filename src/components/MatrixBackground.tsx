import { useEffect, useRef } from "react"

// Helper function to parse HSL from CSS custom properties
function getHSLFromCSS(property: string): [number, number, number] {
  const value = getComputedStyle(document.documentElement).getPropertyValue(property).trim()
  const [h, s, l] = value.split(' ').map(v => parseFloat(v.replace('%', '')))
  return [h, s, l]
}

// Helper function to convert HSL to RGBA
function hslToRgba(h: number, s: number, l: number, a: number = 1): string {
  s /= 100
  l /= 100
  
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c / 2
  
  let r = 0, g = 0, b = 0
  
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x
  }
  
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)
  
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Get colors from CSS custom properties
    const [bgH, bgS, bgL] = getHSLFromCSS('--matrix-bg-overlay')
    const [primaryH, primaryS, primaryL] = getHSLFromCSS('--matrix-text-primary')
    const [secondaryH, secondaryS, secondaryL] = getHSLFromCSS('--matrix-text-secondary')
    const [accentH, accentS, accentL] = getHSLFromCSS('--matrix-text-accent')

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}01"
    const matrixArray = matrix.split("")

    const fontSize = 12
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * canvas.height / fontSize)
    }

    function draw() {
      if (!ctx || !canvas) return

      // Use CSS background color with low opacity
      ctx.fillStyle = hslToRgba(bgH, bgS, bgL, 0.05)
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + "px 'JetBrains Mono', monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        
        // Use different colors from the theme with varying intensities
        const rand = Math.random()
        let color: string
        
        if (rand < 0.6) {
          // Primary color (most common)
          color = hslToRgba(primaryH, primaryS, primaryL, Math.random() * 0.7 + 0.3)
        } else if (rand < 0.85) {
          // Secondary color
          color = hslToRgba(secondaryH, secondaryS, secondaryL, Math.random() * 0.6 + 0.2)
        } else {
          // Accent color (least common)
          color = hslToRgba(accentH, accentS, accentL, Math.random() * 0.8 + 0.4)
        }
        
        ctx.fillStyle = color
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-50 z-1" />
}