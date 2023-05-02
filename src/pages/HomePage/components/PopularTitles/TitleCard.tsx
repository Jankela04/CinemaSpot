import {FC} from "react";
import {Media} from "@/pages/HomePage/types";

type Props = {
    title: Media
}

export const TitleCard:FC<Props> = ({title:media}) =>{
    return <div>{media.title}</div>
}