import GridContainer from "@/components/GridContainer";
import MainContainer from "@/components/MainContainer";
import Sidemenu from "@/components/Sidemenu";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
      <MainContainer>
        <Sidemenu />
        <GridContainer>
          <Title />
          <div className="max-w-sm mx-auto py-24">
            {[...Array(20)].map((_, i) => (
              <p key={i} className="py-2">
                Scroll content {i}
              </p>
            ))}
          </div>
        </GridContainer>
      </MainContainer>
    </main>
  );
}
