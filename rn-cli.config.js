import blacklist from 'metro-config/src/defaults/blacklist';

export const resolver = {
  blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
};
