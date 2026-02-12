"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Button,
  Card,
  CardContent,
  Grow,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ValentineForm() {
  const [openCard, setOpenCard] = useState(false);
  const [response, setResponse] = useState("");

  const handleYes = () => {
    setResponse("yes");
  };

  const handleNo = () => {
    setResponse("no");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#fff",
          textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        Please Open Me 💌
      </Typography>

      {/* Message Icon */}
      <IconButton
        onClick={() => setOpenCard(true)}
        sx={{
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <MailIcon sx={{ fontSize: 130, color: "#fff" }} />
      </IconButton>

      {/* Valentine Card Dialog */}
      <Dialog
        open={openCard}
        onClose={() => setOpenCard(false)}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(255, 105, 180, 0.3)",
            backdropFilter: "blur(6px)",
          },
        }}
      >
        <Grow in={openCard}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
              borderRadius: "30px",
              padding: 4,
              textAlign: "center",
              minWidth: 350,
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent>
              <FavoriteIcon
                sx={{ fontSize: 60, color: "white", mb: 2 }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Will you be my Valentine? ❤️
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#ff4d6d",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#ffe6ea",
                    },
                  }}
                  onClick={handleYes}
                >
                  Yes 💖
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff4d6d",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#e63950",
                    },
                  }}
                  onClick={handleNo}
                >
                  No 😜
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grow>
      </Dialog>

      {/* Response Popup */}
      <Dialog
        open={response !== ""}
        onClose={() => setResponse("")}
        PaperProps={{
          sx: {
            borderRadius: "25px",
            background: "linear-gradient(135deg, #ffccd5, #ffc2d1)",
            padding: 3,
            textAlign: "center",
          },
        }}
      >
        <DialogContent>
          {response === "yes" ? (
            <Typography variant="h5" fontWeight="bold">
              Love u mutku ❤️😍
            </Typography>
          ) : (
            <Typography variant="h6" fontWeight="bold">
              Pitegi rehtli 😏 Yes pe click kr 💘
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
