import type { Activity } from 'react-activity-calendar';

type Args = {
    to?: Date;
};
export const fetchGithubActivity = async (args?: Args): Promise<Array<Activity>> => {
    if (process.env.USER === 'plopix') {
        return [
            {
                date: new Date().toISOString(),
                count: 0,
                level: 0,
            },
        ];
    }
    const to = args?.to ? new Date(args.to) : new Date();
    const from = new Date(to);
    from.setDate(from.getDate() - 365);
    const response = await fetch(`https://api.github.com/graphql`, {
        method: 'POST',
        body: JSON.stringify({
            query: `#graphql
                query {
                    user(login: "Plopix") {
                        contributionsCollection(from: "${from.toISOString()}", to: "${to.toISOString()}") {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        contributionCount
                                        contributionLevel
                                        date
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.GH_PRIVATE_TOKEN}`,
        },
    });
    if (!response.ok) {
        console.error('Error fetching GitHub activity:', response.statusText);
        return [];
    }
    const data = await response.json();
    const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
    const contributions: Array<Activity> = [];
    const getLevel = (level: string) => {
        if (level === 'FIRST_QUARTILE') {
            return 1;
        }
        if (level === 'SECOND_QUARTILE') {
            return 2;
        }
        if (level === 'THIRD_QUARTILE') {
            return 3;
        }
        if (level === 'FOURTH_QUARTILE') {
            return 4;
        }
        return 0;
    };
    for (const week of weeks) {
        for (const day of week.contributionDays) {
            contributions.push({
                date: day.date,
                count: day.contributionCount,
                level: getLevel(day.contributionLevel),
            });
        }
    }
    return contributions;
};
