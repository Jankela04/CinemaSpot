import { FC } from "react";
import { Media } from "@/pages/HomePage/types";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    title: Media;
};

export const TitleCard: FC<Props> = ({ title: media }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(`/${media.id}`);
            }}
            className={styles.title_card}
            style={{ backgroundImage: `url(${media.image})` }}
        >
            <div className={styles.title}>{media.title}</div>
        </div>
    );
};
