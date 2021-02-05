export type APIResponse = {
	data: {
		user: {
			repositories: {
				edges: Array<{
					node: {
						name: string
						description: string
						primaryLanguage: {
							name: string
						}
					}
				}>
			}
		}
	}
}
