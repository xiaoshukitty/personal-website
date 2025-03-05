<template>
  <div class="about-container">
    <!-- 第一个模块：统计数据卡片 -->
    <div class="about-card">
      <div class="title">文章归档</div>
      <div class="stats-cards">
        <div class="stat-item">
          <user-outlined class="icon" />
          <div class="stat-info">
            <div class="label">今日访客</div>
            <div class="value">
              {{ statistics.visitors }}
              <span class="increase" v-if="statistics.visitorsIncrease > 0">
                +{{ statistics.visitorsIncrease }}
              </span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
          <like-outlined class="icon" />
          <div class="stat-info">
            <div class="label">获得点赞</div>
            <div class="value">
              {{ statistics.likes }}
              <span class="increase" v-if="statistics.likesIncrease > 0">
                +{{ statistics.likesIncrease }}
              </span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
          <star-outlined class="icon" />
          <div class="stat-info">
            <div class="label">收藏数</div>
            <div class="value">
              {{ statistics.favorites }}
              <span class="increase" v-if="statistics.favoritesIncrease > 0">
                +{{ statistics.favoritesIncrease }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 第二个模块：最近活动 -->
    <div class="about-card">
      <div class="title">最近活动</div>
      <div class="about-activities">
        <a-timeline>
          <a-timeline-item v-for="activity in recentActivities" :key="activity.id" :color="activity.color">
            <p class="activity-time">{{ activity.time }}</p>
            <p class="activity-content">{{ activity.content }}</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>

    <!-- 第三个模块：我的收藏 -->
    <div class="about-card">
      <div class="title">我的收藏</div>
      <div class="about-activities">
        <a-list :data-source="myFavorites" >
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta>
                <template #title>
                  <a :href="item.link" class="favorite-title">{{ item.title }}</a>
                </template>
                <template #description>
                  <span class="favorite-info">{{ item.description }}</span>
                  <span class="favorite-time">{{ item.time }}</span>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons-vue';

// 统计数据
const statistics = ref({
  visitors: 128,
  visitorsIncrease: 12,
  likes: 356,
  likesIncrease: 25,
  favorites: 89,
  favoritesIncrease: 8
});

// 最近活动数据
const recentActivities = ref([
  {
    id: 1,
    content: '发布了新文章《Vue3 组件开发技巧》',
    time: '2024-03-04 15:30',
    color: 'green'
  },
  {
    id: 2,
    content: '收藏了文章《TypeScript 最佳实践》',
    time: '2024-03-03 14:20',
    color: 'blue'
  },
  {
    id: 3,
    content: '获得了 10 个点赞',
    time: '2024-03-02 09:15',
    color: 'red'
  },
  // 可以添加更多活动
]);

// 收藏列表数据
const myFavorites = ref([
  {
    id: 1,
    title: 'Vue3 组件开发技巧',
    description: '介绍 Vue3 组件开发中的常用技巧和最佳实践',
    link: '#',
    time: '2024-03-04'
  },
  {
    id: 2,
    title: 'TypeScript 入门指南',
    description: '从零开始学习 TypeScript 的完整教程',
    link: '#',
    time: '2024-03-03'
  },
  // 可以添加更多收藏
]);

// 页面加载时获取数据
onMounted(() => {
});
</script>

<style scoped lang="scss">
.about-container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .about-card {
    background: var(--background);
    box-shadow: var(--box-shadow);
    border-radius: var(--radius-wrap);

    .title {
      display: flex;
      align-items: center;
      height: 45px;
      padding: 0 12px;
      border-bottom: 1px solid var(--classC);
      color: var(--main);
      justify-content: space-between;
      user-select: none;
      font-weight: 700;
      font-size: 16px;
    }

    .stats-cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;

      .divider {
        width: 1px;
        height: 50px;
        background: var(--classC);
        margin: 0 20px;
      }

      .stat-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 0 24px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-5px);

          .icon {
            transform: scale(1.1);
            color: var(--theme);
          }

          .stat-info {
            .value {
              color: var(--theme);
            }
          }
        }

        .icon {
          font-size: 32px;
          color: var(--theme);

          transition: all 0.3s ease;
        }

        .stat-info {
          text-align: left;

          .label {
            color: #666;
            font-size: 14px;
            margin-bottom: 4px;
            transition: color 0.3s ease;
          }

          .value {
            font-size: 24px;
            font-weight: bold;
            color: var(--theme);
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;

            .increase {
              font-size: 14px;
              color: #ff4d4f;
              font-weight: normal;
              background: rgba(255, 77, 79, 0.1);
              padding: 2px 6px;
              border-radius: 10px;
              display: inline-flex;
              align-items: center;

              &::before {
                content: "今日";
                font-size: 12px;
                margin-right: 2px;
              }
            }
          }
        }
      }
    }

    .about-activities {
      padding: 24px;

      .activity-time {
        font-size: 12px;
        color: var(--minor);
        margin-bottom: 4px;
      }

      .activity-content {
        margin: 0;
        color: var(--theme);
      }

      .favorite-title {
        color: var(--main) !important;
      }

      .favorite-time {
        margin-left: 8px;
        color: var(--minor);
        font-size: 12px;
      }

      .favorite-info {
        color: var(--minor);
        font-size: 12px;
      }
    }
  }


  :deep(.ant-card-head-title) {
    font-size: 18px;
    font-weight: bold;
  }

  :deep(.ant-timeline-item-content) {
    padding-bottom: 20px;
  }

  :deep(.ant-list-item) {
    padding: 12px 0;
  }

  :deep(.ant-list-item-meta-title) {
    margin-bottom: 4px;

    a {
      color: var(--theme);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>