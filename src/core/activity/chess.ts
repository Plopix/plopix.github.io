import type { Activity } from 'react-activity-calendar';

type Args = {
    to?: Date;
};
export const fetchChessComActivity = async (args?: Args): Promise<Array<Activity>> => {
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
    const userAgent = 'Plopix/1.0';
    // first we fetch the archives for the range
    const response = await fetch(`https://api.chess.com/pub/player/plopix/games/archives`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
        },
    });
    if (!response.ok) {
        console.error('Error fetching archives on Chess.com:', response.statusText);
        return [];
    }
    const archives = await response.json();
    const toLoopON: string[] = archives.archives.filter((archive: string) => {
        const [yearArchive, monthArchive] = archive.split('/').slice(-2);
        if (
            parseInt(yearArchive) < from.getFullYear() ||
            (from.getMonth() + 1 > parseInt(monthArchive) && parseInt(yearArchive) === from.getFullYear())
        ) {
            return false;
        }
        if (parseInt(monthArchive) > to.getMonth() + 1 && parseInt(yearArchive) === to.getFullYear()) {
            return false;
        }
        return true;
    });
    const getLevel = (count: number) => {
        if (count <= 10) {
            return 1;
        }
        if (count <= 25) {
            return 2;
        }
        if (count <= 40) {
            return 3;
        }
        if (count > 40) {
            return 4;
        }
        return 0;
    };
    const contributions: Array<Activity> = [];
    for (const archive of toLoopON) {
        const response = await fetch(archive, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent,
            },
        });
        if (!response.ok) {
            console.error('Error fetching game on Chess.com:', response.statusText);
            continue;
        }
        const { games } = (await response.json()) as { games: Array<{ end_time: number }> };
        const perDays = games.reduce((acc: Record<string, number>, game: { end_time: number }) => {
            const date = new Date(game.end_time * 1000);
            if (date < from) {
                return acc;
            }
            const day = date.toISOString().split('T')[0];

            return {
                ...acc,
                [day]: (acc[day] || 0) + 1,
            };
        }, {});

        contributions.push(
            ...Object.keys(perDays).map((day) => ({
                date: day,
                count: perDays[day],
                level: getLevel(perDays[day]),
            })),
        );
    }

    return contributions;
};
