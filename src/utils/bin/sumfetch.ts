import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      sumfetch: summary display
░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▒░░░     -----------
░░░░░░░░░░░░░░░░▓▓▓▒▓▓▓▓▓▓▓▓▓░░░      ABOUT
░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░░      ${config.name}
░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓░░░░░░░░░     ﰩ ${config.ps1_hostname}
░░░░░░░░░░░░░░░░▓▓▓▓▓▓▒▒▒▒▒░░░░░      <u><a href="${config.repo}" target="_blank">Github repo</a></u>
░░▒▓░░░░░░░░░▒▓▓▓▓▓▓▓░░░░░░░░░░░     爵 <u><a href="${config.apache_url}" target="_blank">${config.apache_url}</a></u>
░░▒▓▓▒░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░     -----------
░░▒▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░      CONTACT 
░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░      <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░     爵 <u><a href="${config.social.blog}" target="_blank">${config.social.blog}</a></u>
░░░░░░░░░▓▓▓▓▒▒▓▓░░░░░░░░░░░░░░░     -----------
░░░░░░░░░▒▓▒░░░░▓░░░░░░░░░░░░░░░      DONATE 
░░░░░░░░░▒▓▒░░░░▓▓▒░░░░░░░░░░░░░      <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
};

export default sumfetch;
