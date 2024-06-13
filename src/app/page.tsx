'use client';

import Image from "next/image";
import styles from "./page.module.scss";
import originalStyles from "./page.module.css";
import React from "react";
import AnimalModal from "./AnimalModal";

export interface animalEntry {
  names: string,
  lastName: string,
  birthDate: string,
  species: string,
  profilePicture?: File
}

export default function Home() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalAppearing, setModalAppearing] = React.useState(false);

  function persistAnimal(formData: animalEntry) {
    console.log('Animal persisted!');

    var newEntry = {
      names: formData['names'],
      lastName: formData['lastName'],
      birthDate: formData['birthDate'],
      species: formData['species'],
      profilePicture: formData['profilePicture'] ? URL.createObjectURL(formData['profilePicture']) : null
    }
    var previousAnimals = JSON.parse(localStorage.getItem("savedAnimals") || '');

    if (previousAnimals) {
      previousAnimals.push(newEntry);
      localStorage.setItem('savedAnimals', JSON.stringify(previousAnimals));
    } else {
      localStorage.setItem('savedAnimals', JSON.stringify([newEntry]));
    }
    console.log('saved animals length: ' + JSON.parse(localStorage.getItem("savedAnimals") || '').length);
  }

  function handleAddAnimal() {
    setOpenModal(true);

    setTimeout(() => {
      setModalAppearing(true);
    }, 100);
  }

  return (
    <main className={originalStyles.main}>
      <div className={styles.home_body}>
        <Image src="/assets/mypets_icon.svg" width={96} height={96} alt="My Pets icon"></Image>
        <div className={styles.home_body_title}>
          Welcome to MyPets.
        </div>
        <div className={styles.home_body_description}>
          MyPets is the ultimate platform for managing data from the animals you care about. From dogs and cats, to even the most unique reptiles, birds or amphibians.
        </div>
        <button className={`${styles.home_body_petButton} ${styles.m_clickable_btn}`} onClick={handleAddAnimal}>
          <div className={styles.home_body_petButton_text}>
            Add your first animal
          </div>
          <Image className={styles.home_body_petButton_icon} src="/assets/arrow_circle_right.svg" width={20} height={20} alt="next arrow"></Image>
        </button>
        <AnimalModal openModal={openModal} setOpenModal={setOpenModal} modalAppearing={modalAppearing} setModalAppearing={setModalAppearing} persistAnimal={persistAnimal}>
        </AnimalModal>
      </div>
    </main>
  );
}
