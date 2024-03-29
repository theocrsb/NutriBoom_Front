import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="container-aboutus">
        <div className="photoHomme">{/* photo ajoutée dans le css */}</div>
        <p className="text-aboutus">
          NutriBoom est une application pour vous permettre de suivre au
          quotidien votre consommation calorique, ainsi que les exercices
          pratiqués et repas consommés au cours de la journée. Tout ceci dans le
          but de vous permettre un suivi optimal sur les 7 derniers jours, vous
          encourageant à vous challenger. Nous vous offrons également un rapide
          calculateur d’IMC. Inscrivez vous et embarquez dans l’aventure
          NutriBoom.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
