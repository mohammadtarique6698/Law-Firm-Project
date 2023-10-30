import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ClientCard = ({
  avatar,
  name,
  profession,
  content,
  cardBackgroundColor,
}) => {
  return (
    <Card
  sx={{
    maxWidth: 300,
    backgroundColor: cardBackgroundColor,
    color: "var(--white-color)",
    padding: "1rem",
    textAlign: "left",
    border: "1px solid var(--secondary-color)",
  }}
  className={`client-card`}
>
      <CardMedia>
        <Avatar
          alt={`Avatar of ${name}`}
          sx={{ width: "5rem", height: "5rem" }}
        >
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            style={{ objectFit: "content" }}
          />
        </Avatar>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>{profession}</Typography>
        <Typography variant="body2" sx={{ opacity: "0.3", paddingTop: "1rem" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientCard;

// const Clientcard = () => {
//   // Define your avatars
//   const Avatars = ["../../asset/avatarForClient/av1.svg", "../../asset/avatarForClient/av2.svg", "../../asset/avatarForClient/av3.svg"];
//   const names = ["Jane Cooper", "Devon Lane", "Robert Fox"];
//   const profession = ["Ceo of Hunt", "Ceo of Hunt", "Ceo of Hunt"];
//   const content =
//     "Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia";

//   return (
//     <div>
//       {names.map((name, index) => (
//         <Card key={index} sx={{ maxWidth: 345 }}>
//           <CardMedia>
//             <Avatar alt={`Avatar of ${name}`} src={Avatars[index]} />
//           </CardMedia>

//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {name}
//             </Typography>
//             <Typography variant="h6" color="text.secondary">
//               {profession[index]}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {content}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };
// export default Clientcard;

// {/* {Avatars.length.map((i) => {
//         return (
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               {...Avatars.map((item) => {
//                 return <Avatar alt="Remy Sharp" src={item} />;
//               })}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {names.map((item) => {
//                   return <span>{item}</span>;
//                 })}
//               </Typography>
//               <Typography gutterBottom variant="h5" component="div">
//                 {profession.map((item) => {
//                   return <span>{item}</span>;
//                 })}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {content}
//               </Typography>
//             </CardContent>
//           </Card>
//         );
//       })} */}
