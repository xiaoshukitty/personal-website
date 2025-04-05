<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMusic } from '../../hooks/useMusic'

const isHovered = ref(false)
const progressBarRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)

const {
  isPlaying,
  currentTime,
  duration,
  progress,
  currentSong,
  initAudio,
  togglePlay,
  onProgressClick,
  updateProgress,
  playRandom
} = useMusic()

// 格式化时间
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

// 处理进度条点击
const handleProgressBarClick = (event: MouseEvent) => {
  if (!progressBarRef.value) return
  onProgressClick(event, progressBarRef.value)
}

// 处理拖动开始
const handleDragStart = () => {
  isDragging.value = true
}

// 处理拖动
const handleDrag = (event: MouseEvent) => {
  if (!isDragging.value || !progressBarRef.value) return
  onProgressClick(event, progressBarRef.value)
}

// 处理拖动结束
const handleDragEnd = () => {
  isDragging.value = false
}

onMounted(() => {
  initAudio('audio')
  // 添加全局鼠标事件监听
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('mouseup', handleDragEnd)
})
</script>

<template>
  <div class="music" :class="{ 'music--hover': isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="music__controls">
      <div class="music__play-button" :class="{ 'music__play-button--playing': isPlaying }" @click="togglePlay">
        <SvgIcon class="icon" v-if="!isPlaying" name="play_icon" :width="'30px'" :height="'30px'" :color="'#606266'" />
        <SvgIcon class="icon" v-else name="pause_icon" :width="'30px'" :height="'30px'" :color="'#606266'" />
      </div>
      <div class="music__info" v-show="isHovered">
        <div class="music__title">
          <span class="music__title-text">{{ currentSong }}</span>
          <span class="music__title-text">{{ currentSong }}</span>
        </div>
        <div class="music__progress" ref="progressBarRef" @click="handleProgressBarClick" @mousedown="handleDragStart">
          <div class="music__progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="music__time">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>
      <div class="music__random-button" v-show="isHovered" @click="playRandom">
        <SvgIcon name="random_icon" :width="'30px'" :height="'30px'" :color="'#606266'" />
      </div>
    </div>
    <audio id="audio">
      <source :src="`/src/assets/music/${currentSong}`" type="audio/mpeg">
    </audio>
  </div>
</template>

<style scoped lang="scss">
.music {
  position: fixed;
  bottom: 100px;
  left: 0;
  width: 50px;
  height: 50px;
  background: var(--background);
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999;

  &--hover {
    width: 300px;
    padding: 0 10px;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding-left: 10px;
  }

  &__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
    width: 100%;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .music--hover & {
      opacity: 1;
    }
  }

  &__play-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__title {
    color: var(--minor);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
    position: relative;
    display: flex;

    &-text {
      display: inline-block;
      animation: scroll 10s linear infinite;
      padding-right: 20px;
    }
  }

  &__progress {
    width: 80%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    margin: 0 auto;

    &-bar {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: var(--theme);
      border-radius: 2px;
      transition: width 0.1s linear;
    }
  }

  &__time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--minor);
    width: 80%;
    margin: 0 auto;
  }

  &__random-button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0.3s ease;

    .music--hover & {
      opacity: 1;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
