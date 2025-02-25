import { connectDB } from "@/db";

const pool = connectDB();

export async function fetchImageBackground() {
  await new Promise((res) => setTimeout(res, 3000));
  const data = await pool.query(`select * from "background-images"`);
  return data.rows;
}

export async function fetchMobileImageBackground() {
  const data = await pool.query(`select * from "mobile-backgroundImages"`);
  return data.rows;
}

export async function fetchHeaderIcons() {
  const data = await pool.query(`select * from "header-icons"`);
  return data.rows;
}

export async function fetchDigiIcon() {
  const data = await pool.query(`select * from "digi-icon"`);
  return data.rows;
}

export async function fetchOptionImages() {
  const data = await pool.query(`select * from "mobile-option"`);
  return data.rows;
}

export async function fetchImageBeauty() {
  await new Promise((res) => setTimeout(res, 8500));
  const data = await pool.query(`select * from "beauty-images"`);
  return data.rows;
}

export async function fetchFooterIcons() {
  const data = await pool.query(`select * from "footer-icons"`);
  return data.rows;
}

export async function fetchGuarantyIcons() {
  const data = await pool.query(`select * from "guaranty-icons"`);
  return data.rows;
}

export async function fetchWomenDiscuntImages() {
  const data = await pool.query(`select * from "women-discunt"`);
  return data.rows;
}

export async function fetchWomenCategory() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "women-category"`);
  return data.rows;
}

export async function fetchwomenBackgroundImages() {
  const data = await pool.query(`select * from "women-backgroundImages"`);
  return data.rows;
}

export async function fetchMenDiscuntImages() {
  const data = await pool.query(`select * from "men-discunt"`);
  return data.rows;
}

export async function fetchMenCategory() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "men-category"`);
  return data.rows;
}

export async function fetchMenBackgroundImages() {
  const data = await pool.query(`select * from "men-backgroundImages"`);
  return data.rows;
}

export async function fetchWomenClothesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-women-clothes"`);
  return data.rows;
}

export async function fetchWomenShoesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-women-shoes"`);
  return data.rows;
}

export async function fetchWomenAccessoriesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-women-accessories"`);
  return data.rows;
}

export async function fetchMenClothesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-men-clothes"`);
  return data.rows;
}

export async function fetchMenShoesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-men-shoes"`);
  return data.rows;
}

export async function fetchMenAccessoriesInfo() {
  await new Promise((res) => setTimeout(res, 8000));
  const data = await pool.query(`select * from "p-men-accessories"`);
  return data.rows;
}

export async function fetchUser(username, email) {
  await new Promise((res) => setTimeout(res, 2000));
  const data = await pool.query(
    `select * FROM users WHERE username='${username}' AND email='${email}'`
  );
  return data.rows;
}

export async function fetchAllProducts() {
  const wAccessories = await fetchWomenAccessoriesInfo();
  const wClothes = await fetchWomenClothesInfo();
  const wShoes = await fetchWomenShoesInfo();
  const mAcessories = await fetchMenAccessoriesInfo();
  const mClothes = await fetchMenClothesInfo();
  const mShoes = await fetchMenShoesInfo();
  const allProducts = wAccessories.concat(wClothes, wShoes, mAcessories, mClothes, mShoes)

  return allProducts
}