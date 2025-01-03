import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Track {
    logo: string
    title: string
    prize: string
    description: string
}

const tracks: Track[] = [
    {
        logo: "/Sponsors/postman.png",
        title: "Best API Design & use of Postman for docs",
        prize: "Postman Swag Kit",
        description:
            "Receive a complete toolkit for the API lifecycle, accelerating design, testing, documentation & sharing across millions of developers worldwide.",
    },
    {
        logo: "/Sponsors/mongodb.png",
        title: "Best Use of MongoDB Atlas",
        prize: "M500 IoT Starter Kit",
        description:
            "MongoDB Atlas takes the modern database and makes it accessible in the cloud. Get started with $500 in credits, plus special prizes for the Atlas Free Tier for MongoDB University.",
    },
    {
        logo: "/Sponsors/godspeed.png",
        title: "Innovative use of Godspeed Systems",
        prize: "Godspeed Swag Pack",
        description:
            "Unleash your creativity with Godspeed! Make use of any offering that Godspeed provides to bring your idea to life. The more creative you are, the more you stand to win. Show us what you can do and be ridiculously creative.",
    },
    {
        logo: "/Sponsors/godaddy.png",
        title: "Best Domain name from GoDaddy registry",
        prize: "Hack from Home Kit",
        description:
            "GoDaddy Registry is giving you everything you need to be the best hacker at home! When you are done hacking, register your TLD with GoDaddy Registry for a chance to win the Hack from Home kit.",
    },
    {
        logo: "/Sponsors/virtual.png",
        title: "Best AI Usecase",
        prize: "Cash Prize of INR 15K",
        description:
            "Create an AI driven solution transforming Gaming, Social or Digital Entertainment. Utilize gen AI to solve ML, NLP/NLU, or next-gen vision based problems. Bonus points for creative solutions!",
    },
    {
        logo: "/Sponsors/auth0.png",
        title: "Best use of Auth0",
        prize: "Wireless headphones & Battery pack",
        description:
            "Secure your applications with Auth0's hassle-free features like Social Sign-in and Multi-Factor Authentication. Build something that can scale for up to 7000 users. Plus, enter to win wireless headphones and battery packs for your team by using Auth0 APIs.",
    },
    {
        logo: "/Sponsors/taipy.png",
        title: "Best use of Taipy",
        prize: "Wireless Headphones",
        description:
            "Taipy empowers Python developers with rapid web app creation, incorporating UI controls and backend features. Win wireless headphones by creating an innovative web/mobile feature for transportation. Taipy into your hackathon project!",
    },
    {
        logo: "/Sponsors/wolfram.png",
        title: "The Top 7 Teams",
        prize: "The Wolfram Award",
        description:
            "Each member of the top 7 teams will receive the Wolfram|One, Wolfram|Alpha Pro one-year subscription, Wolfram Technical One Personal Edition and Wolfram|Alpha Pro, worth $375.",
    },
]

export default function SponsoredTracks() {
    return (
        <section className="min-h-screen py-16 pt-36 font-extrabold">
            <div className="container mx-auto">
                <h1 className="mb-4 text-4xl font-extrabold text-primary-white sm:text-5xl lg:text-6xl">
                    Sponsored Tracks
                </h1>
                <p className="mb-12 text-lg text-primary-white">
                    Explore our sponsor tracks and leverage their technologies
                    to bring your projects to life! All monetary prizes will be
                    split equally among the winning team members.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tracks.map((track, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-0 bg-transparent"
                        >
                            <CardContent className="p-6">
                                <div className="mb-6 flex h-24 items-center justify-center rounded-lg bg-white">
                                    <Image
                                        src={track.logo}
                                        alt={`${track.title} logo`}
                                        width={200}
                                        height={100}
                                        className="h-auto w-auto object-contain"
                                    />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-primary-white">
                                    {track.title}
                                </h3>
                                <p className="mb-3 text-primary-red font-extrabold">
                                    {track.prize}
                                </p>
                                <p className="text-sm text-primary-white">
                                    {track.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
