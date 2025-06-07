"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	const [hover, setHover] = useState(false);

	return (
		<BackgroundBeamsWithCollision>
			<main className="flex h-screen w-screen flex-col justify-center items-center p-8">
				<p className={"absolute top-4 text-center text-sm md:text-base"}>
					<i>
						Profile pic. by <Link href="https://twitter.com/etunisgood2">Etun</Link>
					</i>
				</p>
				<div
					className="flex flex-col items-center w-full md:w-1/2 h-1/2"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<p
						className={`p-4 text-center text-sm md:text-base ${hover ? "opacity-0" : "opacity-100"} transition duration-300 ease-out`}
					>
						Psst... Hover over me!
					</p>
					<Image
						className={`z-10 w-60 h-auto object-cover ${hover ? "scale-90 -translate-y-32" : "scale-100 translate-y-0"} rounded-xl transition duration-1000 ease-out`}
						src="/lapis_transparent.png"
						width={500}
						height={500}
						alt="me"
					/>
					<div
						className={`relative flex flex-col bottom-28 gap-2 items-center text-center text-base/8 md:text-xl/8 w-full md:w-2/3 ${hover ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} transition duration-1000 ease-out`}
					>
						<p className="text-xl md:text-2xl">
							<b>Lapis Wolf</b>
						</p>
						<p className="text-sm md:text-base">@lapisw / @lapisthe</p>
						<p className="text-xs">📍 Seattle, WA</p>
						<hr className={`${hover ? "w-44 md:w-52" : "w-0"} transition-all duration-1000 ease-out`} />
						<p>
							👋 Hiya, I&apos;m Lapis!
							<br />
							I&apos;m quite the aviation geek, aspiring software engineer, and{" "}
							<span className="text-xs md:text-sm">tiny</span> indie game developer!
						</p>
						<hr
							className={`${hover ? "w-72 md:w-96" : "w-0"} transition-all delay-200 duration-1000 ease-out`}
						/>
						<p>See me on...</p>
						<ul className="space-y-2">
							<li>
								<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
								<Link href="https://github.com/LapisThe">GitHub</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faSteam}></FontAwesomeIcon>{" "}
								<Link href="https://steamcommunity.com/id/lapisyuh">Steam</Link>
							</li>
							<li>
								<FontAwesomeIcon icon={faBluesky}></FontAwesomeIcon>{" "}
								<Link href="https://bsky.app/profile/lapisthe.bsky.social">Bluesky</Link>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</BackgroundBeamsWithCollision>
	);
}
