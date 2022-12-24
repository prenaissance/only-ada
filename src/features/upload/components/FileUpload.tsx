import React, { useRef } from "react";

const FileUpload = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleClick = () => {
    fileInput?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    // handle the files here (e.g. upload to a server, preview the images, etc.)
    console.log(files);
  };

  return (
    <div
      className="relative w-64 h-64 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-200"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input ref={fileInput} className="hidden" type="file" multiple onChange={handleChange} />
      <div className="absolute rounded-md h-fit shadow-sm hover:brightness-90 bg-orange inset-0 flex items-center justify-center text-gray-600 p-2">
        <svg className="h-20 w-20 pr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="text-lg font-medium">Drag and drop files here</span>
      </div>
    </div>
  );
};

export default FileUpload;
