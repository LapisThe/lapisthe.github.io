import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faDiscord, faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	const [hover, setHover] = useState(false);

	return (
		<main className="font-[JetBrains_Mono] antialiased">
			<BackgroundBeamsWithCollision className="flex h-[93vh] md:h-[94vh] w-screen flex-col justify-center items-center p-8">
				<p className={"absolute top-4 text-center text-sm md:text-base"}>
					<i></i>
				</p>
				<div
					className="flex flex-col items-center w-full md:w-1/2 h-1/2"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<p
						className={`p-4 text-center text-xs md:text-sm ${hover ? "opacity-0" : "opacity-100"} transition duration-300 ease-out`}
					>
						Psst... Hover over me!
					</p>
					<img
						className={`z-10 w-48 h-auto object-cover ${hover ? "scale-90 -translate-y-32" : "scale-100 translate-y-0"} rounded-xl transition duration-1000 ease-out`}
						src={new URL("./assets/lapis_transparent.png", import.meta.url).href}
						width={500}
						height={500}
						alt="me"
					/>
					<div
						className={`relative flex flex-col bottom-28 gap-2 items-center text-center text-sm/8 md:text-base/8 w-full md:w-2/3 ${hover ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} transition duration-1000 ease-out`}
					>
						<p className="text-lg md:text-xl">
							<b>Lapis Wolf</b>
						</p>
						<p className="text-sm md:text-base">
							<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon> @lapisw
						</p>
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
						<ul className="space-y-0.5">
							<li>
								<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
								<a href="https://github.com/LapisThe">GitHub</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faSteam}></FontAwesomeIcon>{" "}
								<a href="https://steamcommunity.com/id/lapisyuh">Steam</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faBluesky}></FontAwesomeIcon>{" "}
								<a href="https://bsky.app/profile/lapisthe.bsky.social">Bluesky</a>
							</li>
						</ul>
					</div>
				</div>
			</BackgroundBeamsWithCollision>
			<footer>
				<div className="h-[7vh] md:h-[6vh] w-screen bg-gray-900 flex flex-col items-center justify-center p-4">
					<p className="text-sm text-gray-200">
						Profile picture by <a href="https://twitter.com/etunisgood2">etunisgood</a>!
					</p>
					<p className="text-sm text-gray-500">© 2025 LapisThe.</p>
				</div>
			</footer>
		</main>
	);
}
