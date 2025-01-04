<template>
    <div id="particles-js" class="particles-container"></div>
</template>

<script lang="ts">
import { onMounted } from 'vue';

export default {
    name: 'Particles',
    setup() {
        onMounted(() => {

            // 使用全局的 particlesJS 方法（已经通过 CDN 引入）
            if (window.particlesJS) {
                window.particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 70, // 设置粒子数量
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        shape: {
                            type: 'circle', // 使用圆形粒子
                        },
                        size: {
                            value: 20, // 粒子的大小
                            random: true, // 粒子大小随机
                            anim: {
                                enable: true,
                                speed: 10, // 粒子变大小的速度
                                size_min: 1 // 最小粒子大小
                            }
                        },
                        opacity: {
                            value: 0.8, // 粒子的透明度
                            random: true, // 随机透明度
                            anim: {
                                enable: true,
                                speed: 1, // 透明度变化的速度
                                opacity_min: 0
                            }
                        },
                        color: {
                            value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'] // 设置多种颜色的粒子
                        },
                        move: {
                            enable: true,
                            speed: 2, // 控制粒子向上的速度
                            direction: 'top', // 从下往上
                            random: true, // 启用随机运动
                            straight: false, // 启用随机方向，不是直线
                            outMode: 'out', // 粒子离开屏幕后消失
                            attract: {
                                enable: false
                            }
                        },
                        links: {
                            enable: true, // 启用粒子之间的连接
                            distance: 150, // 粒子之间的最大连线距离
                            color: '#ff0000', // 设置连接线的颜色为红色
                            opacity: 0.4, // 设置连接线的透明度
                            width: 1 // 设置连接线的宽度
                        },
                        collisions: {
                            enable: false, // 禁用粒子碰撞
                        }
                    },
                    retina_detect: true
                });
            }
        });

        return {};
    },
};
</script>

<style scoped>
.particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}
</style>