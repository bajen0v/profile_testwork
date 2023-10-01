import { SvgIcon } from "@mui/material";

export function IconCollection({ fill }) {
  return (
    <SvgIcon sx={{ fontSize: "1.06rem" }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.3127 9.45684C19.3127 10.2645 20.0061 10.9217 20.8583 10.9217C21.2881 10.9217 21.6368 11.2523 21.6368 11.6596V14.3168C21.6368 16.5638 19.7082 18.3917 17.3374 18.3917H5.17724C2.80645 18.3917 0.876801 16.5638 0.876801 14.3168V11.6596C0.876801 11.2523 1.22557 10.9217 1.6553 10.9217C2.50854 10.9217 3.20192 10.2645 3.20192 9.45684C3.20192 8.66981 2.53657 8.07756 1.6553 8.07756C1.44874 8.07756 1.25152 7.99984 1.10516 7.86112C0.958803 7.72241 0.876801 7.5345 0.876801 7.33971L0.878877 4.5959C0.878877 2.3489 2.80748 0.52002 5.17828 0.52002H17.3354C19.7062 0.52002 21.6358 2.3489 21.6358 4.5959L21.6368 7.25412C21.6368 7.44891 21.5548 7.6378 21.4095 7.77553C21.2632 7.91425 21.0659 7.99197 20.8583 7.99197C20.0061 7.99197 19.3127 8.64915 19.3127 9.45684ZM13.5944 10.0995L14.8182 8.97007C15.031 8.77528 15.1047 8.48801 15.0123 8.22239C14.921 7.95676 14.6822 7.76787 14.3937 7.7295L12.7028 7.49536L11.9461 6.04327C11.8163 5.79339 11.5527 5.63795 11.2589 5.63696H11.2568C10.9641 5.63696 10.7005 5.79241 10.5686 6.04229L9.81193 7.49536L8.12414 7.72852C7.83246 7.76787 7.59372 7.95676 7.50134 8.22239C7.40999 8.48801 7.48369 8.77528 7.69544 8.97007L8.91925 10.0995L8.63068 11.6962C8.58086 11.9716 8.69815 12.2451 8.93689 12.4094C9.07183 12.5009 9.22857 12.5481 9.38739 12.5481C9.50883 12.5481 9.63132 12.5196 9.74342 12.4635L11.2568 11.71L12.7671 12.4616C13.0287 12.5944 13.3391 12.5737 13.5768 12.4084C13.8165 12.2451 13.9338 11.9716 13.884 11.6962L13.5944 10.0995Z"
          fill={fill}
          // "#141416"
        />
      </svg>
    </SvgIcon>
  );
}
export function IconActivity({ fill }) {
  return (
    <SvgIcon sx={{ fontSize: "1.06rem" }}>
      <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.716637 9.45628C0.716637 4.47387 4.7513 0.430176 9.74274 0.430176C14.7251 0.430176 18.7688 4.47387 18.7688 9.45628C18.7688 14.4477 14.7251 18.4824 9.74274 18.4824C4.7513 18.4824 0.716637 14.4477 0.716637 9.45628ZM11.7556 11.1078L13.2178 6.48648C13.3171 6.17056 13.0283 5.8727 12.7123 5.97199L8.09098 7.41617C7.90143 7.47935 7.74799 7.62377 7.69383 7.81331L6.24965 12.4437C6.15037 12.7506 6.44823 13.0485 6.75512 12.9492L11.3584 11.505C11.548 11.4508 11.7014 11.2974 11.7556 11.1078Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
}
export function IconAllChains() {
  return (
    <SvgIcon sx={{ fontSize: "1.06rem" }}>
      <svg
        // height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0487 17.2409C20.0487 16.8797 19.9223 16.5727 19.6695 16.3199L16.8524 13.5029C16.5996 13.2501 16.2926 13.1237 15.9315 13.1237C15.5523 13.1237 15.2272 13.2681 14.9563 13.5571C14.9834 13.5842 15.0692 13.6677 15.2137 13.8076C15.3581 13.9476 15.4552 14.0446 15.5049 14.0988C15.5545 14.153 15.6222 14.2388 15.708 14.3561C15.7938 14.4735 15.8525 14.5886 15.8841 14.7015C15.9157 14.8144 15.9315 14.9385 15.9315 15.0739C15.9315 15.4351 15.8051 15.7421 15.5523 15.9949C15.2994 16.2477 14.9925 16.3741 14.6313 16.3741C14.4959 16.3741 14.3717 16.3583 14.2589 16.3267C14.146 16.2951 14.0309 16.2364 13.9135 16.1506C13.7961 16.0649 13.7104 15.9971 13.6562 15.9475C13.602 15.8978 13.5049 15.8008 13.365 15.6563C13.225 15.5118 13.1415 15.4261 13.1144 15.399C12.8165 15.6789 12.6675 16.0084 12.6675 16.3876C12.6675 16.7488 12.7939 17.0558 13.0467 17.3086L15.8367 20.1121C16.0805 20.3559 16.3874 20.4778 16.7576 20.4778C17.1188 20.4778 17.4258 20.3604 17.6786 20.1256L19.6695 18.1483C19.9223 17.8955 20.0487 17.593 20.0487 17.2409ZM10.5276 7.69277C10.5276 7.33161 10.4012 7.02462 10.1484 6.77181L7.35849 3.96832C7.10568 3.71551 6.79869 3.58911 6.43753 3.58911C6.0854 3.58911 5.77842 3.711 5.51658 3.95478L3.5257 5.93212C3.27289 6.18493 3.14648 6.4874 3.14648 6.83953C3.14648 7.20069 3.27289 7.50767 3.5257 7.76048L6.34273 10.5775C6.58651 10.8213 6.8935 10.9432 7.26368 10.9432C7.6429 10.9432 7.96794 10.8032 8.23881 10.5233C8.21172 10.4963 8.12595 10.4127 7.98148 10.2728C7.83702 10.1328 7.73996 10.0358 7.6903 9.98161C7.64064 9.92743 7.57292 9.84166 7.48715 9.72428C7.40137 9.6069 7.34269 9.49178 7.31108 9.37892C7.27948 9.26606 7.26368 9.14191 7.26368 9.00648C7.26368 8.64532 7.39009 8.33834 7.6429 8.08553C7.89571 7.83271 8.20269 7.70631 8.56385 7.70631C8.69929 7.70631 8.82343 7.72211 8.9363 7.75371C9.04916 7.78531 9.16428 7.844 9.28165 7.92978C9.39903 8.01555 9.4848 8.08327 9.53898 8.13293C9.59315 8.18259 9.69021 8.27965 9.83016 8.42411C9.97011 8.56857 10.0536 8.65435 10.0807 8.68144C10.3787 8.40154 10.5276 8.07198 10.5276 7.69277ZM22.649 17.2409C22.649 18.3244 22.2653 19.2408 21.4978 19.9902L19.5069 21.9675C18.7575 22.7169 17.8411 23.0916 16.7576 23.0916C15.6651 23.0916 14.7442 22.7079 13.9948 21.9405L11.2048 19.137C10.4554 18.3876 10.0807 17.4711 10.0807 16.3876C10.0807 15.2771 10.478 14.3336 11.2725 13.5571L10.0807 12.3652C9.30422 13.1598 8.36521 13.5571 7.26368 13.5571C6.18021 13.5571 5.25926 13.1779 4.50082 12.4194L1.68379 9.60239C0.925359 8.84396 0.546143 7.923 0.546143 6.83953C0.546143 5.75606 0.929873 4.83962 1.69733 4.09021L3.68822 2.11287C4.43762 1.36347 5.35406 0.98877 6.43753 0.98877C7.53004 0.98877 8.45099 1.3725 9.20039 2.13996L11.9903 4.94345C12.7397 5.69285 13.1144 6.60929 13.1144 7.69277C13.1144 8.80333 12.7172 9.74685 11.9226 10.5233L13.1144 11.7152C13.8909 10.9206 14.8299 10.5233 15.9315 10.5233C17.0149 10.5233 17.9359 10.9026 18.6943 11.661L21.5114 14.478C22.2698 15.2365 22.649 16.1574 22.649 17.2409Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
}

export function IconVerify({ fz }) {
  return (
    <SvgIcon sx={{ fontSize: fz }}>
      <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.5" cy="14.5" r="14.5" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5005 2.11865C7.66271 2.11865 2.11932 7.66203 2.11932 14.4998C2.11932 21.3376 7.66271 26.881 14.5005 26.881C21.3383 26.881 26.8816 21.3376 26.8816 14.4998C26.8816 7.66203 21.3383 2.11865 14.5005 2.11865ZM19.8672 12.4063C19.966 12.2933 20.0412 12.1617 20.0884 12.0193C20.1356 11.8768 20.1539 11.7263 20.1421 11.5767C20.1303 11.4271 20.0887 11.2813 20.0198 11.148C19.9508 11.0147 19.8559 10.8966 19.7406 10.8005C19.6253 10.7044 19.4919 10.6323 19.3484 10.5886C19.2048 10.5448 19.054 10.5301 18.9047 10.5455C18.7554 10.5609 18.6107 10.606 18.479 10.6781C18.3474 10.7503 18.2316 10.848 18.1383 10.9656L13.2984 16.7723L10.794 14.2668C10.5817 14.0618 10.2974 13.9483 10.0023 13.9509C9.70718 13.9535 9.42487 14.0718 9.21618 14.2805C9.0075 14.4892 8.88912 14.7715 8.88656 15.0666C8.88399 15.3618 8.99744 15.6461 9.20247 15.8584L12.5792 19.235C12.6897 19.3456 12.8222 19.4318 12.9679 19.4884C13.1137 19.5449 13.2697 19.5704 13.4259 19.5633C13.5821 19.5562 13.7351 19.5167 13.8751 19.4472C14.0152 19.3776 14.1392 19.2797 14.2394 19.1596L19.8672 12.4063Z"
          fill="#0066D5"
        />
      </svg>
    </SvgIcon>
  );
}

export function IconBid() {
  return (
    <SvgIcon sx={{ fontSize: "1.06rem" }}>
      <svg viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.37755 0.487915L0.369476 7.22148L4.37755 9.62633L8.38563 7.22148L4.37755 0.487915ZM0.369476 8.0231L4.37755 13.6344L8.38563 8.0231L4.37755 10.4279L0.369476 8.0231Z"
          fill="#141416"
        />
      </svg>
    </SvgIcon>
  );
}

export function IconLogo({fill, width = '53px', height= '53px'}) {
  return (
    <SvgIcon sx={{ width:{width}, height:{height}}}>
      <svg
      width="53" 
      height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.927 36.1279C44.9836 36.1279 44.1224 35.377 42.9078 34.317C41.5607 33.1687 39.8824 31.7112 36.7245 31.7112C33.5445 31.7112 31.8882 33.1687 30.5411 34.317C29.3265 35.377 28.4432 36.1279 26.4999 36.1279C24.5786 36.1279 23.6953 35.377 22.4807 34.317C21.1336 33.1687 19.4553 31.7112 16.2974 31.7112C13.1174 31.7112 11.4391 33.1687 10.092 34.317C8.87741 35.377 8.01615 36.1279 6.07281 36.1279C5.1674 36.1279 4.41656 36.8787 4.41656 37.7841C4.41656 38.7116 5.1674 39.4404 6.07281 39.4404C9.25281 39.4404 10.909 38.0049 12.2561 36.8345C13.4707 35.7745 14.3541 35.0237 16.2974 35.0237C18.2407 35.0237 19.102 35.7745 20.3166 36.8345C21.6637 38.0049 23.342 39.4404 26.4999 39.4404C29.6799 39.4404 31.3582 38.0049 32.7053 36.8345C33.9199 35.7745 34.7812 35.0237 36.7245 35.0237C38.6457 35.0237 39.5291 35.7745 40.7437 36.8345C42.0908 38.0049 43.7691 39.4404 46.927 39.4404C47.8324 39.4404 48.5832 38.7116 48.5832 37.7841C48.5832 36.8787 47.8324 36.1279 46.927 36.1279Z"
          fill={fill}
        />
        <path
          d="M46.927 27.0307C44.9836 27.0307 44.1224 26.2578 42.9078 25.2198C41.5607 24.0494 39.8824 22.614 36.7245 22.614C33.5445 22.614 31.8882 24.0494 30.5411 25.2198C29.3265 26.2578 28.4432 27.0307 26.4999 27.0307C24.5786 27.0307 23.6953 26.2578 22.4807 25.2198C21.1336 24.0494 19.4553 22.614 16.2974 22.614C13.1174 22.614 11.4391 24.0494 10.092 25.2198C8.87741 26.2578 8.01615 27.0307 6.07281 27.0307C5.1674 27.0307 4.41656 27.7594 4.41656 28.6869C4.41656 29.5923 5.1674 30.3432 6.07281 30.3432C9.25281 30.3432 10.909 28.8857 12.2561 27.7153C13.4707 26.6773 14.3541 25.9265 16.2974 25.9265C18.2407 25.9265 19.102 26.6773 20.3166 27.7153C21.6637 28.8857 23.342 30.3432 26.4999 30.3432C29.6799 30.3432 31.3582 28.8857 32.7053 27.7153C33.9199 26.6773 34.7812 25.9265 36.7245 25.9265C38.6457 25.9265 39.5291 26.6773 40.7437 27.7153C42.0908 28.8857 43.7691 30.3432 46.927 30.3432C47.8324 30.3432 48.5832 29.5923 48.5832 28.6869C48.5832 27.7594 47.8324 27.0307 46.927 27.0307Z"
          fill={fill}
        />
        <path
          d="M6.07281 21.2885C9.25281 21.2885 10.909 19.831 12.2561 18.6827C13.4707 17.6227 14.3541 16.8718 16.2974 16.8718C18.2407 16.8718 19.102 17.6227 20.3166 18.6827C21.6637 19.831 23.342 21.2885 26.4999 21.2885C29.6799 21.2885 31.3582 19.831 32.7053 18.6827C33.9199 17.6227 34.7812 16.8718 36.7245 16.8718C38.6457 16.8718 39.5291 17.6227 40.7437 18.6827C42.0908 19.831 43.7691 21.2885 46.927 21.2885C47.8324 21.2885 48.5832 20.5377 48.5832 19.6322C48.5832 18.7047 47.8324 17.976 46.927 17.976C44.9836 17.976 44.1224 17.2252 42.9078 16.1652C41.5607 14.9947 39.8824 13.5593 36.7245 13.5593C33.5445 13.5593 31.8882 14.9947 30.5411 16.1652C29.3265 17.2252 28.4432 17.976 26.4999 17.976C24.5786 17.976 23.6953 17.2252 22.4807 16.1652C21.1336 14.9947 19.4553 13.5593 16.2974 13.5593C13.1174 13.5593 11.4391 14.9947 10.092 16.1652C8.87741 17.2252 8.01615 17.976 6.07281 17.976C5.1674 17.976 4.41656 18.7047 4.41656 19.6322C4.41656 20.5377 5.1674 21.2885 6.07281 21.2885Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
}