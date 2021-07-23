import {FC} from "react";
import "./infoBox.scss";

type Props = {
  title: string
}

const InfoBox:FC<Props> = ({title}) => {
  return (
    <section className="info-box">
      {title}
    </section>
  )
}

export {InfoBox};