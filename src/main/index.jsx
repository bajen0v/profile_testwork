import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import SocialIcon from "../components/social-icons";
import CollectionCards from "../components/collection-cards";
import ActivityCards from "../components/activity-cards";
import { theme } from "../components/theme-settings-mui/index";
import {
  IconCollection,
  IconActivity,
  IconVerify,
} from "../components/svg-icons";
import {
  colorBlack,
  socialIconHeightMain,
  socialIconWidthMain,
  pathNamePictureMain,
  widthPictureMain,
} from "../components/constants";

import s from "./styles.module.css";

function Main() {
  const [follow, setFollow] = useState(true);
  const [value, setValue] = useState("1");
  const aboutPerson = [
    {
      name: "Total Sales",
      amount: "86 ETH",
    },
    {
      name: "Followers",
      amount: "12K",
    },
    {
      name: "Followings",
      amount: "587",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlerBtnFollow = () => {
    alert("work");
    setFollow(!follow);
  };

  return (
    <main className={s.main_container}>
      <img
        className={s.main_image}
        src={pathNamePictureMain}
        alt="imageMain"
        width={widthPictureMain}
      />
      <div className={s.profile_container}>
        <section className={s.profile_info}>
          <img
            className={s.profile_photo}
            src="/images/Photo.jpg"
            alt="imageUser"
          />
          <span className={s.photo_verif}>
            <IconVerify />
          </span>
          <div className={s.profile_name}>
            <div className={s.name_container}>
              <h1>Harry K.</h1>
              <p>@Harryknft</p>
            </div>

            <ThemeProvider theme={theme}>
              <Button
                onClick={handlerBtnFollow}
                sx={{
                  pt: 10.1,
                  pb: 10.1,
                  width: 121,
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 2.8,
                }}
                color="primary"
                variant="contained"
              >
                {follow ? "Follow+" : "Unfollow"}
              </Button>
            </ThemeProvider>
          </div>
          <hr />

          <div className={s.bio_container}>
            <div className={s.about_profile}>
              {aboutPerson.map((el, index) => {
                return (
                  <div key={index} className={s.profile}>
                    <h2>{el.amount}</h2>
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>

            <div className={s.profile_bio}>
              <h2>Bio</h2>
              <p>
                the artist who transforms the intangible into priceless assets
                with their incredible NFT creations. From stunning visuals to
                mind-bending concepts,
              </p>
              <hr />
            </div>
          </div>
          <div className={s.profile_social}>
            <SocialIcon
              fill={colorBlack}
              width={socialIconWidthMain}
              height={socialIconHeightMain}
            />
          </div>
        </section>

        <section className={s.profile_board}>
          <TabContext value={value}>
            <Box
              sx={{
                margin: "0 24px",
                borderBottom: 1,
                borderColor: "divider",
                "& .MuiTabs-indicator": {
                  height: "1px",
                  background: "black",
                },
              }}
            >
              <TabList
                sx={{
                  [`& .MuiTabs-flexContainer`]: {
                    "& .Mui-selected": { opacity: 1 },
                  },
                }}
                textColor="primary"
                indicatorColor="primary"
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
              >
                <Tab
                  theme={theme}
                  color="primary"
                  sx={{ gap: "5px", fontSize: "16px", opacity: 0.5 }}
                  icon={<IconCollection fill="#141416" />}
                  iconPosition="start"
                  label="Collection"
                  value="1"
                />

                <Tab
                  theme={theme}
                  color="primary"
                  sx={{ gap: "5px", fontSize: "16px", opacity: 0.5 }}
                  icon={<IconActivity fill="#141416" />}
                  iconPosition="start"
                  label="Activity"
                  value="2"
                />
              </TabList>
            </Box>
            <TabPanel value="1">{<CollectionCards />}</TabPanel>
            <TabPanel value="2">{<ActivityCards />}</TabPanel>
          </TabContext>
        </section>
      </div>
    </main>
  );
}

export default Main;
