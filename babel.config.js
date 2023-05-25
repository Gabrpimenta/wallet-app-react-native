module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@config": "./src/config",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
