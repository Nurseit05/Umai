import Image from 'next/image';
import s from './cardText.module.scss';

export interface UpDates {
  title: string;
  text: string;
  action_text: string;
  action_path: void;
  created_at: string;
}

const CardText = ({ data }: { data: UpDates }) => {
    const upDates = data;

    const createdAtDate = new Date(upDates?.created_at);
    const formattedDate = `${String(createdAtDate.getDate()).padStart(2, '0')}.${String(createdAtDate.getMonth() + 1).padStart(2, '0')}.${createdAtDate.getFullYear()}`;

    return (
        <section className={s.containerPadding}>
            <div className={s.wrapperText}>
                <p>{upDates?.title}</p>
                <button className={s.wrapperButton}>
                <span>{upDates?.action_text}</span>
                <Image src='/icons/rightLineYellow.svg' alt=''
                    width={24} height={24}
                />
                </button>
            </div>
            <div className={s.text}>
                <p>
                {upDates?.text}
                </p>
                <span>{formattedDate}</span>
            </div>
        </section>
  );
};

export default CardText;
