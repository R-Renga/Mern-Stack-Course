const crypto = require("crypto");


const password = "mysecurepass"

const result = crypto.createHash("sha256").update(password).digest("hex");

console.log(result);


//encryption

const algorithm = "aes-256-cbc";

const secretkey = "abc@123"


const iv = crypto.randomBytes(16);

// 3. Encrypt
const cipher = crypto.createCipheriv(algorithm, secretkey, iv);
let encrypted = cipher.update("Hello World", "utf8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted:", encrypted);

// 4. Decrypt
const decipher = crypto.createDecipheriv(algorithm, secretkey, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted:", decrypted);


