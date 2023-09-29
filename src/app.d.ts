// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type User = {
	name: string,
	username: string,
	profile: string,
	avatar: Array,
	mathematics: {},
	science: {},
	social_science: {}
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
