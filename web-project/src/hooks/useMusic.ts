import { ref, onUnmounted } from 'vue'

/**
 * 音乐播放控制 Hook
 * @returns {Object} 包含音乐播放相关的状态和方法
 * - isPlaying: 音乐播放状态
 * - currentTime: 当前播放时间
 * - duration: 音频总时长
 * - progress: 播放进度百分比
 * - initAudio: 初始化音频元素
 * - togglePlay: 切换播放/暂停状态
 * - updateProgress: 更新播放进度
 * - onProgressClick: 进度条点击处理
 */
export function useMusic() {
  // 控制音乐播放状态
  const isPlaying = ref(false)
  // 音频元素引用
  const audioElement = ref<HTMLAudioElement | null>(null)
  // 当前播放时间（秒）
  const currentTime = ref(0)
  // 音频总时长（秒）
  const duration = ref(0)
  // 播放进度（百分比）
  const progress = ref(0)

  /**
   * 初始化音频元素
   * @param elementId - 音频元素的 DOM ID
   */
  const initAudio = (elementId: string) => {
    audioElement.value = document.getElementById(elementId) as HTMLAudioElement
    if (audioElement.value) {
      // 监听音频加载完成事件
      audioElement.value.addEventListener('loadedmetadata', () => {
        duration.value = audioElement.value?.duration || 0
      })
      // 监听播放进度更新事件
      audioElement.value.addEventListener('timeupdate', () => {
        currentTime.value = audioElement.value?.currentTime || 0
        progress.value = (currentTime.value / duration.value) * 100
      })
    }
  }

  /**
   * 切换音乐播放/暂停状态
   */
  const togglePlay = () => {
    if (!audioElement.value) return

    isPlaying.value = !isPlaying.value
    if (isPlaying.value) {
      audioElement.value.play()
    } else {
      audioElement.value.pause()
    }
  }

  /**
   * 更新播放进度
   * @param percent - 进度百分比（0-100）
   */
  const updateProgress = (percent: number) => {
    if (!audioElement.value || !duration.value) return
    
    const newTime = (percent / 100) * duration.value
    audioElement.value.currentTime = newTime
    currentTime.value = newTime
    progress.value = percent
  }

  /**
   * 进度条点击/拖动处理
   * @param event - 鼠标事件
   * @param progressBar - 进度条元素
   */
  const onProgressClick = (event: MouseEvent, progressBar: HTMLElement) => {
    const rect = progressBar.getBoundingClientRect()
    const percent = ((event.clientX - rect.left) / rect.width) * 100
    updateProgress(Math.max(0, Math.min(100, percent)))
  }

  // 组件卸载时清理事件监听
  onUnmounted(() => {
    if (audioElement.value) {
      audioElement.value.removeEventListener('timeupdate', () => {})
      audioElement.value.removeEventListener('loadedmetadata', () => {})
    }
  })

  return {
    isPlaying,
    currentTime,
    duration,
    progress,
    initAudio,
    togglePlay,
    updateProgress,
    onProgressClick
  }
} 