import React from "react";
import { Media } from "@/pages/HomePage/types";
import styles from "./styles.module.scss";
import { TitleCard } from "@/pages/HomePage/components/PopularTitles/TitleCard";

type Props = {
    type: "Movies" | "Shows";
    list: Media[];
};
export const PopularTitles: React.FC<Props> = ({ list, type }) => {
    return (
        <div className={styles.container}>
            <span>
                {type === "Movies" ? "Popular Movies" : "Popular Shows"}
            </span>
            <div className={styles.list}>
                {list.map((title) => {
                    return <TitleCard key={title.id} title={title} />;
                })}
                {/* TODO: fix ugly horizontal scrool bar */}
            </div>
        </div>
    );
};
