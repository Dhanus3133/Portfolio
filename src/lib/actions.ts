export function spotlight(node: HTMLElement) {
	const handleMouseMove = (event: MouseEvent) => {
		const { left, top } = node.getBoundingClientRect();
		const x = event.clientX - left;
		const y = event.clientY - top;
		node.style.setProperty('--x', `${x}px`);
		node.style.setProperty('--y', `${y}px`);
	};

	node.addEventListener('mousemove', handleMouseMove);

	return {
		destroy() {
			node.removeEventListener('mousemove', handleMouseMove);
		}
	};
}
