<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { PieChart, LineChart } from "echarts/charts"; // ✅ 按需引入饼图
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ToolboxComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// ✅ 注册需要的 ECharts 组件
echarts.use([PieChart, TitleComponent, TooltipComponent, LegendComponent, CanvasRenderer, ToolboxComponent]);
echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);

const chartRef = ref(null);
const lately = ref(null);

let chartInstance = null;
onMounted(() => {
    if (chartRef.value) {
        const chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption({
            tooltip: {
                trigger: "item"
            },
            legend: {
                orient: "vertical",
                left: "left"
            },
            series: [
                {
                    name: "销量",
                    type: "pie",
                    radius: "50%", // 控制饼图大小
                    data: [
                        { value: 1048, name: "苹果" },
                        { value: 735, name: "香蕉" },
                        { value: 580, name: "橘子" },
                        { value: 484, name: "葡萄" },
                        { value: 300, name: "其他" }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        });
    }
    if (lately.value) {
        chartInstance = echarts.init(lately.value);
        chartInstance.setOption({
            title: {
                text: '单位 数量'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    }
                },
            ]
        });
    }
});
</script>


<template>
    <div class="blogs-data">
        <div class="blogs-census-basic">
            <div class="blogs-census-basic-list center">
                <div class="item">
                    <div class="count">
                        <h6>文章数</h6>
                        <p>3,231</p>
                    </div>
                    <div class="icon"></div>
                </div>
                <div class="item">
                    <div class="count">
                        <h6>评论数</h6>
                        <p>3,231</p>
                    </div>
                    <div class="icon"></div>
                </div>
                <div class="item">
                    <div class="count">
                        <h6>分类数</h6>
                        <p>3,231</p>
                    </div>
                    <div class="icon"></div>
                </div>
                <div class="item">
                    <div class="count">
                        <h6>页面数</h6>
                        <p>3,231</p>
                    </div>
                    <div class="icon"></div>
                </div>
            </div>
            <div class="blogs-census-basic-list category">
                <!-- echarts -->
                <div ref="chartRef" class="chart"></div>
            </div>
        </div>
        <div class="blogs-census-lately">
            <div class="title">最新评论</div>
            <div class="content">
                <div ref="lately" class="lately"></div>
            </div>
        </div>
        <div class="blogs-census-filing">
            <div class="title">文章归档</div>
            <div class="content">
                <div class="item load">
                    <div class="tail"></div>
                    <div class="head"></div>
                    <button class="button">loading...</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.blogs-data {
    .blogs-census-basic {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-bottom: 15px;

        .center {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;

            .item:nth-child(1) {
                border-left: 5px solid #1cc88a;
                color: #1cc88a;
            }

            .item:nth-child(2) {
                border-left: 5px solid #36b9cc;
                color: #36b9cc;
            }

            .item:nth-child(3) {
                border-left: 5px solid #2196f3;
                color: #2196f3;
            }

            .item:nth-child(4) {
                border-left: 5px solid #9c27b0;
                color: #9c27b0;
            }

            .item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: var(--background);
                box-shadow: var(--box-shadow);
                border-radius: var(--radius-inner) var(--radius-wrap) var(--radius-wrap) var(--radius-inner);
                padding: 15px 15px 12px;

                .count {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;

                    h6 {
                        font-size: 12px;
                        margin-bottom: 10px;
                        color: var(--seat);
                        font-weight: 500;
                    }

                    p {
                        font-size: 28px;
                        font-weight: 700;
                        margin-bottom: 0 !important;
                    }
                }

                .icon {
                    fill: var(--classA);
                }
            }
        }

        .category {
            background: var(--background);
            box-shadow: var(--box-shadow);
            border-radius: var(--radius-wrap);

            .chart {
                height: 230px !important;
            }
        }
    }

    .blogs-census-lately {
        background: var(--background);
        margin-bottom: 15px;
        border-radius: var(--radius-wrap);
        box-shadow: var(--box-shadow);

        .title {
            display: flex;
            align-items: center;
            height: 45px;
            padding: 0 12px;
            border-bottom: 1px solid var(--classC);
            color: var(--main);
            justify-content: space-between;
            user-select: none;
        }

        .content {
            padding: 15px;

            .lately {
                height: 300px !important;
            }
        }
    }

    .blogs-census-filing {
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
        }

        .content {
            padding: 15px;

            .load {
                padding-top: 15px;

                .head {
                    top: 25px !important;
                    background: #2db7f5 !important;
                }

                .button {
                    position: relative;
                    margin-left: 30px;
                    border: none;
                    background: #2db7f5;
                    color: #fff;
                    border-radius: 4px;
                    padding: 0 12px;
                    height: 34px;
                    font-size: 13px;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: -7px;
                        width: 0;
                        height: 0;
                        border-right: 8px solid #2db7f5;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                    }
                }
            }

            .item {
                position: relative;

                .tail {
                    position: absolute;
                    left: 6px;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background: var(--classC);
                }

                .head {
                    position: absolute;
                    top: 14px;
                    width: 13px;
                    height: 13px;
                    background: var(--classC);
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
