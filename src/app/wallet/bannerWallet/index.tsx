import { BannerTS } from '@/api/service/wallet_Page/walletType';
import Button from '@/components/Button';
import Image from 'next/image';

const BannerWallet = ({data}: {data: BannerTS}) => {

    const styleBg = {background: `url(${data?.background}) no-repeat center/cover`}

    return (
        <section style={styleBg} >
            <h1>{data?.title}</h1>
            <h2>{data?.text}</h2>

            <div>
                <p>{data?.download_text}</p>
                <Button>{data?.action_1_text}</Button>
                <Button>{data?.action_2_text}</Button>
                <Image
                    width={640}
                    height={420}
                    src={data?.image}
                    alt=''
                />
            </div>
        </section>
    );
};

export default BannerWallet;