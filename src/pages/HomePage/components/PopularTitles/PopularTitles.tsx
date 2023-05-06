import React, { useRef } from "react";
import { Media } from "@/pages/HomePage/types";
import styles from "./styles.module.scss";
import { TitleCard } from "@/pages/HomePage/components/PopularTitles/TitleCard";

type Props = {
    type: "Movies" | "Shows";
    list: Media[];
};
export const PopularTitles: React.FC<Props> = ({ list, type }) => {
    const listRef = useRef<HTMLDivElement>(null);

    const handleScrollButtonClick = (dir: "left" | "right") => {
        const SCROLL_AMOUNT = 700;
        if (listRef.current) {
            listRef.current.scrollBy({
                left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className={styles.container}>
            <span style={{ marginLeft: "1rem" }}>
                {type === "Movies" ? "Popular Movies" : "Popular Shows"}
            </span>
            <div className={styles.list_wrapper}>
                <ButtonLeft onClick={() => handleScrollButtonClick("left")} />
                <div className={styles.list} ref={listRef}>
                    {list.map((title) => {
                        return <TitleCard key={title.id} title={title} />;
                    })}
                </div>
                <ButtonRight onClick={() => handleScrollButtonClick("right")} />
            </div>
        </div>
    );
};

const ButtonLeft = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            className={`${styles.scroll_btn} ${styles.btn_left}`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-left"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
        </button>
    );
};

const ButtonRight = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            className={`${styles.scroll_btn} ${styles.btn_right}`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
        </button>
    );
};
