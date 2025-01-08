<template>
    <div class="comment-container">
        <!-- 显示所有评论 -->
        <div v-for="(comment, index) in comments" :key="comment.id" class="comment">
            <div class="comment-content">
                <strong>{{ comment.username }}</strong>
                <p>{{ comment.text }}</p>
                <button @click="showReplyInput(index)">回复</button>
            </div>

            <!-- 回复输入框 -->
            <div v-if="replyIndex === index && !replyTargetNested && !replyTargetSubNested" class="reply-input">
                <textarea v-model="replyText" placeholder="写下你的回复..." rows="3"></textarea>
                <button @click="submitReply(index)">提交回复</button>
            </div>

            <!-- 显示该评论的所有回复 -->
            <div v-if="comment.replies && comment.replies.length > 0" class="replies">
                <div v-for="(reply, replyIndex) in comment.replies" :key="reply.id" class="reply">
                    <div class="reply-header">
                        <strong>{{ reply.username }} 回复：</strong>
                        <button @click="showReplyInput(index, reply)">回复</button>
                    </div>
                    <p>{{ reply.text }}</p>

                    <!-- 二级回复 -->
                    <div v-if="reply.replies && reply.replies.length > 0" class="nested-replies">
                        <div v-for="nestedReply in reply.replies" :key="nestedReply.id" class="nested-reply">
                            <div class="nested-reply-header">
                                <strong>{{ nestedReply.username }} 回复：</strong>
                                <!-- <button @click="showReplyInput(index, reply, nestedReply)">回复</button> -->
                            </div>
                            <p>{{ nestedReply.text }}</p>

                            <!-- 三级回复 -->
                            <!-- <div v-if="nestedReply.replies && nestedReply.replies.length > 0" class="nested-replies">
                                <div v-for="subNestedReply in nestedReply.replies" :key="subNestedReply.id"
                                    class="nested-reply">
                                    <strong>{{ subNestedReply.username }} 回复：</strong>
                                    <p>{{ subNestedReply.text }}</p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 评论输入框 -->
        <div class="comment-input">
            <textarea v-model="newCommentText" placeholder="写下你的评论..." rows="3"></textarea>
            <button @click="submitComment">提交评论</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 定义评论接口
interface Comment {
    id: number;
    username: string;
    text: string;
    replies: Reply[];
}

interface Reply {
    id: number;
    username: string;
    text: string;
    replies?: Reply[]; // 允许嵌套回复
}

const comments = ref<Comment[]>([
    {
        id: 1,
        username: "用户1", // 一级评论的用户
        text: "这是用户1的评论",
        replies: [
            {
                id: 1,
                username: "用户2", // 一级回复的用户
                text: "这是用户2的回复",
                replies: [{
                    id: 1,
                    username: "用户3", // 二级回复的用户
                    text: "这是用户3的二级回复",
                }]
            },
            {
                id: 2,
                username: "用户3", // 一级回复的用户
                text: "这是用户3的回复",
                replies: []
            },
        ],
    },
]);

const newCommentText = ref(""); // 新评论内容
const replyText = ref(""); // 回复内容
const replyIndex = ref<number | null>(null); // 当前正在回复的评论的索引
const replyTarget = ref<Reply | null>(null); // 回复目标 (如果是评论则为空)
const replyTargetNested = ref<Reply | null>(null); // 二级回复目标 (如果是二级回复则为空)
const replyTargetSubNested = ref<Reply | null>(null); // 三级回复目标 (如果是三级回复则为空)
const currentUser = ref("用户1"); // 当前用户
const userList = ["用户1", "用户2", "用户3"]; // 假设有3个用户

// 提交评论
const submitComment = () => {
    if (newCommentText.value.trim() === "") return;

    const newComment: Comment = {
        id: comments.value.length + 1, // ID通过评论数组长度计算
        username: currentUser.value,
        text: newCommentText.value,
        replies: [],
    };

    comments.value.push(newComment);
    newCommentText.value = ""; // 清空评论输入框
};

// 显示/隐藏回复输入框
const showReplyInput = (commentIndex: number, reply?: Reply, nestedReply?: Reply) => {
    replyTarget.value = reply || null; // 回复的目标可以是评论或者回复
    replyTargetNested.value = nestedReply || null; // 二级回复目标
    replyTargetSubNested.value = null; // 清空三级回复目标
    replyIndex.value = commentIndex; // 设置当前要回复的评论的索引
    replyText.value = ""; // 清空回复内容
};

