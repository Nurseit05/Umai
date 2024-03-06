import Cards from "./Cards";
import CardMap from "./CardMap";
import BannerCard from "./BannerCard";

import s from './main.module.scss'
import Slider from "@/components/Slider";
import FixedPhone from "../../components/FixedPhone";

export default function Main() {

    return (
        <main className={s.main}>
            <Slider/>
            <main className={s.wrapper}>
                <Cards/>
                <BannerCard/>
                <CardMap/>
                <FixedPhone/>
            </main>
        </main>
    )
}