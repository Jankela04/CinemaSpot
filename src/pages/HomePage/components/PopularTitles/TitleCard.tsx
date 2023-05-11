import { FC } from "react";
import { Title } from "@/types";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    title: Title;
};

export const TitleCard: FC<Props> = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(`/${title.id}`);
            }}
            className={styles.title_card}
            style={{ backgroundImage: `url(${title.image})` }}
        >
            <div className={styles.title}>{title.title}</div>
        </div>
    );
};
