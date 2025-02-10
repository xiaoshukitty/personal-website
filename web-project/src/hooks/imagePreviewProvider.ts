import { provide, inject, ref, Ref } from "vue"; // 导入 Ref 类型
import { message } from "ant-design-vue";

// 定义图片预览上下文
interface ImagePreviewContext {
  visible: Ref<boolean>; // 控制是否显示预览
  currentImage: Ref<string>; // 当前预览的图片 URL
  currentImageIndex: Ref<number>; // 当前显示的图片索引
  imgSrcList: Ref<string[]>; // 图片 URL 数组
  isPlay: Ref<boolean>; // 控制图片播放状态
  openPreview: (imgSrcList: string[], initialIndex?: number) => void; // 打开预览
  closePreview: () => void; // 关闭预览
  nextImage: () => void; // 下一张图片
  prevImage: () => void; // 上一张图片
  toggleImage: (index: number) => void; // 切换图片
  photoPlay: (isFlag: boolean) => void; // 图片播放
}

const ImagePreviewSymbol = Symbol("ImagePreview");

// 提供图片预览功能
export function provideImagePreview() {
  const visible = ref(false); // 控制图片预览显示状态
  const currentImage = ref(""); // 当前预览的图片 URL
  const isPlay = ref(false); // 控制图片播放状态
  const currentImageIndex = ref(0); // 当前图片索引
  const imgSrcList = ref<string[]>([]); // 图片 URL 数组

  // 打开预览，设置图片数组和初始索引
  const openPreview = (srcList: string[], initialIndex = 0) => {
    imgSrcList.value = srcList;
    currentImageIndex.value = initialIndex;

    currentImage.value = srcList[initialIndex];

    visible.value = true;
    document.body.style.overflow = "hidden"; // 防止页面滚动
  };

  // 关闭预览
  const closePreview = () => {
    visible.value = false;
    currentImage.value = "";
    currentImageIndex.value = 0;
    document.body.style.overflow = "auto"; // 恢复页面滚动
    clearInterval(timer); // 清除定时器
  };

  // 显示下一张图片
  const nextImage = () => {
    if (currentImageIndex.value < imgSrcList.value.length - 1) {
      currentImageIndex.value++;
      currentImage.value = imgSrcList.value[currentImageIndex.value];
    }
    if (currentImageIndex.value === imgSrcList.value.length - 1) {
      isPlay.value = false;
      message.warning("已经是最后一张图片了！");
      clearInterval(timer); // 清除定时器
    }
  };

  // 显示上一张图片
  const prevImage = () => {
    if (currentImageIndex.value > 0) {
      currentImageIndex.value--;
      currentImage.value = imgSrcList.value[currentImageIndex.value];
    }
  };

  //切换图片
  const toggleImage = (index: number) => {
    currentImageIndex.value = index;
    currentImage.value = imgSrcList.value[index];
  };
  let timer: NodeJS.Timeout;
  // 图片播放
  const photoPlay = (isFlag: boolean) => {
    // 判断是否播放
    if (!isFlag) {
      clearInterval(timer);
      return;
    }
    if (currentImageIndex.value < imgSrcList.value.length - 1) {
      timer = setInterval(nextImage, 3000); // 每三秒更新一次
    } else {
      isPlay.value = false;
      message.warning("已经是最后一张图片了！");
    }
  };

  // 使用 provide() 提供给全局应用
  provide(ImagePreviewSymbol, {
    visible,
    currentImage,
    currentImageIndex,
    imgSrcList,
    isPlay,
    openPreview,
    closePreview,
    nextImage,
    prevImage,
    toggleImage,
    photoPlay,
  });
}

// 使用图片预览功能
export function useImagePreview() {
  const preview = inject<ImagePreviewContext>(ImagePreviewSymbol);
  if (!preview) {
    throw new Error("useImagePreview must be used within a provider");
  }
  return preview;
}
