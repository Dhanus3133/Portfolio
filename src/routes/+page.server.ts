import type { PageServerLoadEvent } from './$types';

export async function load({ url }: PageServerLoadEvent) {
	return {
		href: url.href,
		origin: url.origin
	};
}
