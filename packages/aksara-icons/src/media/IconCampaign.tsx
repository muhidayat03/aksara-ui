import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCampaign: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6171 3.07609C15.7384 3.02585 15.8684 3 15.9996 3C16.1309 3 16.2609 3.02585 16.3822 3.07609C16.5035 3.12632 16.6137 3.19995 16.7065 3.29278C16.7993 3.3856 16.8729 3.4958 16.9232 3.61708C16.9734 3.73837 16.9993 3.86836 16.9993 3.99963V20.0004C16.9984 20.265 16.8927 20.5184 16.7054 20.7052C16.518 20.892 16.2642 20.9969 15.9996 20.9969C15.7351 20.9969 15.4813 20.892 15.2939 20.7052C15.1065 20.5184 15.0008 20.265 15 20.0004V19.286L9.11334 17.1834L9.94861 19.683C9.99082 19.8077 10.008 19.9395 9.99915 20.0708C9.9903 20.2021 9.95561 20.3304 9.89707 20.4483C9.83852 20.5662 9.75728 20.6713 9.65799 20.7578C9.55871 20.8442 9.44333 20.9101 9.31849 20.9519C9.19366 20.9936 9.06181 21.0102 8.93051 21.0009C8.79922 20.9915 8.67107 20.9563 8.55341 20.8973C8.43575 20.8383 8.3309 20.7567 8.24488 20.657C8.15885 20.5574 8.09335 20.4418 8.05212 20.3168L6.7193 16.3284L5.8252 16.009C4.99834 15.7137 4.28303 15.1699 3.77725 14.4522C3.27148 13.7345 3 12.878 3 12C3 11.122 3.27148 10.2654 3.77725 9.54771C4.28303 8.83 4.99834 8.28624 5.8252 7.99091L15 4.71405V3.99963C15 3.86836 15.0259 3.73837 15.0761 3.61709C15.1263 3.49581 15.2 3.38561 15.2928 3.29278C15.3856 3.19996 15.4958 3.12633 15.6171 3.07609ZM20.4491 13.7266C20.0907 14.231 19.5843 14.6114 19 14.815V9.18494C19.5843 9.38858 20.0907 9.76898 20.4491 10.2734C20.8075 10.7778 21 11.3812 21 12C21 12.6187 20.8075 13.2221 20.4491 13.7266Z"
      fill={fill}
    />
  </svg>
);

IconCampaign.defaultProps = {
  ...iconDefaultProps,
};

export default IconCampaign;