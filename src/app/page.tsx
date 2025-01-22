'use client';
import { addNumbers } from "@/actions/add";
import { useEffect, useState } from "react";
// import { addNumbers } from "@/actions/add";
// import TopicCreateForm from "@/components/topics/topic-create-form";
// import TopicList from "@/components/topics/topic-list";
// import { Divider } from "@nextui-org/react";

export default function Home() {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { result } = await addNumbers();
      setResult(result);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        {result !== null && <p>The result of 1 + 19 is: {result}</p>}
      </div>
      <div className="border shadow py-3 px-2">
        
      </div>
    </div>
  );
}