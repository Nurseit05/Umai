import Cards from "./Cards";
import Slide from "./Slide";
import CardMap from "./CardMap";
import BannerCard from "./BannerCard";

import s from './main.module.scss'

export default function Main() {
    return (
        <main className={s.main}>
            <Slide/>
            <main className={s.wrapper}>
                <Cards/>
                <BannerCard/>
                <CardMap/>
            </main>
        </main>
    )
}