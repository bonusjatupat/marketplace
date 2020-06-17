import { extend } from "vee-validate";
import { required, alpha, alpha_spaces, email } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "This field is required"
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});

extend("alpha_spaces", {
    ...alpha_spaces,
    message: "This field must only contain alphabetic characters and spaces"
});

extend("email", {
    ...email,
    message: "This field must be in form of email address"
});




