Prism.languages.neo = {

	'section-header': {
		pattern: /(-> \w+)/,
		inside: {
			'bold': /^->\s+/,
			'tag': /^.*$/m
		}
	},

	'attribute': {
		pattern: /(>>\s+\w+:.*)/,
		inside: {
			'start_stuff': {
				pattern: /^(>>)/,
				alias: 'bold'
			},
			'attr_open': {
				pattern: /([^:]+:)/,
				inside: {
					'attr_key': {
						pattern: /[^:]+/,
						alias: 'attr-name'
					},
					'separator': {
						pattern: /\:/,
						alias: 'punctuation'
					}
				}
			},

			'end_stuff': {
				pattern: /.*/,
				// lookbehind: true,
				alias: 'attr-value'
			}


			// 'bold': /^>>\s+/,
			// 	'attr-key': {
			// 			pattern: /([^:]+:)/,
			// 			inside: {
			// 				pattern: /[^:]+/,
			// 				alias: 'attr-name'
			// 			}
			//  		}
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
						alias: 'bold'
					}
				}
			},


			'end_stuff': {
				pattern: /^([^*]*\*)/,
				inside: {
					'a': {
						pattern: /([^*:|]+\:)/,
						inside: {
							'b': {
								pattern: /[^*:|]+/,
								alias: 'attr-name'
							},
							'c': {
								pattern: /\:/,
								alias: 'punctuation'
							},


						}
					},
					'd': {
						pattern: /[^*:|]+/,
						alias: 'attr-value'
					},
					'end_marker': {
						pattern: /\*/,
						alias: 'keyword'
					}
				}
			},
			'a_pipe': {
				pattern: /\|/,
				alias: 'keyword'
			},
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
				// alias: 'bold'
			},
			'commands': {
				pattern: /^(\|[^|>]+)/,
				inside: {
					'the_pipe': {
						pattern: /^\|/,
						alias: 'keyword'
					},
					'not_pipe_attr': {
						pattern: /^([^:]+\:[^|>]+)/,
						inside: {
							'front': {
								pattern: /^[^:]+/,
								alias: 'tag'
							}
							,
							'separator': {
								pattern: /^(\:.*)/,
								inside: {
									'a': {
										pattern: /\:/,
										alias: 'keyword'
									},
									'b': {
										pattern: /.*/,
										alias: 'attr-value'
									}
								}
							}

						}
					},
					'not_pipe_command': {
						pattern: /^[^|>]+/,
						alias: 'tag'
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