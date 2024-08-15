"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const [hover, setHover] = useState(false);

	return (
		<main className="flex min-h-screen flex-col items-center p-6">
			<p
				className={`relative text-center text-sm top-64 ${hover ? "opacity-0" : "opacity-100"} transition duration-300 ease-out`}
			>
				psst... hover over me :3
			</p>
			<p className={"absolute text-center text-base bottom-6"}>
				<i>
					pfp by <Link href="https://twitter.com/etunisgood2">etun</Link>!!
				</i>
			</p>
			<div
				className="relative flex flex-col items-center mx-auto w-1/2 h-1/2"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Image
					className={`relative z-10 top-72 w-60 h-60 ${hover ? "scale-90 -translate-y-32" : "scale-100 translate-y-0"} rounded-lg transition duration-1000 ease-out`}
					src="/lapis_transparent.png"
					width={500}
					height={500}
					alt="me"
				/>
				<div
					className={`absolute flex flex-col top-96 gap-2 p-8 items-center text-center text-xl w-full ${hover ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} transition duration-1000 ease-out`}
				>
					<p className="text-2xl">
						<b>LapisWolf</b>
					</p>
					<p className="text-base">@lapisw</p>
					<p className="text-xs">📌 Seattle, WA</p>
					<hr className={`${hover ? "w-52" : "w-0"} transition-all duration-1000 ease-out`} />
					<p>
						👋 Hiya, I&apos;m Lapis!
						<br />I absolutely love planes, develop software as a side hobby, and <i>occassionally</i> work
						on Roblox games!
					</p>
					<hr className={`${hover ? "w-96" : "w-0"} transition-all delay-200 duration-1000 ease-out`} />
					<p>See me on...</p>
					<Link href="https://github.com/LapisThe">GitHub</Link>
					<Link href="https://steamcommunity.com/id/lapisyuh">Steam</Link>
				</div>
			</div>
		</main>
	);
}
