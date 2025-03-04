<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons-vue';

const modalText = ref<string>('Content of the modal');
const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);
const videoUrl = ref<string>('');
const resultUrl = ref<string>('');
const loading = ref<boolean>(false);
const API_BASE_URL = 'http://localhost:3000'; // 改成您的后端服务器地址

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(resultUrl.value);
        message.success('链接已复制到剪贴板');
    } catch (err) {
        console.error('复制失败:', err);
        message.error('复制失败，请手动复制');
    }
};

const openModal = () => {
    open.value = true;
    // 重置状态
    videoUrl.value = '';
    resultUrl.value = '';
    loading.value = false;
}

const handleDownload = async () => {
    if (!resultUrl.value) {
        message.warning('没有可下载的视频');
        return;
    }

    try {
        loading.value = true;
        message.loading('正在下载视频...', 0);

        // 直接使用视频URL下载
        const response = await axios({
            url: resultUrl.value,
            method: 'GET',
            responseType: 'blob',
            timeout: 30000,
        });

        // 创建 Blob URL
        const blob = new Blob([response.data], { type: response.headers['content-type'] || 'video/mp4' });
        const url = window.URL.createObjectURL(blob);

        // 从URL中提取文件名
        const fileName = resultUrl.value.split('/').pop()?.split('?')[0] || `video_${Date.now()}.mp4`;

        // 创建下载链接
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        // 清理
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        message.destroy(); // 清除加载提示
        message.success('下载成功！');
    } catch (error) {
        console.error('下载视频失败:', error);
        message.destroy();

        // 如果直接下载失败，尝试在新窗口打开
        window.open(resultUrl.value, '_blank');
        message.warning('直接下载失败，已在新窗口打开视频链接');
    } finally {
        loading.value = false;
    }
};

// 视频去水印
const handleOk = async () => {
    if (!videoUrl.value) {
        message.warning('请输入视频链接');
        return;
    }
    loading.value = true;
    confirmLoading.value = true;

    try {
        const response = await axios.post(`${API_BASE_URL}/api/watermark-remove`, {
            url: videoUrl.value
        });

        if (response.data.success) {
            resultUrl.value = response.data.videoUrl;

            message.success('视频处理成功！');
            confirmLoading.value = false; // 处理成功后取消确认加载状态
        } else {
            message.error(response.data.message || '处理失败，请重试');
            confirmLoading.value = false;
        }
    } catch (error: any) {
        console.error('处理视频时出错:', error);
        message.error(error.response?.data?.message || '网络请求失败，请重试');
        confirmLoading.value = false;
    } finally {
        loading.value = false;
    }
};

const handleCancel = () => {
    open.value = false;
    videoUrl.value = '';
    resultUrl.value = '';
    loading.value = false;
    confirmLoading.value = false;
};
</script>
<template>
    <div class="shu-content">
        <div class="ai-features">
            <div class="ai-list">
                <div class="ai-item" @click="openModal()">视频去水印</div>
            </div>
        </div>

        <div>
            <a-modal v-model:open="open" title="视频去水印" :confirm-loading="confirmLoading" @ok="handleOk"
                @cancel="handleCancel" :width="800" :footer="resultUrl ? null : undefined">
                <a-form layout="vertical">
                    <a-form-item label="视频链接">
                        <a-input v-model:value="videoUrl" placeholder="请输入视频链接" />
                    </a-form-item>

                    <a-form-item v-if="loading">
                        <a-spin tip="处理中...">
                            <div class="loading-content">正在处理视频，请稍候...</div>
                        </a-spin>
                    </a-form-item>

                    <template v-if="resultUrl">
                        <div class="result-content">
                            <p class="success-text">视频处理成功！</p>
                            <div class="video-preview">
                                <video :src="resultUrl" controls style="width: 100%; max-height: 400px;"
                                    preload="metadata">
                                    您的浏览器不支持视频播放
                                </video>
                            </div>
                            <div class="action-buttons">
                                <a-button type="primary" @click="handleDownload" class="download-btn">
                                    <template #icon><download-outlined /></template>
                                    下载视频
                                </a-button>
                                <a-button type="primary" @click="copyToClipboard">
                                    <template #icon><copy-outlined /></template>
                                    复制链接
                                </a-button>
                                <a-button type="link" :href="resultUrl" target="_blank">
                                    打开视频链接
                                </a-button>
                            </div>
                        </div>
                    </template>
                </a-form>
            </a-modal>
        </div>
    </div>
</template>

<style scoped lang="scss">
.shu-content {
    border-radius: var(--radius-wrap);
    padding: 0 15px;
    background: var(--background);
    box-shadow: var(--box-shadow);


    .ai-features {
        .ai-list {
            display: flex;
            flex-wrap: wrap;

            .ai-item {
                width: 200px;
                height: 200px;
                text-align: center;
                line-height: 200px;
                background: var(--theme);
                border-radius: var(--radius-wrap);
                margin: 10px;
                cursor: pointer;
                color:#fff;
            }
        }
    }
}

.loading-content {
    padding: 20px 0;
    text-align: center;
}

.result-content {
    text-align: center;

    .success-text {
        color: #52c41a;
        font-size: 16px;
        margin-bottom: 16px;
    }

    .video-preview {
        margin: 16px 0;
        background: #f0f0f0;
        border-radius: 8px;
        overflow: hidden;
    }

    .action-buttons {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        gap: 16px;

        .download-btn {
            display: flex;
            align-items: center;
        }
    }
}
</style>