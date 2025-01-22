'use client';
import { addNumbers } from "@/actions/add";
import { getCurrentUser } from "@/actions/getSession";
import { useEffect, useState } from "react";
// import { addNumbers } from "@/actions/add";
// import TopicCreateForm from "@/components/topics/topic-create-form";
// import TopicList from "@/components/topics/topic-list";
// import { Divider } from "@nextui-org/react";

export default function Home() {
  const [result, setResult] = useState<number | null>(null);
  interface User {
    name: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { result } = await addNumbers();
      setResult(result);
    }
    fetchData();
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        {result !== null && <p>The result of 1 + 19 is: {result}</p>}
      </div>
      <div className="border shadow py-3 px-2">
      {user ? (
        <div>Welcome, {user.name}!</div>
      ) : (
        <div>Loading...</div>
      )}
        
      </div>
    </div>

    
  );
}


