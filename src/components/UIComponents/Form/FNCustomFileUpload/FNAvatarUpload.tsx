import React, { useRef, useState } from "react";
import {  IonImg,  IonItem } from "@ionic/react";
import avatar from "../../../../assets/img/amyelsner.png"
import "./FNAvatarUpload.css"; // Add custom styling if needed
const AvatarUpload: React.FC = () => {
  
  const [preview, setPreview] = useState<string | undefined>(avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Create a preview URL for the selected file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div className="flex" onClick={handleFileClick}
    onDrop={handleFileDrop}
    onDragOver={handleDragOver}>
        {preview && (
        <div className="avatar-preview">
          <IonImg src={preview} alt="Avatar Preview" />
        </div>
      )}
      <IonItem lines="none" className="align-content-center avatar-item">
        <input
           hidden
           type="file"
           ref={fileInputRef}
           accept="image/*"
           onChange={handleFileChange}
        />
        <div className="padd">
        <i className="pi pi-plus-circle cursor-pointer pr-1 font-bold "></i><span>Upload Image</span>
        </div>
        
      </IonItem>

      

     
    </div>
  );
};

export default AvatarUpload;
