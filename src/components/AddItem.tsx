import React, { useState } from "react";
interface Props {
  add: (taskname: string) => void;
}

export default function AddItem({ add }: Props) {
  const [newItem, setNewItem] = useState("");

  const handleAddButton = () => {
    if (newItem.length > 0) {
      add(newItem);
      setNewItem("");
    }
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      handleAddButton();
    }
  };
  return (
    <div className="my-6 mb-12 p-2 flex border border-gray-600 rounded-md text-xl">
      <button className="pr-1" onClick={handleAddButton}>
        ＋
      </button>
      <input
        className="text-white flex flex-1 bg-transparent outline-none "
        type="text"
        placeholder="Enter a new task"
        name="newitem"
        id="newitem"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
