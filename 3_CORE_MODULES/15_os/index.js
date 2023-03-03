const os = require('os')

console.log(os.cpus())

console.log(os.freemem())

console.log(os.homedir())

console.log(os.type())

const interfaces = os.networkInterfaces();
let ipAddress;

// percorre todas as interfaces de rede
for (const interfaceName in interfaces) {
  const interface = interfaces[interfaceName];
  
  // percorre todos os endereços da interface
  for (const address of interface) {
    // verifica se o endereço é IPv4 e não é um endereço privado ou de loopback
    if (address.family === 'IPv4' && !address.internal) {
      ipAddress = address.address;
      break;
    }
  }

  if (ipAddress) {
    break;
  }
}

console.log(`O endereço IP local é ${ipAddress}`);