"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function Home() {
	const [hover, setHover] = useState(false);

	return (
		<BackgroundBeamsWithCollision>
			<main className="flex h-screen w-screen flex-col justify-center items-center gap-6 p-6">
				<p
					className={`relative text-center text-sm md:text-base ${hover ? "opacity-0" : "opacity-100"} transition duration-300 ease-out`}
				>
					psst... hover over me :3
				</p>
				<p className={"absolute top-4 text-center text-sm md:text-base"}>
					<i>
						pfp by <Link href="https://twitter.com/etunisgood2">etun</Link>!!
					</i>
				</p>
				<div
					className="relative flex flex-col items-center mx-auto w-full md:w-1/2 h-1/2"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<Image
						className={`relative z-10 w-60 h-auto object-cover ${hover ? "scale-90 -translate-y-32" : "scale-100 translate-y-0"} rounded-xl transition duration-1000 ease-out`}
						src="/lapis_transparent.png"
						width={500}
						height={500}
						alt="me"
					/>
					<div
						className={`relative flex flex-col bottom-28 gap-2 items-center text-center text-base md:text-xl w-full ${hover ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} transition duration-1000 ease-out`}
					>
						<p className="text-xl md:text-2xl">
							<b>LapisWolf</b>
						</p>
						<p className="text-sm md:text-base">@lapisw</p>
						<p className="text-xs">📌 Seattle, WA</p>
						<hr className={`${hover ? "w-44 md:w-52" : "w-0"} transition-all duration-1000 ease-out`} />
						<p>
							👋 Hiya, I&apos;m Lapis!
							<br />I absolutely love planes, develop software as a side hobby, and <i>
								occasionally
							</i>{" "}
							work on Roblox games!
						</p>
						<hr
							className={`${hover ? "w-72 md:w-96" : "w-0"} transition-all delay-200 duration-1000 ease-out`}
						/>
						<p>See me on...</p>
						<Link href="https://github.com/LapisThe">GitHub</Link>
						<Link href="https://steamcommunity.com/id/lapisyuh">Steam</Link>
					</div>
				</div>
			</main>
		</BackgroundBeamsWithCollision>
	);
}
