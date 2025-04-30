"use client";

import Image from "next/image";
import ImageRegroupePPP from "../../public/img_PPP_regroupe.jpg";
import logoDofus from "../../public/logoAnkamaDofus.webp";
import actusdodo from "../../public/actusdodo.png";
import actusdodo2 from "../../public/actusdodo2.png";
import { Header } from "@/components/ui/header";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardTuto from "@/components/ui/cardTuto";
import { Link } from "lucide-react";
import { Footer } from "@/components/ui/footer";

const texts = [
  "Entraide !",
  "Bonne humeur !",
  "Partage !",
  "Amélioration continue !",
  "Bagarre !!",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <h1 className=" text-green-700 text-2xl font-bold mt-5 ml-30">
        Qui sommes-nous
      </h1>
      <div className="flex flex-row items-center justify-start px-4 ">
        <Image src={ImageRegroupePPP} alt="logosPPP" className="w-100 m-5" />
        <div className="flex flex-wrap items-center justify-start px-4 ">
          <div className="flex flex-row text-green-500 text-2xl">
            <h2 className="text-green-500 text-2xl mb-5">
              Nos philosophies sur Dofus ?{" "}
            </h2>
            <div className="ml-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {texts[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-gray-500">
            Bienvenue sur <strong> PPP – Fais tourner </strong>, un site
            communautaire né de la guilde White Widow et de son alliance. Ici,
            on va au-delà des simples combats pour créer un espace d’entraide,
            de partage et de bonne humeur, tout en profitant pleinement de Dofus
            sans pression.
            <br />
            <br />
            Notre mission ? Rassembler les joueurs, créateurs et passionnés
            autour d’un univers collaboratif. Tutoriels, guides, recrutement,
            actualités — chacun peut y participer à sa manière, dans une
            ambiance détendue mais engagée.
            <br />
            <br /> Rejoignez-nous et vivez Dofus autrement !
          </p>
        </div>
      </div>
      <div className="bg-green-300 flex flex-col justify-center">
        <div className=" flex flex-row justify-center">
          <h2 className="text-green-700 text-2xl font-bold mt-5">
            {" "}
            Voicie quelques tutoriels{" "}
          </h2>
        </div>
        <div className="flex flex-row justify-center">
          <CardTuto
            title="Alliance contre Alliance"
            description="le Tuto Ava est triées en plusieurs chapitres : <br/><br/> 
              I. Déclenchement de l’AvA 
              II. Objectifs et déroulement de l’AvA<br/> 
              III. Les rôles<br/> 
              IV. Répartition des pépites et recyclage<br/> 
              V. Les prismes<br/> 
              VI. Les bonnes pratiques en AvA <br/>"
            redacteur="Azessora"
            dateCreation="27/01/2025"
            dateUpdate="10/03/2025"
            link="/communaute"
          />
          <CardTuto
            title="Les percepteurs"
            description="Ce guide sera divisé en quatre parties, vous pouvez lire directement celles qui vous intéressent le plus : <br/><br/>
              I. Qu'est-ce qu'un percepteur et à quoi ça sert ?<br/>
              II. Comment poser et récolter un percepteur ?<br/>
              III. Comment et pourquoi attaquer un percepteur ?<br/>
              IV. Un percepteur se fait attaquer : comment le défendre ?<br/>"
            redacteur="Azessora"
            dateCreation="19/01/2025"
            dateUpdate="19/01/2025 22:24"
            link="/communaute"
          />
          <CardTuto
            title="Guide pvp"
            description="Ce guide est là pour vous apporter des bases en PvP et particulièrement en attaque et défense de percepteur. Il sera découpé de la façon suivante : <br/><br/>
              I. Principes de base en PvP multijoueur<br/>
              II. Quelques chaînes Youtube intéressantes pour approfondir<br/>
              III. Les possibilités de chaque classe (à venir)<br/>"
            redacteur="Azessora"
            dateCreation="02/04/2025"
            dateUpdate="02/04/2025"
            link="/communaute"
          />
        </div>
        <div className="flex flex-row justify-center mt-3 mr-2 mb-5">
          <button className="relative flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold overflow-hidden rounded-2xl group">
            <span className="absolute inset-0 bg-yellow-500 w-0 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
            {/* Contenu au-dessus */}
            <span className="flex items-center gap-2 relative z-10">
              Voire plus de tutoriels !
            </span>
          </button>
        </div>
      </div>
      <div>
      <div>
          <h1 className=" text-green-700 text-2xl font-bold mt-5 ml-30 mb-5">
            Quelques actus sur dofus Actuellement
          </h1>
          <div className="flex flex-row items-start px-4">
            <Image
              src={logoDofus}
              alt="logosPPP"
              className="flex w-50 m-5 rounded-xl"
            />
            <div className="flex flex-wrap items-center justify-start px-4 ">
              <div className="flex flex-row text-green-500 ">
                <h2 className="text-green-500 mb-5">
                  <strong className="text-2xl">Dérnier devblog sortie</strong> 16/04/2025 - 15h00{" "}
                </h2>
              </div>
              <p className="text-gray-500">
                <strong>
                  Voyage au centre du Tumulte : les Maîtres du jeu, le roleplay
                  et les animations !
                </strong>
                <br />
                <br />
                <strong>Qu'est-ce que c'est un Maître du Jeu ?</strong>
                <br />
                Sur DOFUS, des joueurs et joueuses Volontaires occupent une
                fonction très spéciale (et moins connue que la fonction de
                Modérateur ou Modératrice) : c’est nous, les Maîtres du Jeu !
                Nous ne travaillons pas chez Ankama, donc nous ne pouvons pas
                résoudre les problèmes du jeu et nous ne sommes pas de la
                Modération, ce qui fait que nous ne sommes pas en mesure d'agir
                non plus contre les bots et les signalements. Et comme nous
                sommes l’Équipe d’Animation francophone, nous ne pouvons pas
                animer dans une autre langue que le français. Notre rôle est
                finalement assez simple même s’il peut effrayer au premier abord
                : produire et encourager le jeu de rôle (roleplay) en jeu,
                auprès de vous. Mais pour quelle raison, nous direz-vous ? Votre
                plaisir et votre amusement en jeu, et notre plaisir de vous
                raconter de belles histoires pour que nous vivions ensemble des
                moments uniques ! Un Maître du Jeu est là avant tout pour
                produire des animations en jeu, de susciter des moments de jeu
                de rôle (quand on s’y attend le moins) et de parfois organiser
                des animations qui se passent sur le Forum Officiel. Sur DOFUS,
                on nous reconnaît assez facilement : entre notre pseudonyme en «
                M-J », notre toge colorée et notre titre en jeu, le doute n’est
                plus permis !
                <Image src={actusdodo} alt="logosPPP" className="w-200 m-5" />
                <strong>Les évènements (ou les animations) sur DOFUS </strong>
                <br />
                La fonction principale d’un MJ est donc de proposer des
                animations en jeu. Mais une animation, qu’est-ce que c’est
                exactement ? Nous pourrions la définir comme une aventure
                scénarisée qui place votre personnage au cœur d’une histoire
                vivante de votre jeu préféré ! Les animations sont variées parce
                que la diversité chasse l’ennui et que le Tumulte casse la
                monotonie ! Nos animations racontent toujours une histoire :
                qu’elles soient longues, rapides, pour un grand ou un petit
                public, elles ont toujours en commun le fait de mettre en scène
                le Monde des Douze. Une animation peut prendre la forme d’une
                histoire racontée avec votre participation, mais aussi celle
                d’une énigme pour trouver une destination, trouver des
                citwouilles en jeu pendant Halouine et parfois des projets de
                plus grande envergure. Notre principal objectif est donc de
                vivre avec vous de belles aventures. En tant que Maîtres du Jeu,
                nous animions jusqu’à présent sur les serveurs classiques
                (Draconiros, Hell Mina, Imagiro, Orukam, Tylezia), mais nous
                avons le tumultueux plaisir de vous annoncer notre arrivée
                imminente sur les serveurs pionniers (Brial, Dakal, Kourial,
                Mikhal, Rafal, Salar) ! Si nous animons pour vous raconter de
                belles histoires et vous faire vivre une expérience qui sort de
                l’ordinaire, nous aimons aussi vous faire plaisir. Voilà
                pourquoi à la fin de chaque animation, vous recevez une
                récompense allant du petit personnage suiveur à des Sharivatons
                : une monnaie exclusive que vous pouvez échanger auprès du
                Marchand et de Plume au sous-sol du manoir Lhambadda d’Astrub,
                en [1,-20].
                <Image src={actusdodo2} alt="logosPPP" className="w-200 m-5" />
                <strong>Le jeu de rôle (ou roleplay ou RP)</strong>
                <br />
                <br /> Le jeu de rôle, ou roleplay, peut paraître effrayant de
                prime abord. Mais au final, le roleplay ce n’est jamais que
                réagir et parler comme si vous étiez votre personnage. Pour
                rendre vos interactions plus vivantes, il existe de nombreuses
                techniques (et d’autres informations que vous trouverez ici) !
                N’ayez jamais peur de vous prendre au jeu si vous souhaitez
                essayer. Vous verrez qu'il s’agit souvent du début de beaux
                souvenirs ! huh <br />
                <br />
                <strong>Conseil des Sadeurs et des Sadrices</strong>
                <br />
                <br /> Les joueurs et joueuses rôlistes qui souhaitent proposer
                à leur tour des animations se regroupent dans une assemblée
                nommée le Conseil des Sadeurs et des Sadrices. Vous pouvez
                retrouver plus d’informations à ce sujet : ici ! <br />
                <br />
                <strong>Informations utiles</strong>
                <br />
                <br /> Ok, vous devez vous dire que c’est bien beau tout cela,
                mais qu’au final et concrètement, comment est-ce qu’on peut en
                profiter ? Voici donc quelques liens et informations qui
                pourront vous être utiles : Animations des Maîtres du Jeu :
                catégorie du Forum où nous postons nos annonces d’animations
                ainsi que nos comptes-rendus. Animations des Sadeurs et des
                Sadrices : catégorie qui contient cette fois les annonces des
                animations organisées par les joueurs et joueuses. Compte X :
                anciennement Twitter où nous faisons la publicité de nos
                animations ! Discord des Rôlistes Douziens : serveur Discord
                géré par des membres du Conseil des Sadeurs et des Sadrices,
                nous sommes également dessus pour répondre à vos questions et
                vous aider si vous souhaitez organiser une animation à votre
                tour ! Nous vous souhaitons de tumultueuses aventures à venir à
                nos côtés, <br />
                <br />
                L'Équipe d'Animation francophone de DOFUS
                <br />
                <br />
                Sources :{" "}
                <strong>
                  <a href="https://www.dofus.com/fr/mmorpg/actualites/devblog/billets/1762590-voyage-centre-tumulte-maitres-jeu-roleplay-animations">
                    l'article
                    "voyage-centre-tumulte-maitres-jeu-roleplay-animations" sur
                    dofus.fr
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
