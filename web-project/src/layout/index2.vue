<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPosition = ref(0);
const isShowSideBox = ref(false);
const imageId = 10; // 假设图片的 ID 为 1
const imageUrl = ref('');

const file = ref<File | null>(null); // 存储选择的文件
const uploading = ref(false); // 上传状态
const uploadSuccess = ref(false); // 上传成功标志
const uploadError = ref<string | null>(null); // 上传失败信息
const imageInfo = ref(null); // 存储上传的图片信息
const imageSrc = ref(''); // 存储图片的 src，用于显示图片
const uploadProgress = ref(0); // 存储上传进度

// 选择文件时，更新 file
const onFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        file.value = input.files[0];
        uploadError.value = null; // 清除之前的错误
        uploadSuccess.value = false;
    }
};

// 处理文件上传
const uploadImage = async () => {
    if (!file.value) return;

    const formData = new FormData();
    formData.append("image", file.value); // 'image' 为后端接收文件字段名
    formData.append('timestamp', new Date().toISOString());  // 手动添加时间戳，ISO 格式  formData.append('timestamp', new Date().toISOString());  // 手动添加时间戳，ISO 格式


    uploadSuccess.value = false;
    uploadError.value = null;

    // 设置上传进度条初始值
    uploadProgress.value = 0;
    uploading.value = true;

    try {
        // 上传文件到服务器
        const response = await axios.post("http://localhost:3000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // 必须设置请求头
            },
            onUploadProgress: (progressEvent) => {
                // 计算上传进度百分比
                if (progressEvent.total) {
                    uploadProgress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                }
            }
        });
        console.log(response.data);
        // 上传成功，返回图片信息
        imageInfo.value = response.data.image;

        // 如果需要显示图片，可以用 Base64 编码的方式显示
        imageSrc.value = await `data:${response.data.image.mime_type};base64,${response.data.image.image}`;
        console.log(imageSrc.value);

        uploadSuccess.value = true;
    } catch (error: any) {
        console.error(error);
        uploadError.value = error.response?.data || "上传失败，请重试";
    } finally {
        uploading.value = false;
    }
};




// 处理滚动事件的回调
const handleScroll = () => {
    scrollPosition.value = window.scrollY; // 获取当前的滚动位置
    if (scrollPosition.value >= 390) {
        isShowSideBox.value = true;
    } else {
        isShowSideBox.value = false;
    }
};

// 组件挂载时添加事件监听
onMounted(async () => {
    window.addEventListener('scroll', handleScroll);

    // 获取图片
    try {
        // 使用 axios 获取图片信息
        const response = await axios.get(`http://localhost:3000/image/${imageId}`);
        console.log(response.data);

        // 将获取到的图片信息存储到 `imageInfo` 中
        imageUrl.value = response.data;
        // 设置图片的 Base64 编码 URL 作为 src
        imageUrl.value = `data:${response.data.mime_type};base64,${response.data.image}`;

    } catch (error) {
        // 错误处理
        // errorMessage.value = '图片获取失败，请稍后再试。';
        console.error(error);
    } finally {
        // loading.value = false;  // 加载完成，无论成功还是失败
    }
});

// 组件卸载时移除事件监听
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <section class="main">
        <div class="content">
            <header class="header">头部</header>
            <div>
                <div class="img">

                </div>

                <div>
                    <div>
                        <h2>上传图片</h2>

                        <progress v-if="uploading" :value="uploadProgress" max="100"></progress>

                        <form @submit.prevent="uploadImage">
                            <input type="file" ref="fileInput" @change="onFileChange" />
                            <button type="submit" :disabled="!file">上传</button>
                        </form>
                        <p v-if="uploading">上传中...</p>
                        <p v-if="uploadSuccess">上传成功！</p>
                        <p v-if="uploadError" style="color: red;">上传失败：{{ uploadError }}</p>
                        <img :src="imageSrc" alt="Uploaded Image" v-if="imageSrc" />
                    </div>
                    <div>
                        <img :src="imageUrl" alt="Uploaded Image" />
                    </div>
                </div>
                <div class="scroll-2000">
                    222
                </div>
            </div>
            <div class="side-box" v-if="isShowSideBox">
                <a-back-top :visibility-height="0" /> <a-back-top :visibility-height="0" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main {
    .content {
        .header {
            position: absolute;
            height: 4.375rem;
            width: 100%;
            min-width: 85.375rem;
            top: 0;
            background: rgba(34, 34, 34, .5);
            z-index: 9999;
        }

        .img {
            height: 390px;
            min-height: 320px;
            min-width: 1186px;
            position: relative;
            background-color: pink;
        }

        .scroll-2000 {
            height: 125rem;
        }
    }
}
</style>
