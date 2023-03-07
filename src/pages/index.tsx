import MainEffect from "@/components/mainEffect";
export default function Home() {
  const data = [
    { title: "Title 1", url: "https://loremflickr.com/300/400" },
    { title: "Title 2", url: "https://loremflickr.com/300/400" },
    { title: "Title 3", url: "https://loremflickr.com/300/400" },
    { title: "Title 4", url: "https://loremflickr.com/300/400" },
    { title: "Title 5", url: "https://loremflickr.com/300/400" },
    { title: "Title 6", url: "https://loremflickr.com/300/400" },
    { title: "Title 7", url: "https://loremflickr.com/300/400" },
  ];
  return (
    <h1 className="text-3xl font-bold underline">
      <MainEffect data={data} />
    </h1>
  );
}
