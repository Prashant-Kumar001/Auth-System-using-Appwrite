"use client";

import { Button } from "@/components/ui/button";
import { Folder, File, Trash2, Share2 } from "lucide-react";

export default function DriveContent() {
  const folders = [
    { id: 1, name: "Projects", icon: <Folder className="w-6 h-6 text-blue-500" /> },
    { id: 2, name: "Work", icon: <Folder className="w-6 h-6 text-yellow-500" /> },
    { id: 3, name: "Personal", icon: <Folder className="w-6 h-6 text-green-500" /> },
  ];

  const files = [
    { id: 1, name: "Resume.pdf", icon: <File className="w-6 h-6 text-red-500" /> },
    { id: 2, name: "Design.png", icon: <File className="w-6 h-6 text-purple-500" /> },
    { id: 3, name: "Notes.docx", icon: <File className="w-6 h-6 text-indigo-500" /> },
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="flex gap-4 mb-6">
        <Button variant={'outline'}>
          <Folder className="w-4 h-4" /> New Folder
        </Button>
        <Button variant={'outline'} >
          <File className="w-4 h-4" /> Upload File
        </Button>
      </div>

      <h2 className="text-lg font-semibold mb-3">Folders</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer"
          >
            {folder.icon}
            <span className="font-medium">{folder.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-3">Files</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer"
          >
            {file.icon}
            <span className="truncate">{file.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
