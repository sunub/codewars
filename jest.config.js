const config = {
  extensionsToTreatAsEsm: [".ts", ".js"],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};

module.exports = config;
