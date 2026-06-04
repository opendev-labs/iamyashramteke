/**
 * Direct YouTube deep-linking handler to bypass in-app browser walled gardens (like Instagram)
 * without triggering browser safety alerts (e.g. the Android Intent permission prompt).
 */
export function openYouTubeDirectly(videoId: string = '7Hty5CRDgFo') {
  if (typeof window === 'undefined') return

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const isAndroid = /android/i.test(userAgent)
  const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

  const webUrl = `https://www.youtube.com/watch?v=${videoId}`

  let hasLaunched = false
  const handleBlur = () => {
    hasLaunched = true
  }

  // Monitor window focus to detect if target app successfully opened
  window.addEventListener('blur', handleBlur)

  if (isAndroid) {
    // Android protocol scheme (vnd.youtube:VIDEO_ID)
    // This is the native registered scheme. Bypasses intent:// Chrome warning popups.
    window.location.href = `vnd.youtube:${videoId}`
    
    // Fallback if app is missing or fails to launch
    setTimeout(() => {
      window.removeEventListener('blur', handleBlur)
      if (!hasLaunched) {
        window.open(webUrl, '_blank')
      }
    }, 1500)
  } else if (isiOS) {
    // iOS custom scheme (youtube://www.youtube.com/watch?v=VIDEO_ID)
    window.location.href = `youtube://www.youtube.com/watch?v=${videoId}`
    
    // Fallback if app is missing
    setTimeout(() => {
      window.removeEventListener('blur', handleBlur)
      if (!hasLaunched) {
        window.open(webUrl, '_blank')
      }
    }, 1500)
  } else {
    // Desktop and other platforms
    window.open(webUrl, '_blank')
  }
}
