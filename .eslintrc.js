module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "prettier"],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react", "prettier"
	],
	"rules": {
		"prettier/prettier": ["error"],
		
		"no-unused-vars": [
			"error",
			{
			  varsIgnorePattern: "React"
			}
		],
		"quotes": [
			"error",
			"double"
		],
	}
};
