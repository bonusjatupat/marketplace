<template>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenter2Title">Create Your Account</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Facebook & Google -->
                <div>
                    <p class="text-body">Connect with</p>
                    <p class="d-flex justify-content-between align-items-center">
                        <span><button class="btn btn-facebook">Facebook</button></span>
                        <span><button class="btn btn-google">Google</button></span>
                    </p>
                </div>
                <p class="text-have-account text-center" style="font-weight:bold;">Or</p>
                <form class="needs-validation" novalidate>
                    <!-- Name & Phone number -->
                    <div class="form-group">
                        <label for="fullName">Full Name <span style="color:red">*</span></label>
                        <input id="fullName" type="text" class="form-control" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                        <label for="phomeNumber">Phone Number <span style="color:red">*</span></label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+66</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">+66</a>
                                    <a class="dropdown-item" href="#">+91</a>
                                </div>
                            </div>
                            <input id="phoneNumber" type="text" class="form-control" aria-label="Phone number" placeholder="Enter your-9-digit mobile number" required>
                        </div>
                        <p class="label-form"><label for="phomeNumber">Enter mobile number excluding 0 in the front, e.g. 81 234 5678</label></p>
                    </div>
                    <!-- Email & Password -->
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email <span style="color:red">*</span></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="example@domain.com" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password <span style="color:red">*</span></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" required>
                    </div>
                    <!-- Agreement -->
                    <p class="text-have-account">I have read and agree to <span type="button" style="color:#343ab4">Terms and Conditions</span>, <span type="button" style="color:#343ab4">Privacy Policy</span> and <span type="button" style="color:#343ab4">Cookie Policy</span> and I acknowledge that I can withdraw my consents at anytime.</p>
                    <p class="text-have-account">For you not to miss our exclusive campaigns!</p>
                    <p class="text-have-account">
                        <input type="checkbox" aria-label="Checkbox for following text input" class="align-middle">
                        <span class="align-middle" style="font-size:11px"> I want to receive newsletters and special offer notices via email and SMS</span>
                    </p>
                    <p class="text-have-account">
                        <input type="checkbox" aria-label="Checkbox for following text input" class="align-middle">
                        <span class="align-middle" style="font-size:11px"> I consent NocNoc affiliated company and partners to send newsletters and special offer notices via email, SMS, application and social media.</span>
                    </p>
                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-primary">Accept & Create Account</button>
                    <p class="text-have-account text-center" type="button">Already have an account? <span type="button" style="color:#343ab4">Log In</span></p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-header {
    background-color: #f2f2f2;
}
.modal-title {
    color: black;
    font-size: 16px;
}
.form-group {
    margin-top: -1.5rem;
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
}
.form-group .dropdown-toggle {
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    font-size: 14px;
}
.form-group .dropdown-menu {
    font-size: 14px;
}
.label-form {
    margin-top: -20px;
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
.text-have-account {
    color: black;
    margin-top: 8px;
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