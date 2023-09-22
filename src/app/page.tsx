"use client";
import React, { useState } from "react";
import { Item } from "@/types/Item";
import ListItem from "@/components/ListItem";
import AddItem from "@/components/AddItem";

export default function Home() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Go to the bakary", done: false },
    { id: 2, name: "Go to supermaket", done: true },
  ]);

  const handleAddNewItem = (taskname: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false,
    });
    setList(newList);
  };

  const deleteTask = (task: Item) => {
    const newList = [...list];
    newList.splice(task.id - 1, 1);
    setList(newList);
  };

  return (
    <main className="container mx-auto  flex min-h-screen flex-col items-center  p-10 bg-navy-blue">
      <h1 className=" text-6xl font-bold border-2 border-transparent border-b-gray-500 w-full p-2 text-center  font-mono">
        Todo List
      </h1>

      <section className="w-full m-2">
        <AddItem add={handleAddNewItem} />

        {list.map((item, index) => (
          <ListItem key={index} task={deleteTask} item={item} />
        ))}
      </section>
    </main>
  );
}
