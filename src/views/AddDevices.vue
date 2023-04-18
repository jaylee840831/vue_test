<script setup>
</script>

<template>
    <div id="formBody">
        <form action="#" class="form">

            <h2>Add Devices</h2>

            <div class="progressbar">
                <div class="progress" id="progress" :style="progress_width"></div>
                <div class="progress-step" :class="progress_type[0]"></div>
                <div class="progress-step" :class="progress_type[1]"></div>
                <div class="progress-step" :class="progress_type[2]"></div>
                <div class="progress-step" :class="progress_type[3]"></div>
                <div class="progress-step" :class="progress_type[4]"></div>
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
                <h4 class="text-center">Create Site</h4>
                <div class="input-group">
                    <label>Location</label>
                    <input type="text" v-model="form.site.location" />
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" @click="step--;">Previous</a>
                    <a class="btn btn-primary" @click="step++;">Next</a>
                </div>
            </div>
            <div v-show="step === 3" class="form-step">
                <h4 class="text-center">Add AI Box</h4>
                <div class="input-group">
                    <label>Box Name</label>
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
                    Dealer Name: {{ form.dealer.name }}
                    <br>
                    Dealer Phone: {{ form.dealer.phone }}
                    <br>
                    Dealer Address: {{ form.dealer.address }}
                    <hr>
                    Location: {{ form.site.location }}
                    <hr>
                    AI Box: {{ form.ai_box.name }}
                    <br>
                    Password: {{ form.ai_box.password }}
                    <hr>
                    Cameras
                    <br>
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
export default {
    data() {
        return {
            step: 1,
            progress_type: [
                'progress-step',
                'progress-step',
                'progress-step',
                'progress-step',
                'progress-step'
            ],
            progress_width: 'width:0%',
            form: {
                dealer: {
                    name: '',
                    phone: '',
                    address: ''
                },
                site: {
                    location: ''
                },
                ai_box: {
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
                    },
                    {
                        name: '金融大樓1F'
                    },
                    {
                        name: '金融大樓1F'
                    },
                    {
                        name: '金融大樓1F'
                    },
                    {
                        name: '金融大樓1F'
                    },
                    {
                        name: '金融大樓1F'
                    },
                ],
            }
        }
    },
    methods: {
        confirm() {
        }
    },
    watch: {
        step: {
            immediate: true,
            handler(val) {

                var width = 0;
                if (val === 1) {
                    this.progress_type[0] = "progress-step-active"
                    this.progress_type[1] = ""
                    this.progress_type[2] = ""
                    this.progress_type[3] = ""
                    this.progress_type[4] = ""
                } else if (val === 2) {
                    this.progress_type[0] = "progress-step-active"
                    this.progress_type[1] = "progress-step-active"
                    this.progress_type[2] = ""
                    this.progress_type[3] = ""
                    this.progress_type[4] = ""
                    width = ((1)/(5-1))*100
                } else if (val === 3) {
                    this.progress_type[0] = "progress-step-active"
                    this.progress_type[1] = "progress-step-active"
                    this.progress_type[2] = "progress-step-active"
                    this.progress_type[3] = ""
                    this.progress_type[4] = ""
                    width = ((1)/(3-1))*100
                } else if (val === 4) {
                    this.progress_type[0] = "progress-step-active"
                    this.progress_type[1] = "progress-step-active"
                    this.progress_type[2] = "progress-step-active"
                    this.progress_type[3] = "progress-step-active"
                    this.progress_type[4] = ""
                    width = ((1)/(2.4-1))*100
                } else {
                    this.progress_type[0] = "progress-step-active"
                    this.progress_type[1] = "progress-step-active"
                    this.progress_type[2] = "progress-step-active"
                    this.progress_type[3] = "progress-step-active"
                    this.progress_type[4] = "progress-step-active"
                    width = 100
                }

                console.log(width)
                this.progress_width = 'width:'+ width + '%'

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
    margin: 0;
    display: grid;
    place-items: center;
    min-height: 100vh;
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
</style>