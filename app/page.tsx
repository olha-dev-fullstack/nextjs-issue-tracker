"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      {/* <Link href="/users">Users</Link> */}
      {/* <ProductCard /> */}
      <h1>Hello world</h1>
      <button className="btn btn-primary" onClick={() => setVisible(true)}>
        Show
      </button>
      {isVisible && <HeavyComponent />}
    </main>
  );
  // return (
  //   <main className="relative h-screen">
  //     {/* <Image src={house} alt="House" /> */}
  //     <Image
  //       src="https://ghiblicollection.com/cdn/shop/files/Totoro_PDP_Banner.png"
  //       alt="Totoro"
  //       fill
  //       className="object-cover"
  //       sizes="(max-width: 480) 100vw, (max-width: 768px) 50vw, 33vw"
  //       quality={100}
  //       priority
  //     />
  //   </main>
  // );
}
