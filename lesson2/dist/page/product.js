let arr = [1, 2, 3, 4];
const in4 = ['a', 'b', 3];
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["successfully"] = 100] = "successfully";
    STATUS_CODE[STATUS_CODE["client_err"] = 101] = "client_err";
})(STATUS_CODE || (STATUS_CODE = {}));
let a = STATUS_CODE.client_err;
const show = (name, age) => {
    console.log(name + age);
};
