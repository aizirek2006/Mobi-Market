// Profile.js
import React, { useState } from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const DeleteConfirmation = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  text-align: center;
`;

const Profile = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("");

  const handleAvatarClick = () => {
    setShowDeleteConfirmation(false);
    // Открываем input для выбора файла
    inputRef.current.click();
  };

  const handleAvatarDoubleClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    setAvatarSrc("");
    setShowDeleteConfirmation(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputRef = React.createRef();

  return (
    <ProfileWrapper>
      <Avatar
        src={avatarSrc}
        alt="Аватар"
        onClick={handleAvatarClick}
        onDoubleClick={handleAvatarDoubleClick}
      />
      <DeleteConfirmation show={showDeleteConfirmation}>
        Уверены, что хотите удалить аватар?
        <button onClick={handleDeleteConfirm}>Да</button>
        <button onClick={handleDeleteCancel}>Нет</button>
      </DeleteConfirmation>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleFileChange}
      />
    </ProfileWrapper>
  );
};

export default Profile;
