<template>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Log in to your account</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!-- Body -->
            <div class="modal-body">
                <!-- Facebook & Google -->
                <div>
                    <p class="text-body">Login with</p>
                    <p class="d-flex justify-content-between align-items-center">
                        <span><button class="btn btn-facebook">Facebook</button></span>
                        <span><button class="btn btn-google">Google</button></span>
                    </p>
                </div>
                <!-- Email & Password -->
                <form class="needs-validation" novalidate>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email <span style="color:red">*</span></label>
                        <ValidationProvider rules="email" v-slot="{ errors }">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="email" required>
                            <p class="text-error-input">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password <span style="color:red">*</span></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Log In</button>
                    <p class="text-forget-password text-right" type="button">Forgot Password?</p>
                </form>
                <hr>
                <!-- Sign Up -->
                <p class="text-title">New to NocNoc?</p>
                <p class="text-body">Please create your shopping account</p>
                <button class="btn btn-secondary">Create New Account</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider } from "vee-validate"
import DialogSignUp from "./DialogSignUp"

export default {
    name: "DialogLogin",
    components: {
        ValidationProvider,
        DialogSignUp
    },
    data() {
        return {
            email: ""
        }
    },
}
</script>

<style>
.modal-header {
    background-color: #f2f2f2;
}
.modal-title {
    color: black;
    font-size: 16px;
}
.form-group {
    margin-top: -1rem;
}
.form-group label {
    color: black;
    font-size: 12px;
    font-weight: lighter;
    margin-top: 0;
    margin-bottom: -.5rem;
}
.form-group input {
    padding: .5rem;
    font-size: 14px;
    width: 100%;
}
.modal-body button {
    margin-top: 1rem;
    padding: .7rem;
    width: 100%;
}
.text-title {
    font-weight: bold;
    font-size: 16px;
    color: black;
    margin-bottom: -.1rem;
}
.text-body {
    font-weight: lighter;
    font-size: 12px;
    color: black;
    margin-bottom: -.1rem;
}
.text-forget-password {
    color: #343ab4;
    margin-top: 4px;
    font-weight: lighter;
    font-size: 12px;
}
.text-error-input {
    color: red;
    font-weight: lighter;
    font-size: 12px;
}
hr {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
.btn-facebook {
    min-width: 230px;
    height: 40px;
    background-color:#3B5A99;
    color: white;
    font-weight: lighter;
    font-size: 14px;
}
.btn-google {
    min-width: 230px;
    height: 40px;
    background-color:#4285F5;
    color: white;
    font-weight: lighter;
    font-size: 14px;
}
.btn-facebook:hover {
    color: white
}
.btn-google:hover {
    color: white
}
</style>