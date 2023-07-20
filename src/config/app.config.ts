interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Service Representative'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Delivery Driver', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Black Squad',
  addOns: ['chat', 'notifications'],
};
