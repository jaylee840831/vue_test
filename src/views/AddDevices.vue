<script setup>
</script>

<template>
    <div id="formBody">
        <form action="#" class="form">

            <h2>Add Devices</h2>

            <div class="progressbar">
                <div class="progress" id="progress" :style="progress_width"></div>
                <div v-for="(p, index) in progress_type" :key="index">
                    <div class="progress-step" :class="progress_type[index]"></div>
                </div>
            </div>

            <div v-show="step === 1" class="form-step">
                <h4 class="text-center">Enter Dealer Info</h4>
                <div class="input-group">
                    <label>Dealer</label>
                    <input type="text" v-model="form.dealer.name" />
                </div>
                <div class="input-group">
                    <label>Phone</label>
                    <input type="phone" v-model="form.dealer.phone" />
                </div>
                <div class="input-group">
                    <label>Address</label>
                    <input type="address" v-model="form.dealer.address" />
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" style="visibility: hidden" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="step++;">Next</a>
                </div>
            </div>
            <div v-show="step === 2" class="form-step">
                <h4 class="text-center">Choose Site</h4>
                <h5 class="text-center">{{ form.site.city }}</h5>
                <div id="mapChart" ref="mapChart"></div>
                <div class="btn-group">
                    <a class="btn btn-primary" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="step++;">Next</a>
                </div>
            </div>
            <div v-show="step === 3" class="form-step">
                <h4 class="text-center">Add AI Box</h4>
                <div class="input-group">
                    <label>ID</label>
                    <input type="text" v-model="form.ai_box.id" />
                </div>
                <div class="input-group">
                    <label>Name</label>
                    <input type="text" v-model="form.ai_box.name" />
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" v-model="form.ai_box.password" />
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="step++;">Next</a>
                </div>
            </div>
            <div v-show="step === 4" class="form-step">
                <h4 class="text-center">Add Camera</h4>
                <div class="input-group">
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="step++;">Next</a>
                </div>
            </div>
            <div v-show="step === 5" class="form-step">
                <h4 class="text-center">You're All Set!</h4>
                <div class="form-data">
                    <h5>Dealer</h5>
                    Name: {{ form.dealer.name }}
                    <br>
                    Phone: {{ form.dealer.phone }}
                    <br>
                    Address: {{ form.dealer.address }}
                    <hr>
                    <h5>Site</h5>
                    Location: {{ form.site.city }}, {{ form.site.country }}
                    <hr>
                    <h5>AI Box</h5>
                    ID: {{ form.ai_box.id }}
                    <br>
                    Name: {{ form.ai_box.name }}
                    <br>
                    Password: {{ form.ai_box.password }}
                    <hr>
                    <h5>Cameras</h5>
                    <span v-for="(c, index) in form.cameras" :key="index">
                        {{ c.name }}<br>
                    </span>
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="confirm()">Confirm</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import * as echarts from 'echarts'

// 真實座標 geoJson 的臺灣 -------------------------------------------------------------------
import taiwanJson3 from '../assets/json/taiwan3.json'
// 真實座標 geoJson 的臺灣 -------------------------------------------------------------------

