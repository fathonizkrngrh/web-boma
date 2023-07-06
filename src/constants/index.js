import {
  basket,
  fist,
  shuttlecock,
  volley,
  soccer,
  wahdini,
  jodi,
  serli,
  jessi,
  caca,
  gustin,
} from "../assets";

export const bidangs = [
  {
    id: "bidang-1",
    content: "Bertempat di lapangan UPI Cibiru pada hari Selasa dan Kamis",
    name: "Basket",
    img: basket,
  },
  {
    id: "bidang-2",
    content: "Bertempat di lapangan UPI Cibiru pada hari Selasa dan Jum'at",
    name: "Tarung Derajat",
    img: fist,
  },
  {
    id: "bidang-3",
    content: "Bertempat di Gelanggang Olahraga pada hari Selasa dan Jum'at",
    name: "Badminton",
    img: shuttlecock,
  },
  {
    id: "bidang-4",
    content: "Bertempat di lapangan UPI Cibiru pada hari Senin dan Jum'at",
    name: "Voli",
    img: volley,
  },
  {
    id: "bidang-5",
    content: "Bertempat di lapangan UPI Cibiru pada hari Senin dan Rabu",
    name: "Futsal",
    img: soccer,
  },
];

export const pengurus = [
  {
    jabatan: "Ketua dan Wakil",
    anggota: [
      {
        nama: "Wahdini",
        jabatan: "Ketua",
        prodi: "PGSD 20",
        img: wahdini,
      },
      {
        nama: "Jodi",
        jabatan: "Wakil Ketua",
        prodi: "RPL 21",
        img: jodi,
      },
    ],
  },
  {
    jabatan: "Sekretaris",
    anggota: [
      {
        nama: "Serli",
        jabatan: "Sekretaris 1",
        prodi: "PGSD 21",
        img: serli,
      },
      {
        nama: "Jessica",
        jabatan: "Sekretaris 2",
        prodi: "PGSD 20",
        img: jessi,
      },
    ],
  },
  {
    jabatan: "Bendahara",
    anggota: [
      {
        nama: "Caca",
        jabatan: "Bendahara 1",
        prodi: "PGSD 20",
        img: caca,
      },
      {
        nama: "Gustin",
        jabatan: "Bendahara 2",
        prodi: "PGSD 21",
        img: gustin,
      },
    ],
  },
];
