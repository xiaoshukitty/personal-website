<script setup lang="ts">
import axios from "axios";
import ArticlesOperation from "../../components/articlesOperation/index.vue";
import ArticlesInteraction from "../../components/ArticlesInteraction/index.vue";
import Waterfall from "../../components/Waterfall/index.vue";
import { watch, ref, reactive, onMounted } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";

interface CustomRouteQuery {
  id: string; // 查询参数
  type: string;
}

// 创建自定义类型
type CustomRoute = RouteLocationNormalizedLoaded & {
  query: CustomRouteQuery;
};

interface Image {
  id: number;
  src: string;
  width: number;
  height: number;
}

const route = useRoute() as CustomRoute;
const isShow = ref(false);
let images1 = reactive<Image[]>([
  {
    id: 1,
    src: "https://img2.baidu.com/it/u=2616208871,393006875&fm=253&fmt=auto&app=138&f=JPEG?w=608&h=973",
    width: 300,
    height: 400,
  },
  {
    id: 2,
    src: "https://img2.baidu.com/it/u=1532087881,2389186498&fm=253&fmt=auto?w=500&h=500",
    width: 300,
    height: 500,
  },
  {
    id: 3,
    src: "https://t12.baidu.com/it/u=156193264,203812701&fm=30&app=106&f=JPEG?w=640&h=800&s=B83B6091CE035F4F32B86CD3030010BA",
    width: 300,
    height: 350,
  },
  {
    id: 4,
    src: "https://wx1.sinaimg.cn/mw690/5ee578f6gy1hswehsh17gj20u014047y.jpg",
    width: 300,
    height: 600,
  },
  {
    id: 5,
    src: "https://t10.baidu.com/it/u=1576508285,204896177&fm=30&app=106&f=JPEG?w=640&h=800&s=652A6EFBDE24C0CE8C34A05A0300C0D4",
    width: 300,
    height: 450,
  },
  {
    id: 6,
    src: "https://wx1.sinaimg.cn/orj480/6eb0ac52gy1hejp6d1wptj20u01hcjwi.jpg",
    width: 300,
    height: 300,
  },
]);
let images = reactive<Image[]>([]);
const id = ref("1");

const getPicList = () => {
  axios
    .post("http://localhost:3000/image-list", {
      id: id.value,
    })
    .then((res) => {
      if (res.data && res.data.length > 0) {
        // images = res.data[0].images_url;
        let copy = res.data[0].images_url;
        for (let i = 0; i < copy.length; i++) {
          images.push({
            id: i,
            src: copy[i].imageUrl,
            width: 300,
            height: 400,
          });
        }
        console.log("images", images);
      }
    });
};

onMounted(() => {
  getPicList();
});
</script>

<template>
  <div>
    <div class="about-detail">
      <div class="about-category">
        <span>图册</span>
      </div>
      <h1 class="about-title">关于</h1>
      <div class="about-detail-count">
        <div class="about-detail-count-information">
          <img class="avatar" src="https://b0.bdstatic.com/fd8b1444613835e392afbf801c24b0e5.jpg@h_1280" alt="" />
          <div class="meta">
            <div class="author">
              <a href="" class="link">xiaoshu</a>
            </div>
            <div class="meta-item">
              <span class="text">2000-12-20</span>
              <span class="line">/</span>
              <span class="text">0 评论</span>
              <span class="line">/</span>
              <span class="text">1220 阅读</span>
            </div>
          </div>
        </div>
        <time class="about-detail-count-time">12/20</time>
      </div>
      <article class="about-detail-article">
        <div v-if="isShow">
          <h2>简介</h2>
          <p>名称：xiaoxshu博客</p>
          <p>文案：云想衣裳花想容，春风拂槛露华浓</p>
          <p>
            定位：她华艳的衣裳如飘逸的云朵，她艳丽的容貌如盛开的花朵，春风拂过栏杆，露珠润泽花色更浓
          </p>
          <h2>资源来源</h2>
          <p>主要来自于一些 网络 频道，。</p>
          <ul>
            <li v-for="i in 3" :key="i">
              <a href="">@12202000</a>
            </li>
          </ul>
          <h2>加入频道</h2>
          <p>五歌网也有自己的 Telegram 频道</p>
          <ul>
            <li v-for="i in 1" :key="i">
              <a href="">@12202000</a>
            </li>
          </ul>
        </div>
        <section style="margin-bottom: 15px" v-else>
          <Waterfall :images="images" />
        </section>
      </article>
      <!-- 文章的操作 -->
      <ArticlesOperation />
    </div>
    <!-- 用户文章交互 -->
    <ArticlesInteraction />
  </div>
</template>

<style scoped lang="scss">
.about-detail {
  background: var(--background);
  border-radius: var(--radius-wrap);
  padding: 15px;
  box-shadow: var(--box-shadow);
  margin-bottom: 15px;

  .about-category {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    span {
      background: #0396ff;
      color: #fff;
      font-size: 12px;
      padding: 3px 8px;
      margin-right: 5px;
      border-radius: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 120px;
      transition: transform 0.35s, opacity 0.35s;
    }
  }

  .about-title {
    font-size: 24px;
    color: var(--main);
    text-shadow: var(--text-shadow);
    text-align: center;
    margin-bottom: 15px;
    word-break: break-word;
  }

  .about-detail-count {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--classC);

    .about-detail-count-information {
      display: flex;
      align-items: center;

      .meta {
        display: flex;
        flex-direction: column;
        height: 35px;
        justify-content: space-between;
        font-size: 12px;

        .author {
          .link {
            font-weight: 500;
            color: var(--theme);
          }
        }

        .meta-item {
          display: flex;
          align-items: center;
          color: var(--minor);
          line-height: 16px;

          .line {
            color: var(--seat);
            margin: 0 7px;
            vertical-align: middle;
          }
        }
      }

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
        border: 1px solid var(--classA);
        padding: 3px;
        object-fit: cover;
      }
    }

    time {
      font-size: 32px;
      line-height: 42px;
      color: var(--routine);
      user-select: none;
      text-shadow: var(--text-shadow);
      font-family: consolas;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -1.5px;
      left: 0;
      width: 80px;
      height: 3px;
      border-radius: 1.5px;
      background: var(--theme);
    }
  }

  .about-detail-article {
    padding-top: 15px;
    font-size: 15px;
    word-break: break-word;
    color: var(--routine);

    h2 {
      padding: 0 15px;
      color: var(--main);
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 18px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 10%;
        bottom: 10%;
        left: 0;
        width: 4px;
        border-radius: 2px;
        background: var(--theme);
      }
    }

    p {
      line-height: 26px;
      margin-bottom: 18px;
    }

    ul {
      margin-bottom: 18px !important;
      padding-left: 36px;

      li {
        list-style: disc;
        line-height: 26px;

        a {
          display: inline-block;
          line-height: 26px;
          color: var(--theme);
          position: relative;
        }
      }
    }
  }
}
</style>
