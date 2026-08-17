import Image from "next/image";
import styles from "./page.module.css";
import Supplier from "@/components/pages/Supplier";
import Product from "@/components/pages/Product";

export default function Home() {
  return (
    <>
    {/* <Supplier></Supplier> */}
    <Product />
    </>
  );
}