export default {
    data() {
        return {
            step: 1,
            progress_type: [
                '',
                '',
                '',
                '',
                ''
            ],
            progress_width: 'width:0%',
            form: {
                dealer: {
                    name: '',
                    phone: '',
                    address: ''
                },
                site: {
                    country: '台灣',
                    city: ''
                },
                ai_box: {
                    id: '',
                    name: '',
                    password: ''
                },
                cameras: [
                    {
                        name: '金融大樓4F'
                    },
                    {
                        name: '金融大樓18F樓梯'
                    },
                    {
                        name: '金融大樓1F'
                    },
                    {
                        name: '金融大樓10F'
                    }
                ],
            },
            mapOption2: {
                tooltip: {
                    alwaysShowContent: true, // 提示框总是显示（不再是鼠标离开就消失）
                    enterable: true, // 允许提示框被点击
                    formatter: function (params) {
                        const value = params.value
                        return params.name + ': ' + value[2]
                    }
                },
                geo: {
                    layoutSize: '100%', // 佈局尺寸
                    layoutCenter: ['50%', '50%'], // 佈局位置
                    tooltip: {
                        show: true,
                        formatter: function (data) {
                            if (data.data !== undefined) {
                                return data.data[3].name
                            } else {
                                return ''
                            }
                        }
                    },
                    map: 'taiwan',
                    roam: true,
                    zoom: 1.0,
                    center: [120.8, 23.7],
                    emphasis: {
                        focus: 'none', // 高亮
                        label: {
                            color: '#fff', // hover 文字顏色
                            textShadowColor: '#000',
                            textShadowBlur: 1,
                            formatter: function (data) {
                                // console.log(data)
                                // if (data.name === '高雄市') {
                                //   return 'KKK'
                                // }
                            }
                        },
                        itemStyle: {
                            areaColor: 'orange',
                            borderColor: 'black', //  hover地圖邊界
                            borderWidth: 2,
                            opacity: 1,
                            shadowColor: 'rgba(74, 188, 251, 0.4)',
                            shadowBlur: 3,
                            shadowOffsetX: 3,
                            shadowOffsetY: 3
                        }
                    },
                    label: {
                        // show: true // 显示
                        color: 'rgba(255, 255, 255,1)' // 颜色
                    },
                    itemStyle: {
                        borderColor: '#fff'
                    },
                    regions: [
                        {
                            name: '高雄市',
                            itemStyle: {
                                areaColor: '#6790CD'
                            }
                        },
                        {
                            name: '屏東縣',
                            itemStyle: {
                                areaColor: '#8FB2E0'
                            }
                        },
                        {
                            name: '台東縣',
                            itemStyle: {
                                areaColor: '#81A6DA'
                            }
                        },
                        {
                            name: '花蓮縣',
                            itemStyle: {
                                areaColor: '#759CD4'
                            }
                        },
                        {
                            name: '宜蘭縣',
                            itemStyle: {
                                areaColor: '#759CD4'
                            }
                        },
                        {
                            name: '新北市',
                            itemStyle: {
                                areaColor: '#89ACDD'
                            }
                        },
                        {
                            name: '台北市',
                            itemStyle: {
                                areaColor: '#5C88C7'
                            }
                        },
                        {
                            name: '基隆市',
                            itemStyle: {
                                areaColor: '#4373BA'
                            }
                        },
                        {
                            name: '桃園市',
                            itemStyle: {
                                areaColor: '#A6C4EA'
                            }
                        },
                        {
                            name: '新竹縣',
                            itemStyle: {
                                areaColor: '#6B94CF'
                            }
                        },
                        {
                            name: '新竹市',
                            itemStyle: {
                                areaColor: '#80A5DA'
                            }
                        },
                        {
                            name: '苗栗縣',
                            itemStyle: {
                                areaColor: '#92B4E2'
                            }
                        },
                        {
                            name: '台中市',
                            itemStyle: {
                                areaColor: '#88ABDD'
                            }
                        },
                        {
                            name: '南投縣',
                            itemStyle: {
                                areaColor: '#5D89C8'
                            }
                        },
                        {
                            name: '彰化縣',
                            itemStyle: {
                                areaColor: '#6C94CF'
                            }
                        },
                        {
                            name: '雲林縣',
                            itemStyle: {
                                areaColor: '#7DA2D8'
                            }
                        },
                        {
                            name: '嘉義縣',
                            itemStyle: {
                                areaColor: '#8DAFDF'
                            }
                        },
                        {
                            name: '嘉義市',
                            itemStyle: {
                                areaColor: '#8EC0EA'
                            }
                        },
                        {
                            name: '台南市',
                            itemStyle: {
                                areaColor: '#759CD4'
                            }
                        },
                        {
                            name: '澎湖縣',
                            itemStyle: {
                                areaColor: '#81A6DA'
                            }
                        },
                        {
                            name: '金門縣',
                            itemStyle: {
                                areaColor: '#81A6DA'
                            }
                        },
                        {
                            name: '連江縣',
                            itemStyle: {
                                areaColor: '#81A6DA'
                            }
                        }

                    ]

                },
                series: {
                    type: 'custom',
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    zlevel: 1,
                    data: [], // 放資料的地方
                    renderItem(params, api) {
                        const coord = api.coord([
                            api.value(0, params.dataIndex),
                            api.value(1, params.dataIndex)
                        ])
                        const circles = []
                        for (let i = 0; i < 5; i++) {
                            circles.push({
                                type: 'circle',
                                shape: {
                                    cx: 0,
                                    cy: 0,
                                    r: 30
                                },
                                style: {
                                    stroke: '#F7A61E',
                                    fill: 'none',
                                    lineWidth: 2 // 漣漪寬度
                                },
                                // Ripple animation
                                keyframeAnimation: {
                                    duration: 4000,
                                    loop: true,
                                    delay: (-i / 4) * 4000,
                                    keyframes: [
                                        {
                                            percent: 0,
                                            scaleX: 0,
                                            scaleY: 0,
                                            style: {
                                                opacity: 1
                                            }
                                        },
                                        {
                                            percent: 1,
                                            scaleX: 1,
                                            scaleY: 0.4,
                                            style: {
                                                opacity: 0
                                            }
                                        }
                                    ]
                                }
                            })
                        }
                        return {
                            type: 'group',
                            x: coord[0],
                            y: coord[1],
                            children: [
                                {
                                    // Add a transparent rectangle to cover the icon and make it clickable
                                    type: 'rect',
                                    shape: {
                                        x: -20,
                                        y: -40,
                                        width: 60,
                                        height: 60
                                    },
                                    style: {
                                        opacity: 0
                                    },
                                    onclick: function () {
                                        // Handle the click event here
                                    }
                                },
                                ...circles,
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
                                        x: -10,
                                        y: -35,
                                        width: 20,
                                        height: 40
                                    },
                                    style: {
                                        fill: '#F7A61E'
                                    },
                                    // Jump animation.
                                    keyframeAnimation: {
                                        duration: 1500,
                                        loop: true,
                                        delay: Math.random() * 1000,
                                        keyframes: [
                                            {
                                                y: -10,
                                                percent: 0.5,
                                                easing: 'cubicOut'
                                            },
                                            {
                                                y: 0,
                                                percent: 1,
                                                easing: 'bounceOut'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    async mounted() {
        if (typeof (this.$refs.mapChart) !== 'undefined') {
            let mapChart = echarts.getInstanceByDom(this.$refs.mapChart)

            if (mapChart === null || mapChart === undefined) {
                mapChart = await echarts.init(this.$refs.mapChart)
            }

            // 圖表設置------------------------------------------------------------------
            const option = this.mapOption2 // for taiwanJson
            echarts.registerMap('taiwan', taiwanJson3)
            // 設置 option --------------------------------------------------------------
            mapChart.setOption(option)

            // 標示點 => 拿到點擊的點，把資料展示在右側 ------------------------------------
            mapChart.on('click', (params) => {
                // console.log(params.name)
                this.form.site.city = params.name
                // if (!params.selected.length) {
                //     mapChart.dispatchAction({
                //         type: 'hideTip'
                //     });
                //     mapChart.dispatchAction({
                //         type: 'geoSelect',
                //         geoIndex: 0
                //         // Use no name to unselect.
                //     });
                // } else {
                //     this.form.site.city = params.name;
                //     mapChart.dispatchAction({
                //         type: 'geoSelect',
                //         geoIndex: 0,
                //         name: name
                //     });
                //     mapChart.dispatchAction({
                //         type: 'showTip',
                //         geoIndex: 0,
                //         name: name
                //     });
                // }
            });
        }
    },
    methods: {
        confirm(event) {
        }
    },
    watch: {
        progress_type: {
            immediate: true,
            handler(val) {
                return this.progress_type
            }
        },
        step: {
            immediate: true,
            handler(val) {

                var width = 0;
                if (val === 1) {
                    this.progress_type[0] = "progress-step-active"
                    for (let i = 1; i < this.progress_type.length; i++) {
                        this.progress_type[i] = ""
                    }
                } else if (val === 2) {
                    for (let i = 0; i < this.progress_type.length; i++) {
                        if (i <= 1) {
                            this.progress_type[i] = "progress-step-active"
                        } else {
                            this.progress_type[i] = ""
                        }
                    }
                    width = ((1) / (5 - 1)) * 100
                } else if (val === 3) {
                    for (let i = 0; i < this.progress_type.length; i++) {
                        if (i <= 2) {
                            this.progress_type[i] = "progress-step-active"
                        } else {
                            this.progress_type[i] = ""
                        }
                    }
                    width = ((1) / (3 - 1)) * 100
                } else if (val === 4) {
                    for (let i = 0; i < this.progress_type.length; i++) {
                        if (i <= 3) {
                            this.progress_type[i] = "progress-step-active"
                        } else {
                            this.progress_type[i] = ""
                        }
                    }
                    width = ((1) / (2.4 - 1)) * 100
                } else {
                    for (let i = 0; i < this.progress_type.length; i++) {
                        this.progress_type[i] = "progress-step-active"
                    }
                    width = 100
                }

                console.log(width + '%')
                this.progress_width = 'width:' + width + '%'

                return val;
            }
        }
    }
}
</script>
<style>
:root {
    --primary-color: #0d6efd;
}

*,
*::before *::after {
    box-sizing: border-box;
}

.text-center {
    text-align: center;
}

.progressbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    counter-reset: step;
}

.progressbar::before,
.progress {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(10%);
    height: 4px;
    width: 100%;
    background-color: #dcdcdc;
    z-index: -1;
}

.progress {
    background-color: var(--primary-color);
    width: 0%;
}

.progress-step {
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #dcdcdc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress-step-active {
    background-color: var(--primary-color);
    color: #f3f3f3;
}

.progress-step::before {
    counter-increment: step;
    content: counter(step);
}

.progress-step::after {
    position: absolute;
    top: calc(100%+00.5rem);
    font-size: 0.85rem;
    color: #666;
}

@keyframes animate {
    from {
        transform: scale(1, 0);
        opacity: 0;
    }

    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}

#formBody {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 4rem 0;
    /* display: grid;
    place-items: center;
    min-height: 100vh; */
}

.form {
    width: clamp(420px, 50%, 530px);
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 0.35rem;
    padding: 1.5rem;
}

.form-step {
    transform-origin: top;
    animation: animate 0.5s;
}

.form-data {
    margin: 2rem 0;
    height: 400px;
    overflow: scroll;
}

#mapChart {
    width: 500px;
    height: 671px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.input-group,
h2,
h4 {
    margin: 2rem 0;
}

.btn-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
}

img {
    max-width: 100%;
}
</style>