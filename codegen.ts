import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'
dotenv.config()

const config: CodegenConfig = {
	schema: {
	} as any,

	documents: ['!./graphql/**/*'],

	generates: {
		'./graphql/': {
			preset: 'client',
			plugins: [],
		},
	},
}

export default config