import * as bcrypt from 'bcryptjs';

// Generate Salt
const salt = bcrypt.genSaltSync(10);

// Hash Password
const hash = bcrypt.hashSync('password', salt);

console.log("Hash: ", hash);