import React, { useState } from "react";
import { Item } from "@/types/Item";
import { BiTrash } from "react-icons/bi";

interface Props {
  item: Item;
  task: (task: Item) => void;
}

export default function ListItem({ item, task }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    const newItem = item;
    newItem.done = !newItem.done;
    item = newItem;
  };

  const handleDeleteButton = () => {
    task(item);
  };

  return (
    <div className="flex w-full bg-input-bg-color p-2 rounded-md mb-4 items-center">
      <section className=" flex items-center w-full">
        <input
          type="checkbox"
          className={`w-6 h-6 mr-1 `}
          id={`${item.id}`}
          checked={isChecked}
          onChange={handleCheck}
        />
        <label
          className={`text-gray-100 line-t ${
            isChecked ? "line-through" : "initial"
          }`}
          htmlFor={`${item.id}`}
        >
          {item.name} {item.id}
        </label>
      </section>

      <BiTrash
        className={`w-6 h-6 cursor-pointer `}
        onClick={handleDeleteButton}
      />
    </div>
  );
}
