export interface Template {
  title: string;
  image: string;
  description: string;
  price: string;
}
const one: Template = {
  title: "Corte Clásico",
  image: "../../img/clasic.jpg",
  description:
    "Un corte atemporal que nunca pasa de moda. Perfecto para un look limpio y profesional. ¡Atrévete a probarlo!",
  price: "$200.00 MXN",
};

const two: Template = {
  title: "Desvanecido",
  image: "../../img/desvanecido.png",
  description:
    "El fade perfecto para un estilo moderno y fresco. Ideal para quienes buscan un toque de elegancia y tendencia.",
  price: "$250.00 MXN",
};

const three: Template = {
  title: "Pompadour",
  image: "../../img/pompadour.png",
  description:
    "Con volumen y estilo, el Pompadour es perfecto para quienes desean destacar con un look sofisticado.",
  price: "$300.00 MXN",
};

const four: Template = {
  title: "Undercut",
  image: "../../img/undercut.jpg",
  description:
    "Un corte audaz y versátil. El undercut combina bien con varios estilos y es ideal para un look contemporáneo.",
  price: "$270.00 MXN",
};

const five: Template = {
  title: "Buzz Cut",
  image: "../../img/BuzzCode.jpg",
  description:
    "Práctico y fácil de mantener, el Buzz Cut es perfecto para un look limpio y sin complicaciones. ¡Pruébalo hoy!",
  price: "$180.00 MXN",
};

const six: Template = {
  title: "Corte de Quiff",
  image: "../../img/quiff-haircut.jpg",
  description:
    "El Quiff ofrece un equilibrio perfecto entre volumen y estructura, ideal para un look elegante y con personalidad.",
  price: "$280.00 MXN",
};
export const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export const episodes = Object.values(bytitle);
