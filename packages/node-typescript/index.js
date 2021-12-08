exports.default = {
  singleQuote: true,
  trailingComma: "all",
  semi: false,
  endOfLine: "lf",
  printWidth: 120,
  overrides: [
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
  ],
};
