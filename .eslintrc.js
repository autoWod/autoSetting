/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-05-17 19:49:03
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module"
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
	// extends: ["airbnb-base/legacy","plugin:vue/essential","@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"array-callback-return": "off",
		"consistent-return": "off",
		"no-plusplus": "off",
		"func-names": "off",
		"no-param-reassign": "off",
		"no-nested-ternary": "off",
		"class-methods-use-this": "off",
		"no-unused-expressions": "off",
		"no-underscore-dangle": "off",
		"no-else-return": "off"
	},
	globals: {
		logger: true
	},
	overrides: [
		{
			files: ["**/__test__/*.{j,t}s?(x)", "**/test/unit/**/*.test.{j,t}s?(x)"],
			env: {
				jest: true
			}
		}
	]
};
