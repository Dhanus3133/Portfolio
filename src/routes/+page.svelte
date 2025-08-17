<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Briefcase, FolderKanban, Wrench, MapPin } from '@lucide/svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Dock from '../components/Dock.svelte';
	import DockIcon from '../components/DockIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import data from '$lib/data.json';
	import { spotlight } from '$lib/actions';

	const { personalDetails, about, workExperience, achievements, projects, skills, hobbies, navs } =
		data;

	const icons = {
		Briefcase,
		FolderKanban,
		Wrench,
		GithubIcon,
		LinkedInIcon,
		MailIcon,
		XIcon
	};

	let showJsonView = false;

	onMount(() => {
		const savedPreference = localStorage.getItem('portfolio-view');
		if (savedPreference === 'json') {
			showJsonView = true;
		}
	});

	$: if (browser) {
		localStorage.setItem('portfolio-view', showJsonView ? 'json' : 'ui');
	}
</script>

<svelte:head>
	<title>{personalDetails.name} | {personalDetails.title}</title>
	<meta name="description" content={personalDetails.shortAbout} />
	<meta property="og:title" content={`${personalDetails.name} | ${personalDetails.title}`} />
	<meta property="og:description" content={personalDetails.shortAbout} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${personalDetails.name} | ${personalDetails.title}`} />
	<meta name="twitter:description" content={personalDetails.shortAbout} />
</svelte:head>

<button
	on:click={() => (showJsonView = !showJsonView)}
	class="fixed top-4 right-4 z-50 text-xs text-zinc-500 hover:text-teal-400 transition-colors bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800"
	aria-label="Toggle between UI and JSON view"
>
	{showJsonView ? 'View UI' : 'View JSON'}
</button>

<div
	class="mx-auto min-h-screen font-sans px-4 py-16 sm:py-24 pb-[6.5rem]"
	class:max-w-3xl={!showJsonView}
	class:w-[85vw]={showJsonView}
>
	{#if !showJsonView}
		<main class="flex flex-col gap-16">
			<header class="flex flex-col items-center gap-4 text-center">
				<h1 class="text-5xl font-bold text-zinc-100">{personalDetails.name}</h1>
				<h2 class="text-2xl text-zinc-400 font-normal">{personalDetails.title}</h2>
				<div class="flex items-center gap-2 text-zinc-500">
					<MapPin size={16} />
					<span>{personalDetails.location}</span>
				</div>
				<a
					href={personalDetails.resumeUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-4 inline-block bg-zinc-800 text-zinc-200 px-4 py-2 rounded-md hover:bg-teal-500 transition-colors"
				>
					Download Resume
				</a>
				<p class="max-w-2xl my-4 text-zinc-300 leading-relaxed text-justify hyphens-auto">
					{about}
				</p>
			</header>

			<section id="experience" class="flex flex-col gap-8">
				<h3 class="text-2xl font-semibold text-zinc-200">Work Experience</h3>
				<div class="relative flex flex-col gap-12 border-l-2 border-zinc-800 ml-3">
					{#each workExperience as job}
						<div class="relative pl-8 group">
							<div
								class="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-teal-500 border-2 border-zinc-900 transition-all duration-300 group-hover:scale-125 group-hover:ring-4 group-hover:ring-teal-500/30"
							/>

							<p class="text-sm text-zinc-500 mb-2">{job.duration}</p>
							<h4 class="text-lg font-medium text-zinc-100">{job.role}</h4>
							<p class="text-base text-zinc-400 mb-4">{job.company}</p>
							<ul class="list-disc list-outside ml-4 space-y-2 text-zinc-400 leading-relaxed">
								{#each job.description as point}
									<li>{point}</li>
								{/each}
							</ul>
							<div class="flex flex-wrap gap-2 mt-6">
								{#each job.skills as skill}
									<span
										class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section id="achievements" class="flex flex-col gap-8">
				<h3 class="text-2xl font-semibold text-zinc-200">Achievements</h3>
				<div class="grid sm:grid-cols-2 gap-6">
					{#each achievements as achievement}
						<a
							href={achievement.link}
							target="_blank"
							rel="noopener noreferrer"
							class="card-spotlight group flex flex-col bg-zinc-900 border border-zinc-800 p-6 rounded-lg transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20"
							use:spotlight
						>
							<h4
								class="text-lg font-medium text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors"
							>
								{achievement.name}
							</h4>
							<p class="text-zinc-400 mb-4 leading-relaxed">{achievement.description}</p>
							<div class="flex flex-wrap gap-2 mt-auto">
								{#each achievement.tech as tech}
									<span
										class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium"
									>
										{tech}
									</span>
								{/each}
							</div>
						</a>
					{/each}
				</div>
			</section>

			<section id="projects" class="flex flex-col gap-8">
				<h3 class="text-2xl font-semibold text-zinc-200">Projects</h3>
				<div class="grid sm:grid-cols-2 gap-6">
					{#each projects as project}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="card-spotlight group flex flex-col bg-zinc-900 border border-zinc-800 p-6 rounded-lg transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20"
							use:spotlight
						>
							<h4
								class="text-lg font-medium text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors"
							>
								{project.name}
							</h4>
							<p class="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
							<div class="flex flex-wrap gap-2 mt-auto">
								{#each project.tech as tech}
									<span
										class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium"
									>
										{tech}
									</span>
								{/each}
							</div>
						</a>
					{/each}
				</div>
			</section>

			<section id="skills" class="flex flex-col gap-8">
				<h3 class="text-2xl font-semibold text-zinc-200">Skills & Technologies</h3>
				<div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
					{#each Object.entries(skills) as [category, skillList]}
						<div>
							<h4 class="mb-4 text-lg font-medium text-zinc-300">{category}</h4>
							<div class="flex flex-wrap gap-2">
								{#each skillList as skill}
									<span
										class="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-zinc-700 hover:-translate-y-0.5"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section class="flex flex-col gap-4">
				<h3 class="text-2xl font-semibold text-zinc-200">Hobbies & Past-times</h3>
				<p class="text-zinc-400 leading-relaxed">
					{#each hobbies as hobby, i}
						{#if hobby.link}
							<a
								href={hobby.link}
								target="_blank"
								rel="noopener noreferrer"
								class="underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-teal-400 hover:decoration-teal-500"
							>
								{hobby.name}
							</a>
						{:else}
							<span>{hobby.name}</span>
						{/if}
						{#if i < hobbies.length - 1}
							<span class="text-zinc-600 select-none pr-1"> • </span>
						{/if}
					{/each}
				</p>
			</section>
		</main>

		<footer class="text-center mt-24 pt-8 border-t border-zinc-800/50 text-zinc-500 text-sm">
			<p>Built by {personalDetails.name} &copy; {new Date().getFullYear()}</p>
		</footer>

		<Tooltip.Provider>
			<div class="fixed left-0 right-0 bottom-4 flex justify-center pointer-events-none z-50">
				<div class="pointer-events-auto">
					<Dock direction="middle" class="relative" let:mouseX let:distance let:magnification>
						{#each navs.navbar as item}
							<DockIcon {mouseX} {magnification} {distance}>
								<Tooltip.Root>
									<Tooltip.Trigger>
										<a
											href={item.href}
											class="hover:bg-zinc-800 transition-all duration-200 rounded-full p-3 mx-0 block"
										>
											<svelte:component
												this={icons[item.icon]}
												size={22}
												strokeWidth={1.5}
												class="cursor-pointer text-zinc-400 transition-colors hover:text-teal-400"
											/>
										</a>
									</Tooltip.Trigger>
									<Tooltip.Content sideOffset={8}>
										<p>{item.label}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</DockIcon>
						{/each}
						<Separator orientation="vertical" class="h-full w-[0.6px] bg-zinc-800" />
						{#each navs.contact as item}
							<DockIcon {mouseX} {magnification} {distance}>
								<Tooltip.Root>
									<Tooltip.Trigger>
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											class="hover:bg-zinc-800 transition-all duration-200 rounded-full p-0 block"
										>
											<svelte:component
												this={icons[item.icon]}
												className="m-3 h-5 w-5 text-zinc-400 cursor-pointer transition-colors hover:text-teal-400"
											/>
										</a>
									</Tooltip.Trigger>
									<Tooltip.Content sideOffset={9}>
										<p>{item.label}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</DockIcon>
						{/each}
					</Dock>
				</div>
			</div>
		</Tooltip.Provider>
	{:else}
		<pre
			class="bg-zinc-900 border border-zinc-800 text-zinc-300 p-4 rounded-lg overflow-auto text-sm mt-10"><code
				>{JSON.stringify(data, null, 2)}</code
			></pre>
	{/if}
</div>
