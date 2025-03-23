import type { Badge } from '../contracts/badge';
import * as cheerio from 'cheerio';
import SlackAdmin from '../assets/badges/slack-admin.png';
import SlackDev from '../assets/badges/slack-dev.png';

let badges: Badge[] = [];

export async function fetchBadges() {
    if (badges.length === 0) {
        const sfConnect = await fetch('https://connect.symfony.com/profile/plopix');
        const html = await sfConnect.text();
        let $ = cheerio.load(html);
        const list = $('body .profile_public ul.thumbnails > li > a');
        for (let i = 0; i < list.length; i++) {
            const item = $(list[i]);
            const imageSrc = item.find('img').attr('src');
            if (!imageSrc) {
                continue;
            }
            badges.push({
                title: `${item.attr('title')}`,
                url: imageSrc,
                link: `https://connect.symfony.com${item.attr('href')}`,
            });
        }
        const githubBadges = await fetch('https://github.com/Plopix?tab=achievements');
        const ghHtml = await githubBadges.text();
        $ = cheerio.load(ghHtml);
        const ghList = $('body .js-achievement-card-details > summary');

        for (let i = 0; i < ghList.length; i++) {
            const item = $(ghList[i]);
            const imageSrc = item.find('img').attr('src');
            if (!imageSrc) {
                continue;
            }
            const title = item.find('h3').text();
            badges.push({
                title: `${title}`,
                url: imageSrc,
            });
        }

        badges.push({
            title: 'Slack Certified Developer',
            url: SlackDev,
        });
        badges.push({
            title: 'Slack Certified Admin',
            url: SlackAdmin,
        });
    }
    return badges;
}
