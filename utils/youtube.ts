/**
 * Dynamic YouTube deep-linking helpers to bypass in-app browser walled gardens (like Instagram)
 * without triggering browser safety alerts (e.g. the Android Intent permission prompt).
 * 
 * Instead of JavaScript-driven window.location redirection (which Instagram WebView blocks),
 * this uses native <a> href binding to trigger the scheme on click, with JS handling only the fallback.
 */

export function getYouTubeDeepLink(videoId: string = '7Hty5CRDgFo'): string {
  if (typeof window === 'undefined') return `https://www.youtube.com/watch?v=${videoId}`

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const isAndroid = /android/i.test(userAgent)
  const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

  if (isAndroid) {
    // Android protocol scheme (vnd.youtube:VIDEO_ID)
    // This is the native registered scheme. Bypasses intent:// Chrome warning popups.
    return `vnd.youtube:${videoId}`
  } else if (isiOS) {
    // iOS custom scheme (youtube://www.youtube.com/watch?v=VIDEO_ID)
    return `youtube://www.youtube.com/watch?v=${videoId}`
  } else {
    // Desktop and other platforms
    return `https://www.youtube.com/watch?v=${videoId}`
  }
}

export function handleYouTubeDeepLinkClick(videoId: string = '7Hty5CRDgFo') {
  if (typeof window === 'undefined') return

  const link = getYouTubeDeepLink(videoId)
  if (link.startsWith('https://')) {
    // Normal desktop/web navigation, let browser handle it natively
    return
  }

  // Monitor window focus to detect if target app successfully opened
  let hasLaunched = false
  const handleBlur = () => {
    hasLaunched = true
  }

  window.addEventListener('blur', handleBlur)

  // Fallback if app is missing or fails to launch after 1.5 seconds
  setTimeout(() => {
    window.removeEventListener('blur', handleBlur)
    if (!hasLaunched) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
    }
  }, 1500)
}

export function getYouTubePlaylistDeepLink(playlistId: string = 'PL6dtDmhdCfhc9t1aQMSXUl8oeIQF2MmB3'): string {
  if (typeof window === 'undefined') return `https://www.youtube.com/playlist?list=${playlistId}`

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const isAndroid = /android/i.test(userAgent)
  const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

  if (isAndroid) {
    // For playlists on Android: vnd.youtube:playlist?list=PLAYLIST_ID
    return `vnd.youtube:playlist?list=${playlistId}`
  } else if (isiOS) {
    // iOS custom scheme for playlists
    return `youtube://www.youtube.com/playlist?list=${playlistId}`
  } else {
    // Desktop and other platforms
    return `https://www.youtube.com/playlist?list=${playlistId}`
  }
}

export function handleYouTubePlaylistDeepLinkClick(playlistId: string = 'PL6dtDmhdCfhc9t1aQMSXUl8oeIQF2MmB3') {
  if (typeof window === 'undefined') return

  const link = getYouTubePlaylistDeepLink(playlistId)
  if (link.startsWith('https://')) {
    // Normal desktop/web navigation, let browser handle it natively
    return
  }

  // Monitor window focus to detect if target app successfully opened
  let hasLaunched = false
  const handleBlur = () => {
    hasLaunched = true
  }

  window.addEventListener('blur', handleBlur)

  // Fallback if app is missing or fails to launch after 1.5 seconds
  setTimeout(() => {
    window.removeEventListener('blur', handleBlur)
    if (!hasLaunched) {
      window.open(`https://www.youtube.com/playlist?list=${playlistId}`, '_blank')
    }
  }, 1500)
}