// 提交回复
const submitReply = (commentIndex: number) => {
    if (replyText.value.trim() === "") return;

    const newReply: Reply = {
        id: Date.now(), // 使用当前时间作为ID，确保唯一
        username: currentUser.value, // 当前用户
        text: replyText.value,
        replies: [], // 初始化为空数组
    };

    // 如果回复的是评论
    if (replyTarget.value === null && replyTargetNested.value === null && replyTargetSubNested.value === null) {
        comments.value[commentIndex].replies.push(newReply);
    }
    // 如果回复的是某个一级回复
    else if (replyTarget.value !== null && replyTargetNested.value === null && replyTargetSubNested.value === null) {
        const replyIndexInComment = comments.value[commentIndex].replies.findIndex(r => r.id === replyTarget.value?.id);
        if (replyIndexInComment !== -1) {
            if (!comments.value[commentIndex].replies[replyIndexInComment].replies) {
                comments.value[commentIndex].replies[replyIndexInComment].replies = [];
            }
            comments.value[commentIndex].replies[replyIndexInComment].replies.push(newReply);
        }
    }
    // 如果回复的是二级回复
    else if (replyTargetNested.value !== null && replyTargetSubNested.value === null) {
        const targetReply = comments.value[commentIndex].replies
            .find(r => r.replies?.includes(replyTargetNested.value));

        if (targetReply) {
            if (!targetReply.replies) targetReply.replies = [];
            targetReply.replies.push(newReply);
        }
    }
    // 如果回复的是三级回复
    else if (replyTargetSubNested.value !== null) {
        const targetReply = comments.value[commentIndex].replies
            .find(r => r.replies?.some(nestedReply => nestedReply.replies?.includes(replyTargetSubNested.value)));

        if (targetReply) {
            const targetNestedReply = targetReply.replies?.find(nestedReply =>
                nestedReply.replies?.includes(replyTargetSubNested.value)
            );

            if (targetNestedReply) {
                if (!targetNestedReply.replies) targetNestedReply.replies = [];
                targetNestedReply.replies.push(newReply);
            }
        }
    }

    replyText.value = ""; // 清空回复输入框
    replyIndex.value = null; // 隐藏回复框
    replyTarget.value = null; // 清空回复目标
    replyTargetNested.value = null; // 清空二级回复目标
    replyTargetSubNested.value = null; // 清空三级回复目标
};
</script>

<style scoped lang="scss">
.comment-container {
    width: 80%;
    margin: 20px auto;
    font-family: 'Arial', sans-serif;

    .comment {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;

        .comment-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            strong {
                font-size: 16px;
                color: #333;
            }

            p {
                font-size: 14px;
                color: #555;
            }

            button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
            }

            button:hover {
                background-color: #0056b3;
            }
        }

        .reply-input {
            margin-top: 10px;

            textarea {
                width: 100%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
            }

            button {
                margin-top: 10px;
                background-color: #28a745;
                color: white;
                padding: 5px 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            button:hover {
                background-color: #218838;
            }
        }

        .replies {
            margin-top: 10px;
            margin-left: 20px;

            .reply {
                padding: 5px;
                border-left: 2px solid #007bff;
                margin-top: 5px;

                .reply-header,
                .nested-reply-header {
                    display: flex;
                    justify-content: space-between;
                }

                strong {
                    font-size: 14px;
                    color: #333;
                }

                p {
                    font-size: 14px;
                    color: #555;
                }

                button {
                    background-color: #007bff;
                    color: white;
                    padding: 5px 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                .nested-replies {
                    margin-top: 10px;
                    margin-left: 20px;
                    border-left: 2px dashed #ccc;

                    .nested-reply {
                        padding: 5px;
                        margin-top: 5px;

                        strong {
                            font-size: 14px;
                            color: #333;
                        }

                        p {
                            font-size: 14px;
                            color: #555;
                        }

                        button {
                            background-color: #007bff;
                            color: white;
                            padding: 5px 10px;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }

                        button:hover {
                            background-color: #0056b3;
                        }
                    }
                }
            }
        }
    }

    .comment-input {
        margin-top: 20px;

        textarea {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        button {
            margin-top: 10px;
            background-color: #007bff;
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    }
}
</style>
