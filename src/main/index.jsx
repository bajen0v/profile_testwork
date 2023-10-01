import React, { useState } from 'react';
import SocialIcon from '../components/social-icons';
import CollectionCards from '../components/collection-cards';
import ActivityCards from '../components/activity-cards';
import theme from '../components/theme-settings';
import {
  IconCollection,
  IconActivity,
  IconVerify,
} from '../components/svg-icons';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import s from './styles.module.css';

const pathName = './images/Cover.jpg';
const widthCover = '1247px';

const socialIconWidth = '16px';
const socialIconHeight = '16px'
const socialIconColor = '#141416'; // black

const aboutPerson = [
  { 
    name: 'Total Sales', 
    amount: '86 ETH' },
  { 
    name: 'Followers', 
    amount: '12K' },
  {
    name: 'Followings',
    amount: '587',
  },
];

function Main() {
  const [follow, setFollow] = useState(true);
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlerBtnFollow = () => {
    alert('work');
    setFollow(!follow);
  };

  return (
    <div className={s.main_container}>
      <div className={s.main_cover}>
        <img src={pathName} alt='cover' width={widthCover} />
      </div>
      <div className={s.profile_container}>
        <div className={s.main_profile}>
          <div className={s.profile_info}>
            <span className={s.profile_photo}>
              <img src='/images/Photo.jpg' alt='imageUser' />
            </span>
            <span className={s.photo_verif}>
              <IconVerify />
            </span>
            <div className={s.profile_name}>
              <div className={s.name_container}>
                <h2>Harry K.</h2>
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
                  color='primary'
                  variant='contained'
                >
                  {follow ? 'Follow+' : 'Unfollow'}
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
              <SocialIcon fill={socialIconColor} width={socialIconWidth} height={socialIconHeight}/>
            </div>
          </div>
          <div className={s.profile_board}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  '& .MuiTabs-indicator': {
                    height: '1px',
                    background: 'black',
                  },
                }}
              >
                <TabList
                  sx={{
                    [`& .MuiTabs-flexContainer`]: {
                      '& .Mui-selected': { opacity: 1 },
                    },
                  }}
                  textColor='primary'
                  indicatorColor='primary'
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                  variant='fullWidth'
                >
                  <Tab
                    theme={theme}
                    color='primary'
                    sx={{ gap: '5px', fontSize: '16px', opacity: 0.5 }}
                    icon={<IconCollection fill='#141416' />}
                    iconPosition='start'
                    label='Collection'
                    value='1'
                  />

                  <Tab
                    theme={theme}
                    color='primary'
                    sx={{ gap: '5px', fontSize: '16px', opacity: 0.5 }}
                    icon={<IconActivity fill='#141416' />}
                    iconPosition='start'
                    label='Activity'
                    value='2'
                  />
                </TabList>
              </Box>
              <TabPanel value='1'>{<CollectionCards />}</TabPanel>
              <TabPanel value='2'>{<ActivityCards />}</TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
