"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Folder,
  PlusCircle,
  Trash2,
  FolderOpen,
  Star,
  StarOff,
  MoreVertical,
  Pencil,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function MyDrivePage() {
  const [folders, setFolders] = useState([
    { id: 1, name: "Projects", created: "Aug 25, 2025", starred: false },
    { id: 2, name: "Designs", created: "Aug 20, 2025", starred: true },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");


  const handleCreateFolder = () => {
    const newFolder = {
      id: Date.now(),
      name: `New Folder ${folders.length + 1}`,
      created: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      starred: false,
    };
    setFolders([newFolder, ...folders]); 
  };

  // 👉 Rename folder
  const handleRename = (id: number) => {
    setFolders(
      folders.map((f) =>
        f.id === id ? { ...f, name: newName || f.name } : f
      )
    );
    setEditingId(null);
    setNewName("");
  };

  
  const toggleStar = (id: number) => {
    setFolders(
      folders.map((f) =>
        f.id === id ? { ...f, starred: !f.starred } : f
      )
    );
  };

  const deleteFolder = (id: number) => {
    setFolders(folders.filter((f) => f.id !== id));
  };

  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Drive</h1>
        <Button onClick={handleCreateFolder}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Folder
        </Button>
      </div>

      {folders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
          <Folder className="w-12 h-12 mb-4 text-gray-400" />
          <p className="text-lg font-medium">No folders yet</p>
          <p className="text-sm">Click “Create Folder” to get started</p>
        </div>
      ) : (
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <Card
                key={folder.id}
                className="hover:shadow-md transition cursor-pointer"
              >
                <CardContent className="p-4 flex flex-col items-center relative">
                  <Folder className="w-10 h-10 text-blue-500 mb-2" />

                  {editingId === folder.id ? (
                    <div className="flex flex-col items-center gap-2 w-full">
                      <Input
                        autoFocus
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Folder name"
                        className="text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => handleRename(folder.id)}
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-medium truncate w-full text-center">
                        {folder.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Created {folder.created}
                      </p>
                    </>
                  )}

                  <button
                    onClick={() => toggleStar(folder.id)}
                    className="absolute top-2 left-2"
                  >
                    {folder.starred ? (
                      <Star className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <StarOff className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {/* More Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="absolute top-2 right-2 text-gray-500 hover:text-black">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => console.log("Open", folder.name)}
                      >
                        <FolderOpen className="w-4 h-4 mr-2" /> Open
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setEditingId(folder.id);
                          setNewName(folder.name);
                        }}
                      >
                        <Pencil className="w-4 h-4 mr-2" /> Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => deleteFolder(folder.id)}
                        className="text-red-500"
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
