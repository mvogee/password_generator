
const createPw = (numbers: boolean, special: boolean, uppercase: boolean, length: number) : string => {
    let password : string = "";
    let lowercasePool = "abcdefghijklmnopqrstuvwxyz";
    let uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numPool = "1234567890";
    let specialPool = "!@#$%&*?_-";
    let charPool = lowercasePool + (uppercase ? uppercasePool : "") + (numbers ? numPool : "") + (special ? specialPool : "");

    for (let i = 0; i < length; i++) {
        password += charPool.charAt(Math.random() * charPool.length);
    }
    return (password);
};

export default createPw;


