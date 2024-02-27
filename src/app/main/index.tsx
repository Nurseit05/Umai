'use client'

import Cards from "./Cards";
import Slide from "./Slide";
import CardMap from "./CardMap";
import BannerCard from "./BannerCard";

import s from './main.module.scss'
import SliderMobile from "@/components/Slider/SliderMobile";
import { useMediaQuery } from "@/hook/useMediaQuery";

export default function Main() {

    const sizeDesktop = useMediaQuery()

    console.log(sizeDesktop)

    return (
        <main className={s.main}>
            
            {sizeDesktop && <Slide/> }
            {/* {sizeDesktop ? null : <SliderMobile/>} */}
            <main className={s.wrapper}>
                <Cards/>
                <BannerCard/>
                <CardMap/>
            </main>
        </main>
    )
}