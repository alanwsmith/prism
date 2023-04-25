Prism.languages.neo = {

	'section-header': {
		pattern: /(x-> \w+)/,
		inside: {
			'bold': /^->/,
			'bold': /^.*$/
		}
	},
	'attribute': {
		pattern: /(x>>\s+\w+:.*)/,
		inside: {
			'bold': /.*/,
		}
	},
	'strong1': {
		pattern: /\*.*?\*\*/,
		alias: 'keyword'
	},

	'strong3': {
		pattern: /(<<.*?\|.*?>>)/,
		inside: {
			'start_tokens': {
				pattern: /^<</,
				alias: 'keyword'
			},
			'content': {
				pattern: /^[^|]+/,
				alias: 'char'
			},
			'commands': {
				pattern: /^(\|[^|>]+)/,
				inside: {
					'the_pipe': {
						pattern: /^\|/,
						alias: 'keyword'
					},
					'not_pipe': {
						pattern: /^[^|>]+/,
						alias: 'comment'
					}
				}
			},
			'end_tokens': {
				pattern: /^>>/,
				alias: 'keyword'
			},
		}
	}

};

Prism.languages.webmanifest = Prism.languages.neo;