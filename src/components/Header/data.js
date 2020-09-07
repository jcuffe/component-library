export const buildNavLinks = (baseUrl) => ({
  member: [
    { url: `${baseUrl}/events`, label: "Events", internal: true },
    { url: `${baseUrl}/about`, label: "About" },
    { url: "https://forum.hellorevel.com", label: "Forums" },
    { url: `${baseUrl}/referral`, label: "Invite a friend", internal: true }
  ],
  guest: [
    { url: `${baseUrl}/events`, label: "Events", internal: true },
    { url: `${baseUrl}/about`, label: "About" },
    { url: `${baseUrl}/login`, label: "Login", internal: true },
    { url: `${baseUrl}/join`, label: "Join", internal: true }
  ]
});

export const buildDropdownLinks = (baseUrl, userId) => [
  {
    url: `${baseUrl}/profile/view/${userId}`,
    label: "Your Profile",
    internal: true
  },
  { url: `${baseUrl}/information`, label: "FAQ", internal: true },
  { url: `${baseUrl}/logout`, label: "Log out", internal: true }
];
