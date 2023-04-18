<script setup>
</script>

<template>
    <div id="formBody">
        <form action="#" class="form">

            <div class="progressbar">
                <div class="progress-step"></div>
                <div class="progress-step"></div>
                <div class="progress-step"></div>
            </div>

            <div class="form-step form-step-active">
                <h2 class="text-center">Enter Dealer Info</h2>
                <div class="input-group">
                    <label for="dealer">Dealer</label>
                    <input type="text" name="dealer" id="dealer" />
                </div>
                <div class="input-group">
                    <label for="phone">Phone</label>
                    <input type="phone" name="phone" id="phone" />
                </div>
                <div class="input-group">
                    <label for="address">Address</label>
                    <input type="address" name="address" id="address" />
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary" style="visibility: hidden">Previous</a>
                    <a href="#" class="btn btn-primary">Next</a>
                </div>
            </div>
            <div class="form-step">
                <h2 class="text-center">Create Site</h2>
                <div class="input-group">
                    <label for="location">Location</label>
                    <input type="text" name="location" id="location" />
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary">Previous</a>
                    <a href="#" class="btn btn-primary">Next</a>
                </div>
            </div>
            <div class="form-step">
                <h2 class="text-center">Add AI Box</h2>
                <div class="input-group">
                    <label for="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary">Previous</a>
                    <a href="#" class="btn btn-primary">Next</a>
                </div>
            </div>
            <div class="form-step">
                <h2 class="text-center">Add Camera</h2>
                <div class="input-group">
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary">Previous</a>
                    <a href="#" class="btn btn-primary">Next</a>
                </div>
            </div>
            <div class="form-step">
                <h2 class="text-center">You're All Set!</h2>
                <div class="input-group">
                </div>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary">Previous</a>
                    <a href="#" class="btn btn-primary">Confirm</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
}
</script>
<style>
*,
*::before *::after {
    box-sizing: border-box;
}

.text-center {
    text-align: center;
}

.progressbar{
    position: relative;
}

.progress-step{
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #dcdcdc;
    border-radius: 50%;
}

.form-step{
    display: none;
}

.form-step-active{
    display: block;
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

.input-group {
    margin: 2rem 0;
}

.btn-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
}
</style>