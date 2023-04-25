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

	'strong_shorthand': {
		pattern: /(\*[^*]+\*[^*]*\*)/,
		inside: {
			'start_stuff': {
				pattern: /^(\*[^*]+\*)/,
				inside: {
					'markers': {
						pattern: /\*/,
						alias: 'keyword'
					},
					'content': {
						pattern: /[^*]+/,
						alias: 'char'
					}
				}
			},
			'end_stuff': {
				pattern: /^([^*]*\*)/,
				inside: {
					'values': {
						pattern: /[^|*]+/,
						alias: 'comment'
					},
					'a_pipe': {
						pattern: /\|/,
						alias: 'keyword'
					},
					'end_marker': {
						pattern: /\*/,
						alias: 'keyword'
					}
				}
			}
		}
	},

	'inline_tag': {
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