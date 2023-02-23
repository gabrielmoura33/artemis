import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { differenceInMonths, differenceInYears, parseISO } from "date-fns";
import React from "react";

const imageBGDefault =
  "https://artemis-tis-v-bkt.s3.amazonaws.com/background.png";
const Gender_Field_Map = {
  M: "Macho",
  F: "Femea",
  U: "Não informado",
};
export const AnimaisDisponiveis = ({ animals = [] }) => {
  function calculateDiferenceInYears(initialDate, finalDate = new Date()) {
    const initialDateFormatted = parseISO(initialDate) || new Date();
    const diff = differenceInYears(finalDate, initialDateFormatted);

    if (diff === 0) {
      const diffInMonths = +differenceInMonths(finalDate, initialDateFormatted);

      return diffInMonths + " Meses";
    }

    return diff + " Anos";
  }

  return (
    animals?.length > 0 && (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Animais disponíveis</h2>
            <div className="row" style={{ display: "flex", gap: 10 }}>
              {animals.map((animal) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      src={
                        animal.photos.length
                          ? animal.photos[0].url
                          : imageBGDefault
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <p> {animal?.name} </p>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p> Raça: {animal?.breed} </p>
                        <p>
                          Idade: {calculateDiferenceInYears(animal?.birth_date)}
                        </p>
                        <p> Gênero: {Gender_Field_Map[animal?.gender]} </p>
                        <p> Observações: {animal?.comments}</p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    )
  );
};
