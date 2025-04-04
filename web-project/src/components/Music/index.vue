<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)
const isHovered = ref(false)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  const audio = document.getElementById('audio') as HTMLAudioElement
  if (isPlaying.value) {
    audio.play()
  } else {
    audio.pause()
  }
}
</script>

<template>
  <div class="music" :class="{ 'music--hover': isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false" @click="togglePlay">
    <div class="music__controls">
      <div class="music__play-button" :class="{ 'music__play-button--playing': isPlaying }">
        <SvgIcon class="icon" v-if="!isPlaying" name="play_icon" :width="'30px'" :height="'30px'" :color="'#606266'" />
        <SvgIcon class="icon" v-else name="pause_icon" :width="'30px'" :height="'30px'" :color="'#606266'" />
      </div>
      <div class="music__title">
        <span class="music__title-text">把回忆拼好给你.mp3</span>
        <span class="music__title-text">把回忆拼好给你.mp3</span>
      </div>
    </div>
    <audio id="audio" loop>
      <source src="../../assets//music/把回忆拼好给你.mp3" type="audio/mpeg">
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
  padding: 0 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.2);

  &--hover {
    width: 200px;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__play-button {
    width: 30px;
    height: 30px;
    // background: var(--theme);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &--playing {
      .music__play-icon {
        transform: scale(0.8);
      }
    }
  }

  &__play-icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 12px;
    border-color: transparent transparent transparent var(--background);
    transition: all 0.3s ease;
  }

  &__title {
    color: var(--minor);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    width: 140px;
    position: relative;
    display: flex;

    &-text {
      display: inline-block;
      animation: scroll 10s linear infinite;
      padding-right: 20px;
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
