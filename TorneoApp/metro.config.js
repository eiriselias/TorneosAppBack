const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// 👇 Agrega esta parte para forzar el polling y detectar cambios
config.watch = {
  usePolling: true,
  interval: 1000, // cada 1 segundo
};

module.exports = withNativeWind(config, { input: './global.css' });
