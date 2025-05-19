import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center max-w-3xl">
      <Image
        src="/images/bertug.jpg"
        alt="Bertuğ Taş"
        width={160}
        height={160}
        className="rounded-full mx-auto mb-6"
      />
      <h1 className="text-4xl font-semibold mb-4">Bertuğ Taş</h1>
      <p className="text-lg text-gray-500">
        Yazılım geliştirici, veri analisti ve teknoloji tutkunu.
      </p>
    </section>
  );
}