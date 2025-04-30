import CardTuto from "@/components/ui/cardTuto";
import CardTutoSimple from "@/components/ui/cardTutoSimple";
import { Footer } from "@/components/ui/footer";
import { HeaderTuto } from "@/components/ui/headerTuto";

export default function tuto() {
  return (
    <>
      <HeaderTuto />
      <div className=" h-auto m-10 rounded-2xl shadow-lg border">
        <div className="flex flex-row">
          <div>
            <h1 className="text-green-700 text-2xl font-bold mt-5 ml-10 mb-5">
              Nos tutoriels :
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <CardTutoSimple
                title="Alliance contre Alliance"
                redacteur="Azessora"
                dateCreation="27/01/2025"
                dateUpdate="10/03/2025"
                link="/communaute"
              />
              <CardTutoSimple
                title="Les percepteurs"
                redacteur="Azessora"
                dateCreation="19/01/2025"
                dateUpdate="19/01/2025 22:24"
                link="/communaute"
              />
              <CardTutoSimple
                title="Guide pvp"
                redacteur="Azessora"
                dateCreation="02/04/2025"
                dateUpdate="02/04/2025"
                link="/communaute"
              />
            </div>
            <div className="flex flex-row justify-center">
              <CardTutoSimple
                title="Alliance contre Alliance"
                redacteur="Azessora"
                dateCreation="27/01/2025"
                dateUpdate="10/03/2025"
                link="/communaute"
              />
              <CardTutoSimple
                title="Les percepteurs"
                redacteur="Azessora"
                dateCreation="19/01/2025"
                dateUpdate="19/01/2025 22:24"
                link="/communaute"
              />
              <CardTutoSimple
                title="Guide pvp"
                redacteur="Azessora"
                dateCreation="02/04/2025"
                dateUpdate="02/04/2025"
                link="/communaute"
              />
            </div>
            <div className="flex flex-row justify-center">
              <CardTutoSimple
                title="Alliance contre Alliance"
                redacteur="Azessora"
                dateCreation="27/01/2025"
                dateUpdate="10/03/2025"
                link="/communaute"
              />
              <CardTutoSimple
                title="Les percepteurs"
                redacteur="Azessora"
                dateCreation="19/01/2025"
                dateUpdate="19/01/2025 22:24"
                link="/communaute"
              />
              <CardTutoSimple
                title="Guide pvp"
                redacteur="Azessora"
                dateCreation="02/04/2025"
                dateUpdate="02/04/2025"
                link="/communaute"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
